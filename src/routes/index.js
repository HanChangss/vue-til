import { createRouter, createWebHistory } from 'vue-router';


// 라우트 정의
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    //코드 스프리팅 그때 그때 바로 vue 파일을 가져오도록 하는 것 -> 이래야 network에 상태값이 표현됨
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/views/SignupPage.vue'),
  },
  {
    path: '/main',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/add',
    component: () => import('@/views/PostAddPage.vue'),
  },
  {
    path: '/*',
    component: () => import('@/views/NotFoundPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;