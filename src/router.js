import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../src/components/pages/HomePage.vue";
import SingleRestaurant from "../src/components/pages/SingleRestaurant.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/companies/:slug',
      name: 'single-restaurant',
      component: SingleRestaurant
    },
  ],
});

export default router;