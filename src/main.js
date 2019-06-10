import Vue from "vue";
import App from "./App.vue";
import router from './router/index.js';
import { loadScript } from "esri-loader";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VModal from "vue-js-modal";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueSidebarMenu from "vue-sidebar-menu";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import VueIntro from "vue-introjs";
import CcgVueTools from "ccg-vue-tools";
import "ccg-vue-tools/dist/ccg-vue-tools.css";
import XLSX from 'xlsx';
import vueXlsxTable from 'vue-xlsx-table';
import mathRounding from 'mathjs';
import VueSticky from 'vue-sticky';
Vue.use(VueSticky)
Vue.use(vueXlsxTable, {rABS: false});
Vue.use(mathRounding);
Vue.use(CcgVueTools);
Vue.use(VueIntro);
Vue.use(Vuesax);
Vue.use(VueSidebarMenu);
Vue.use(router);
Vue.use(BootstrapVue);
Vue.use(VModal);
Vue.use(Vuetify);
Vue.use(XLSX);
// const routes = [
//   { path: "/streetViewer", component: streetViewer },
//   { path: "/projectPicker", component: projectPicker}
// ];
// const ProjectPicker = {template: '<div>ProjectPicker</div>'}
// const router = new VueRouter({
//   routes // short for `routes: routes`

// });
// const app = new Vue({
//   router
// }).$mount('#app')
  const options = {
    url: "https://js.arcgis.com/3.28/"
  };

loadScript(options);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
