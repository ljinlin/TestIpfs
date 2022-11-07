import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

import i18n from './lang'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Web3 from 'web3';
import "./icons";
import 'element-ui/lib/theme-chalk/display.css';

import "./lib/web3eth.js"
// import "./lib/web3.min.js"
import abi from "./lib/testerc1155.abi.js"

Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(ElementUI, {
  // size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})


// window.web3=new Web3(window.ethereum);
window.web3 = new Web3(web3.currentProvider);


new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
