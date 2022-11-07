import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/layout/index'

Vue.use(Router);

const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: Layout,
    meta: {
      title: '首页',
      roles: ''
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
];

const asyncRoutes = [];

const createRouter = () => {
  return new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });
};

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
export { asyncRoutes, constantRoutes };
