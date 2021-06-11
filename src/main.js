import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);

import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

import "./styles/main.scss";
import service from "../service/apiService";
router.beforeEach(async (to, from, next) => {
  console.log("FFFFFFFFFFFFFFFF", to, from, next);
  if (to.meta.requiresAuth) {
    console.log("inside if");
    if (localStorage.getItem("accessToken")) {
      console.log("dfghjk");
      let findOneUser = await service.apiCallWithHeaderWithData(
        "/User/getOneDetail",
        {}
      );
      console.log("findOneUser", findOneUser);
      if (findOneUser && findOneUser.status == 200) {
        console.log("inside iffffffffff");
        if (to.meta.accessLevel.includes(findOneUser.data.accessLevel)) {
          next();
        } else {
          localStorage.clear();
          next(from.path);
        }
      } else {
        console.log("inside else eeeeeeeeee");
        localStorage.clear();
        next("/login");
      }
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

// Vue.mixin({
//   created() {
//     console.log('created: ' + this.$options.name)
//   },
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
