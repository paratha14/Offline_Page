import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/home.vue';
import OfflinePage from '../components/offline.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/offline', component: OfflinePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
