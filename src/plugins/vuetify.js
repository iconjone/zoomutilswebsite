import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#004785",
        secondary: "#adb5bd",
        accent: "#db6f02",
        error: "#b71c1c",
        success: "#27b81a"
      },
      dark: {
        primary: "#004785",
        secondary: "#adb5bd",
        accent: "#db6f02",
        error: "#b71c1c",
        success: "#27b81a"
      }
    }
  }
});
