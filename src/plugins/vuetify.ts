import Vue from 'vue';
import Vuetify, {
  VCard,
  VToolbar,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VCard,
    VToolbar,
  },
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
