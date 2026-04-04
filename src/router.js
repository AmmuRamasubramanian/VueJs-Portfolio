import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ExperiencePage from './components/ExperiencePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperiencePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;