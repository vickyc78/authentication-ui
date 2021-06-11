import Vue from "vue";
import Vuex from "vuex";

// modules
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },
  state: {
    title: "",
    sidebarMenu: [
      {
        title: "Logout",
        link: "/login"
      }
    ],
    account: [
      {
        title: "my profile",
        icon: "mdi-account-outline"
      },
      {
        title: "change password",
        icon: "mdi-lock-reset"
      },
      {
        title: "notifications",
        icon: "mdi-bell-outline"
      }
    ]
  },
  mutations: {
    SET_TITLE(state, data) {
      state.title = data;
    }
  },
  actions: {},
  getters: {}
});
