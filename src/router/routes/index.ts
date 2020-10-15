import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../../views/About.vue')
  }
];

export default routes;
