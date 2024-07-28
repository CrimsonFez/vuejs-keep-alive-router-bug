import { createRouter, createWebHistory } from 'vue-router';
import People from './views/People.vue';
import Home from './views/Home.vue';
import Places from './views/Places.vue';
import Regions from './components/Regions.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/people/:personName',
    name: 'people',
    component: People,
    props: true,
    children: [
      {
        name: 'about',
        path: 'about',
        component: () => import('./components/PersonAbout.vue'),
      },
    ],
  },
  {
    path: '/places',
    name: 'places',
    component: Places,
    children: [
      {
        name: 'regions',
        path: 'regions/:regionName',
        component: Regions,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
