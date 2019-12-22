<template>
        <v-container
            class="fill-height"
            fluid
        >
            <v-row
            align="start"
            justify="start"
            >
                <ImageCard v-for="item in items" :key="item.id" v-bind:title="item.Name" v-bind:text="item.Name" v-bind:imageSrc="item.ImageFilePath">
                </ImageCard>
            </v-row>
        </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ImageCard from '@/components/ImageCard.vue';
    import axios from 'axios';

    @Component({
      components: {
        ImageCard,
      },
    })

    export default class ImageCardBoard extends Vue {
      // model: string = "ss";
      private baseURL: string = process.env.VUE_APP_API_URL_BASE;
      private items: object = {};

      public mounted() {
          this.ViewUpdate();
      }

      public ViewUpdate() {
        // TODO: change to web socket.
        // TODO: API関連の処理を集約
        return axios.get(this.$data.baseURL + '/liquor')
        .then((res) => {
          for (const item of res.data) {
            item.ImageFilePath = this.$data.baseURL + '/' + item.ImageFilePath;
          }
          this.$data.items = res.data;
        });
      }
    }
</script>