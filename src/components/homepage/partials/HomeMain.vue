<script>
import HomeSectionApp from "./HomeSectionApp.vue";
import HomeSectionDiscount from "./HomeSectionDiscount.vue";
import HomeSectionPartnership from "./HomeSectionPartnership.vue";

export default {
  name: "HomeMain",

  components: {
    HomeSectionApp,
    HomeSectionDiscount,
    HomeSectionPartnership,
  },
};
</script>

<template>
  <HomeSectionApp />
  <HomeSectionDiscount />
  <HomeSectionPartnership />
</template>

<style lang="scss" scoped></style>
