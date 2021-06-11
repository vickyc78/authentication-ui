import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    // dark: true,
    themes: {
      light: {
        primary: "#6148ac",
        secondary: "#424242",
        accent: "#82B1FF",
        success: '#06d6a0',
        error: '#ef476f',
        info: '#2196f3',
        warning: '#ffd166'
      },
      dark: {
        primary: "#6148ac",
        secondary: "#424242",
        accent: "#82B1FF",
        success: '#06d6a0',
        error: '#ef476f',
        info: '#2196f3',
        warning: '#ffd166'
      },
    },
    options: {
      variations: false,
    },
  },
});
