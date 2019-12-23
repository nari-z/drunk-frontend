<template>
  <div>
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
      :width="width"
      :height="height"
    >
      <v-img
        v-if="media"
        class="white--text"
        height="200px"
        :src="imageSrc"
      >
          <!-- <v-card-title class="align-end fill-height">{{title}}</v-card-title> -->
      </v-img>
      <!-- <v-card-title v-else>{{title}}</v-card-title> -->

      <v-card-text>{{text}}</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn icon>
        <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn text>Click</v-btn>
        <v-btn outlined>Click</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// TODO: モデルをクラス化
// TODO: Typescript化
  export default {
    props: {
      title: String,
      text: String,
      imageSrc: String,
    },
    data: () => ({
      flat: false,
      media: true,
      loading: false,
      actions: false,
      outlined: true,
      elevation: undefined,
      raised: false,
      width: 344,
      height: undefined,
    }),
  };
</script>