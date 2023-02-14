import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../pages/HomePage/HomePage.vue';
import AboutMe from '../pages/AboutMe/AboutMe.vue';
import ProjectList from '../pages/ProjectList/ProjectList.vue';
import Contact from '../pages/Contact/Contact.vue';

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
    component: ProjectList,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
