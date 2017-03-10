// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Test from './components/Test.vue'
import Testcase from './components/Testcase.vue'
import not_found from './pages/404.vue'
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {path: '/:project/:testcase', component: Testcase, name:'Testcase', props: true},
    {path: '/test', component: Test, name:'Test'},
    {path: '/*', component: not_found, name:'not_found'},
  ]
});



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

