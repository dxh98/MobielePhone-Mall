import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import router from "./router";
import store from "./store";
import "vant/lib/index.css";

require("./assets/css/reset.css");

Vue.config.productionTip = false;
// Vue.prototype.$EventBus = new Vue();
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
