// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Test from './components/Test.vue'
import welcome_page from './pages/WelcomePage.vue'
import Testcase from './components/Testcase.vue'
import Project from './components/Project.vue'
import projectSettings from './components/Project_settings.vue'
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
    // {path: '/*', component: not_found, name:'not_found'},
    {path: '/', component: welcome_page, name:'welcome_page'},
    {path: '/:project', component: Project, name:'project', props: true},
    {path: '/:project/settings', component: projectSettings, name:'settings', props: true},
  ]
});



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

