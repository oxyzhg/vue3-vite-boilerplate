// import type { RouteRecordRaw } from 'vue-router';
// import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';

import basicRoutes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
});

export default router;
