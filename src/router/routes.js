export default [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/not-authority',
        component: () => import('@/views/system/not-authority.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/system/login/index.vue'),
  },
  {
    path: '/skeleton',
    component: () => import('@/views/system/skeleton/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/system/404.vue'),
  },
];
