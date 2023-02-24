<script>

import axios from "axios";
import HomePage from "./components/homepage/HomePage.vue";
import { store } from "../src/store";


export default {
  components: {
    HomePage,
  },
  data(){
    return {
      store,
    }
  },
  created(){
    axios.get("http://127.0.0.1:8000/api/typologies")
    .then(result => {

      this.store.typologies = result.data;
      console.log(this.store.typologies);

    });

    axios.get("http://127.0.0.1:8000/api/companies")
    .then(result => {

      this.store.companies = result.data;
      console.log(this.store.companies);

    });
  }
};
</script>

<template>
  <div>
    <HomePage/>
  </div>
</template>

<style lang="scss">
  @import "./style/global.scss";
</style>
