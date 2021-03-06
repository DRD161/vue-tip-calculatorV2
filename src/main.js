import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlusCircle, faMinusCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  render: h => h(App)
});
