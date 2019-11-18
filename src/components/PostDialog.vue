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
          <v-btn color="blue darken-1" text @click="formVisible = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="postLiquor" type="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import axios from "axios";

    @Component
    export default class PostDialog extends Vue {
        @Prop({ default: false })
        formVisible!: boolean;

        liquorName: string = "";

        uploadFile: Blob | string = "";

        private selectedFile(event:any) {
            this.uploadFile = event[0];
        }
        private postLiquor() {
          // set params
          var formData = new FormData();
          formData.append("image", this.uploadFile);
          formData.append("name", this.liquorName);
          // send
          // TODO: Emitを使って親コンポーネントに送信してもらう（通信処理を共通化する）
          //       FormData（というよりObject？）をEmitで送信できていない。stringなら成功した。
          axios.post(process.env.VUE_APP_API_URL_BASE + '/liquor', 
                          formData
                      ).then( response => {
                        // TODO: レスポンスに応じて対応
                      }).catch(error => {
                        // TODO: エラーに応じて対応
                      });
        }
    }
</script>