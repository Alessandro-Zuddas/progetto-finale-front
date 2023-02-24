<script>

import HomeHero from "../homepage/partials/HomeHero.vue";
import HomeMain from "../homepage/partials/HomeMain.vue";
import HomeCarousel from "../homepage/partials/HomeCarousel.vue";

export default {
  name: "HomePage",

  components: {

    HomeHero,
    HomeMain,
    HomeCarousel,
    
},
};
</script>

<template>

  <HomeHero />
  <HomeCarousel/>
  <HomeMain />

</template>

<style lang="scss" scoped>



</style>
