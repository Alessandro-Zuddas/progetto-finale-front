<script>
import axios from 'axios';
import { store } from "../../store";

export default {
  name: "SingleRestaurant",
  data(){
    return{
        store,
    }
  },
    created(){

        axios.get('http://127.0.0.1:8000/api/companies/' + this.$route.params.slug)
        .then(response => {

            this.restaurant = response.data;

        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<template>

    <div class="container-fluid d-flex p-0">
        <div class="ms-aside py-4 px-4">
            
        </div>
        <div class="ms-products-container">
            
        </div>
    </div>

</template>

<style lang="scss" scoped>

.ms-aside{
    width: 30vw;
    height: 80vh;
    border-right: 1px solid black;
}

.ms-products-container{
    width: 70vw;
    height: 80vh;
}

.ms-product{
    flex-wrap: wrap;
}

.ms-company-img{
    max-width: 28.125rem;
    max-height: 28.125rem;
    border-radius: 1.5625rem;
    overflow-y: auto;
}

</style>