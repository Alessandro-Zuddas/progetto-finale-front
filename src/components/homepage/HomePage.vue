<script>
import HomeHeader from "./partials/HomeHeader.vue";
import HomeHero from "./partials/HomeHero.vue";
import HomeMain from "./partials/HomeMain.vue";
import HomeFooter from "./partials/HomeFooter.vue";

export default {
  name: "HomePage",

  components: {
    HomeHeader,
    HomeHero,
    HomeMain,
    HomeFooter,
  },
};
</script>

<template>
  <HomeHeader />
  <HomeHero />
  <HomeMain />
  <HomeFooter />
</template>

<style lang="scss" scoped></style>
