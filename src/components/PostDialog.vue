<template>
  <v-row justify="center">
    <v-dialog v-model="formVisible" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Post Liquor!</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6" sm="6" md="4">
                <v-text-field label="liquor name*" v-model="liquorName" required></v-text-field>
              </v-col>
              <v-col cols="6" sm="6" md="4">
                <v-file-input
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="image file"
                    prepend-icon="mdi-camera"
                    label="liquor image*"
                    required
                    multiple
                    @change="selectedFile"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="formVisible = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="postLiquor" type="submit">Post</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import axios from 'axios';

    @Component
    export default class PostDialog extends Vue {
        @Prop({ default: false })
        private formVisible!: boolean;

        private liquorName: string = '';

        private uploadFile: Blob | string = '';

        private selectedFile(event: any) {
            this.uploadFile = event[0];
        }
        private postLiquor() {
          // set params
          const formData = new FormData();
          formData.append('image', this.uploadFile);
          formData.append('name', this.liquorName);
          this.$emit('SelectedLiquor', formData);
        }
    }
</script>