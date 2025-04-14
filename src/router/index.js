import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/pages/home/HeroHeader.vue';
import AboutUs from '@/components/pages/AboutUs.vue';
import Support from '@/components/pages/Support.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/support', component: Support },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
