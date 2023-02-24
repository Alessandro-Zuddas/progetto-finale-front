<script>
import HomePage from "./components/homepage/HomePage.vue";
export default {
  components: {
    HomePage,
  },
  data() {
    return {
      email:"",
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {

       this.email=this.$route.query.email;
      console.log(this.$route.query.name);

      // Utilizza i dati dell'utente per personalizzare l'esperienza utente
      // ...
    },
  },
};
</script>

<template>
  <div>
    {{ email }}
    <HomePage/>
  </div>
</template>

<style lang="scss">
  @import "./style/global.scss";
</style>
