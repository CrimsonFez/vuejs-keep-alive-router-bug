import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/person/:personId',
    name: 'person',
    component: () => import('./views/Person.vue'),
    props: true,
    children: [
      {
        name: 'person.about',
        path: 'about',
        component: () => import('./components/PersonAbout.vue'),
      },
    ],
  },
  {
    path: '/region/:regionId',
    name: 'region',
    component: () => import('./views/Region.vue'),
    props: true,
    children: [
      {
        name: 'region.about',
        path: 'about',
        component: () => import('./components/RegionAbout.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
