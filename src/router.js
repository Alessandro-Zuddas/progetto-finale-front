import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../src/components/homepage/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },

  ],
});

export default router;