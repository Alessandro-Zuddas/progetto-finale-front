<script>
import axios from 'axios';
import { store } from "../../store";

export default {
  name: "SingleRestaurant",

  components: {

  },
  data(){
    
    return{
        productsQuantity: {},
        restaurant: {},
        store,
    }
  },
  methods:{

    incrementQuantity(id) {
        
        this.productsQuantity[id]+=1;
    },

    decrementQuantity(id) {
        if (this.productsQuantity[id] > 1) {
          this.productsQuantity[id]=this.productsQuantity[id]-1;
        }
    },

    addToCart(product){

        let wasFound = false;
        let wrongCompany = false;

       if( localStorage.getItem("cart") ){
            this.store.shoppingCart = JSON.parse(localStorage.getItem('cart')); 
        }

        let quantity = document.getElementById(`${product.id}-quantity`).value;

        console.log(this.store.shoppingCart);

        this.store.shoppingCart.forEach(item => {
            
            if(item.product.id == product.id) {

                item.quantity = parseInt(item.quantity);

                item.quantity += parseInt(quantity);

                wasFound = true;

                return

            }else if(product.company_id != item.product.company_id ){
                
                wrongCompany = true;
                return

            }

        });

        if(wasFound == false && wrongCompany == false){
            const item = {
            "product": product,
            "quantity": quantity,
            };

            this.store.shoppingCart.push(item);
        }

        localStorage.setItem('cart', JSON.stringify(this.store.shoppingCart));
    },  

  },
  created(){
    if( localStorage.getItem("cart") ){
        this.store.shoppingCart = JSON.parse(localStorage.getItem('cart')); 
    }

    axios.get('http://127.0.0.1:8000/api/companies/' + this.$route.params.slug)
    .then(response => {

        this.restaurant = response.data;
        this.restaurant.products.forEach(product => {
        this.productsQuantity[product.id]= 1;
        console.log(this.productsQuantity)
    });
    })
    .catch(error => {
        console.log(error)
    })
   
  }

};
</script>

<template>

    <div class="container-fluid d-flex p-0">
        <div class="ms-aside py-4 px-4">
            <div class="text-center mb-4">
                <img :src="this.restaurant.image" class="ms-company-img" :alt="this.restaurant.company_name" v-if="this.restaurant.image">
                <img src="https://via.placeholder.com/150" class="card-img-top ms-company-img" :alt="this.restaurant.company_name" v-else>
                <h1 class="my-1">{{ this.restaurant.company_name }}</h1>
                <small class="">{{ this.restaurant.address }}</small>
            </div>
            <h6 class="my-3">
                <i class="fa-solid fa-phone mx-2"></i>
                <strong>Numero di telefono:</strong>
                {{ this.restaurant.telephone }}.
            </h6>
            <h6 class="my-3">
                <i class="fa-regular fa-clock mx-2"></i>
                <strong>Orario di apertura:</strong>
                {{ this.restaurant.opening_hours }}.
            </h6>
            <h6 class="my-3">
                <i class="fa-regular fa-sack-dollar mx-2"></i>
                <strong>Ordine minimo:</strong>
                {{ this.restaurant.minimum_order }} €.
            </h6>
        </div>
        <div class="ms-products-container">
            <div class="ms-product py-4 d-flex justify-content-center">
                <div class="card mx-2 my-2" style="width: 18rem;" v-for="product in restaurant.products">
                    <div class="card-body">
                        <div class="ms-img-container">
                            <img :src="product.image_url" :alt="product.name" v-if="product.image_url">
                            <img :src="product.image" :alt="product.name" v-else>
                        </div>
                        <h5 class="card-title my-2">{{ product.name }}</h5>
                        <p class="card-text">
                            <strong>Descrizione:</strong> <br>
                            {{ product.description }} <br>
                            <strong>Prezzo:</strong> <br>
                            {{ product.price }}
                        </p>
                        <div>
                            <button @click="$event=>incrementQuantity(product.id)">+</button>
                            <input type="number" :value="productsQuantity[product.id]" :id="product.id+'-quantity'" />
                            <button @click="$event=>decrementQuantity(product.id)">-</button>
                        </div>
                        <button @click="addToCart(product)"
                                class="btn btn-primary my-2">
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
    height: 100vh;
    border-right: 1px solid black;
}

.ms-products-container{
    width: 70vw;
    height: 100vh;
    overflow-y: auto;
}

.ms-product{
    flex-wrap: wrap;
}

.ms-company-img{
    max-width: 100%;
    max-height: 28.125rem;
    border-radius: 1.5625rem;
    overflow-y: auto;
}

.ms-img-container{
    img{
        max-width: 100%;
        height: 6.25rem;
        border-radius: 5%;
    }
}
</style>