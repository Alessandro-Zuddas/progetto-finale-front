<script>
import HomeHeader from "./partials/HomeHeader.vue";
import HomeHero from "./partials/HomeHero.vue";
import HomeFooter from "./partials/HomeFooter.vue";

export default {
  name: "HomePage",

  components: {
    HomeHeader,
    HomeHero,
    HomeFooter,
  },
};
</script>

<template>
  <HomeHeader />
  <HomeHero />
  <HomeFooter />
</template>

<style lang="scss" scoped></style>
