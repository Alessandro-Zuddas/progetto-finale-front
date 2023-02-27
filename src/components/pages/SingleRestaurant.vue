<script>
import axios from 'axios';


export default {
  name: "SingleRestaurant",

  components: {

  },
  data(){
    return{
        restaurant: {},
    }
  },
  created(){
    console.log(this.$route.params.slug);
    axios.get('http://127.0.0.1:8000/api/companies/' + this.$route.params.slug)
    .then(response => {

        this.restaurant = response.data;

    })
    .catch(error => {
        console.log(error)
    })
  }

};
</script>

<template>

    <div class="container-fluid d-flex p-0">
        <div class="ms-aside">

        </div>
        <div class="ms-products-container">

        </div>
    </div>

</template>

<style lang="scss" scoped>

.ms-aside{
    width: 30vw;
    height: 80vh;
    background-color: red;
}

.ms-products-container{
    width: 70vw;
    height: 80vh;
    background-color: aqua;
}

</style>