import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const AboutScreen = () => import(/* webpackChunkName: "setup" */ '@/views/AboutScreen.vue');
const HomeScreen = () => import(/* webpackChunkName: "base" */ '@/views/HomeScreen.vue');

const routes = [
  {
    path: '/',
    name: 'HomeScreen',
    component: HomeScreen,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'AboutScreen',
    component: AboutScreen,
    meta: {
      title: 'About',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;