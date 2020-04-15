// 入口文件
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  //引入后多了几个标签 keep-alive router-link router-view ... 多了两个属性 $router $route
});
