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
        addedToCart: false,
    }
  },
  methods:{

    calculateTotalPrice(){

        this.store.totalPrice = 0;

        this.store.shoppingCart.forEach(product => {
            
            let productPrice = parseFloat( product.quantity * product.product.price);
            let cartPrice = parseFloat(this.store.totalPrice);

            console.log(productPrice, "Product Price")
            console.log(cartPrice, "Cart Price")

            this.store.totalPrice = parseFloat(this.store.totalPrice += productPrice).toFixed(2);

            this.store.totalPrice = parseFloat(this.store.totalPrice);
        });
    },

    incrementQuantity(id) {
        
        this.productsQuantity[id]+=1;
        localStorage.setItem('productsQuantity', JSON.stringify(this.productsQuantity));
    },

    decrementQuantity(id) {
        if (this.productsQuantity[id] > 1) {
          this.productsQuantity[id]=this.productsQuantity[id]-1;
          localStorage.setItem('productsQuantity', JSON.stringify(this.productsQuantity));
        }

    },

    addToCart(product){

        this.addedToCart = true;

        let wasFound = false;
        let wrongCompany = false;

       if( localStorage.getItem("cart") ){
            this.store.shoppingCart = JSON.parse(localStorage.getItem('cart')); 
        }

        let quantity = this.productsQuantity[product.id];

        console.log(this.store.shoppingCart);

        this.store.shoppingCart.forEach(item => {
            
            if(item.product.id == product.id) {

                item.quantity = parseInt(item.quantity);

                item.quantity += parseInt(quantity);

                wasFound = true;
                
                setTimeout(() => {
                    this.addedToCart = false;
                }, 3000);

                return

            }else if(product.company_id != item.product.company_id ){
                
                wrongCompany = true;

                setTimeout(() => {
                    this.addedToCart = false;
                }, 3000);

                return

            }

        }
        
        );

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
        this.productsQuantity=JSON.parse(localStorage.getItem('productsQuantity'));
        this.restaurant.products.forEach(product => {
            if(!this.productsQuantity.hasOwnProperty(product.id)){
            
                this.productsQuantity[product.id]= 1;
            
                console.log(this.productsQuantity[product.id])
                localStorage.setItem('productsQuantity', JSON.stringify(this.productsQuantity));
            }
        });
    
    })
    .catch(error => {
        console.log(error)
    })
  },

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
            <div class="ms-product mx-5 py-3 d-flex justify-content-start">
                <!-- Singolo Piatto -->
                <div class="card text-bg-light mx-2 my-2" style="width: 18rem;" v-for="product in restaurant.products">
                    <div class="card-body">
                        <div class="ms-img-container">
                            <img class="img-fluid card-img-top" :src="product.image_url" :alt="product.name" v-if="product.image_url">
                            <img class="img-fluid card-img-top" :src="product.image" :alt="product.name" v-else>
                        </div>
                        <h5 class="card-title my-2">{{ product.name }}</h5>
                        <p class="card-text">
                            <strong>Descrizione:</strong> <br>
                            {{ product.description }} <br>
                            <strong>Prezzo:</strong> <br>
                            {{ product.price }}
                        </p>
                        <div>
                            <strong>Quantità:</strong> <br>
                            <span class="me-2" @click="$event=>incrementQuantity(product.id)"><strong>+</strong></span>
                            <span class="me-2">{{ productsQuantity[product.id] }}</span>
                            <span @click="$event=>decrementQuantity(product.id)"><strong>-</strong></span>
                        </div>
                        <button @click="addToCart(product), calculateTotalPrice()"
                                class="btn btn-primary my-2">
                                    Aggiungi al carrello
                        </button>
                    </div>
                </div>
                <!-- /Singolo Piatto -->
                <div v-show="this.addedToCart == true" class="ms-add-message my-4">
                    <p>Prodotto aggiunto al carrello!</p>
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
    margin: auto;
}

.ms-company-img{
    max-width: 100%;
    max-height: 28.125rem;
    border-radius: 1.5625rem;
    overflow-y: auto;
}

.ms-img-container{
    text-align: center;
    img{
        max-width: 15.625rem;
        max-height: 9.375rem;
        border-radius: 5%;
    }
}

.ms-add-message{
    font-size: 22px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: lightgreen;
}
</style>