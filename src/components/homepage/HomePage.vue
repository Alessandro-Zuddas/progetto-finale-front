<script>

import HomeHeader from './partials/HomeHeader.vue';
import HomeHero from './partials/HomeHero.vue';

export default {
  name: "HomePage",

  components: {
    HomeHeader,
    HomeHero,
  }
};
</script>

<template>

    <HomeHeader/>
    <HomeHero/>

</template>

<style lang="scss" scoped>

</style>