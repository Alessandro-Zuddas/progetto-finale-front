<script>
import HomeHeader from "./partials/HomeHeader.vue";
import HomeHero from "./partials/HomeHero.vue";
import HomeCarousel from "./partials/HomeCarousel.vue";
import HomeFooter from "./partials/HomeFooter.vue";

export default {
  name: "HomePage",

  components: {
    HomeHeader,
    HomeHero,
    HomeCarousel,
    HomeFooter,
},
};
</script>

<template>
  <HomeHeader />
  <HomeHero />
  <HomeCarousel/>
  <HomeFooter />
</template>

<style lang="scss" scoped>



</style>
