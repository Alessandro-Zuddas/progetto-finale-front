<script>
import HomeHeader from "./partials/HomeHeader.vue";
import HomeHero from "./partials/HomeHero.vue";
import HomeMain from "./partials/HomeMain.vue";
import HomeCarousel from "./partials/HomeCarousel.vue";
import HomeFooter from "./partials/HomeFooter.vue";

export default {
  name: "HomePage",

  components: {
    HomeHeader,
    HomeHero,
    HomeMain,
    HomeCarousel,
    HomeFooter,
},
};
</script>

<template>
  <HomeHeader />
  <HomeHero />
  <HomeCarousel/>
  <HomeMain />
  <HomeFooter />
</template>

<style lang="scss" scoped>



</style>
