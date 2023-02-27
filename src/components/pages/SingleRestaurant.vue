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
        console.log(this.restaurant);

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
        
          <div class="ms-product d-flex">
            <div class="card mx-2 my-2" style="width: 18rem;" v-for="product in restaurant.products">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">
                        <strong>Descrizione:</strong> <br>
                        {{ product.description }}
                        <strong>Prezzo:</strong> <br>
                        {{ product.price }}
                    </p>
                    <input type="number" name="" id="quantity" >
                   <button
                        class="btn btn-primary">
                            Aggiungi al carrello
                </button>
                </div>
          </div>
         </div>
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
}

</style>