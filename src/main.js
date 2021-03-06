import Vue from "vue";
import Vant from "vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vant/lib/index.css";
require("./assets/css/reset.css");

Vue.use(Vant);

require("./assets/css/reset.css");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");