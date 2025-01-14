import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/layout/index.vue'),
      children: [
        {
          path: '/intro',
          component: () => import('../views/introduce/index.vue')
        },
        {
          path: '/line',
          component: () => import('../views/line.vue')
        },
        {
          path: '/bar',
          component: () => import('../views/bar.vue')
        },
      ]
    },
  ]
})