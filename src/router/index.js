import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage/HomePage.vue';
import AboutMe from '../pages/AboutMe/AboutMe.vue';
import WorkCollection from '../pages/WorkCollection/WorkCollection.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutMe,
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkCollection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
