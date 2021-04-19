import Vue from 'vue';
import Router from 'vue-router';
import Home from './main_view/Home.vue'
import About from './main_view/About.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
})