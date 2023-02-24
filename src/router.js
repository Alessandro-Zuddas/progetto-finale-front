import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../src/components/pages/HomePage.vue";
import RestaurantsPage from "../src/components/pages/RestaurantsPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: RestaurantsPage
    },

  ],
});

export default router;