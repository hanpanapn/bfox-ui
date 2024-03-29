/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

 import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

 const routes = [
   {
    title: '首页',
    name: 'Home',
    path: '/',
    component: () => import('./index.vue'),
  },
  {
    title: '快速开始',
    name: 'Install',
    path: '/install',
    component: () => import('./install/index.vue'),
  },
  {{ routes }}];

const routesStatic = [
  {
    title: '博客',
    name: 'Blog',
    path: '/blog',
    component: () => import('./components/Blog.vue'),
  },
]
 const routerConfig = {
   history: createWebHashHistory(),
   routes:routes.concat(routesStatic),
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig as RouterOptions);
 
 export default router;
