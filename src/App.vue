<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click="transitHome">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="showPostDialog">
          <v-list-item-action>
            <v-icon>mdi-cup</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Post</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="brown"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>drunk!</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <ImageCardBoard ref="ImageCardBoard"></ImageCardBoard>
    </v-content>

    <PostDialog v-bind:formVisible="visiblePostDialog" v-on:SelectedLiquor="ReseiveSelectedLiquor($event)">
    </PostDialog>

    <v-footer
      color="brown"
      app
    >
      <span class="white--text">&copy; 2019 drunk</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ImageCardBoard from '@/components/ImageCardBoard.vue';
    import PostDialog from '@/components/PostDialog.vue';
    import axios from 'axios';

    @Component({
      components: {
        ImageCardBoard,
        PostDialog,
      },
    })
    export default class App extends Vue {
      public $refs!: {
        ImageCardBoard: ImageCardBoard,
      };

      private drawer: boolean = false;
      private visiblePostDialog: boolean = false;


      public transitHome() {
        this.visiblePostDialog = false;
        this.drawer = false;
      }

      public showPostDialog() {
        this.visiblePostDialog = true;
      }

      private ReseiveSelectedLiquor(postParams: any) {
        // send
        // TODO: API関連の処理を集約
        axios.post(process.env.VUE_APP_API_URL_BASE + '/liquor',
                      postParams,
                    ).then( response => {
                      // TODO: レスポンスに応じて対応
                    }).catch(error => {
                      // TODO: エラーに応じて対応
                    });

        // update screen.
        this.transitHome();
        this.$refs.ImageCardBoard.ViewUpdate();
      }
    }
</script>