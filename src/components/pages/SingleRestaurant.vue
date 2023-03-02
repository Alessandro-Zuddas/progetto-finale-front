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
        addToCartError: false,
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

        let wasFound = false;
        let wrongCompany = false;

       if( localStorage.getItem("cart") ){
            this.store.shoppingCart = JSON.parse(localStorage.getItem('cart')); 
        }

        let quantity = this.productsQuantity[product.id];

        console.log(this.store.shoppingCart);

        this.store.shoppingCart.forEach(item => {
            
            if(item.product.id == product.id) {

                this.addedToCart = true;
                
                item.quantity = parseInt(item.quantity);

                item.quantity += parseInt(quantity);

                wasFound = true;

                return

            }else if(product.company_id != item.product.company_id ){
                
                wrongCompany = true;

                this.addToCartError = true;

                return

            }

        },
        
        setTimeout(() => {
            this.addedToCart = false;
        }, 2300),

        setTimeout(() => {
            this.addToCartError = false;
        }, 2300)
        
        );

        if(wasFound == false && wrongCompany == false){
            const item = {
                "product": product,
                "quantity": quantity,
            };

            this.addedToCart = true;

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
        console.log(this.restaurant)
        if(localStorage.getItem('productsQuantity')){
            this.productsQuantity=JSON.parse(localStorage.getItem('productsQuantity'));
        }
        this.restaurant.products.forEach(product => {
            if(!this.productsQuantity.hasOwnProperty(product.id)){
            
                this.productsQuantity[product.id]= 1;
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
        <div class="ms-aside py-4 px-4 d-flex flex-column shadow">
            <div class="text-center mb-4">
                <img :src="this.restaurant.image" class="ms-company-img" :alt="this.restaurant.company_name" v-if="this.restaurant.image">
                <img src="https://via.placeholder.com/150" class="ms-company-img" :alt="this.restaurant.company_name" v-else>
                <h1 class="my-1">{{ this.restaurant.company_name }}</h1>
                <small class="text-muted">{{ this.restaurant.address }}</small>
            </div>
            <h4 class="my-3 text-center">
                <i class="fa-solid fa-phone mx-2"></i>
                <strong>Numero di telefono:</strong>
                <div>
                {{ this.restaurant.telephone }}
                </div>
            </h4>
            <h4 class="my-3 text-center">
                <i class="fa-regular fa-clock mx-2"></i>
                <strong>Orario di apertura:</strong>
                <div>
                {{ this.restaurant.opening_hours }}
                </div>
            </h4>
            <h4 class="my-3 text-center">
                <i class="fa-solid fa-cart-shopping mx-2"></i>
                <strong class="ms-1">Ordine minimo:</strong>
                <div >
                {{ Math.floor(parseFloat(restaurant.minimum_order)) }} €
                </div>
            </h4>
        </div>
        <div class="ms-products-container">
            <div class="ms-product mx-5 py-3 d-flex justify-content-start">
                <!-- Singolo Piatto -->
                <div class="card text-bg-light mx-3 my-2 shadow border-none" style="width: 18rem;" v-for="product in restaurant.products">
                    <div class="card-body d-flex flex-column">
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
                        <strong>Quantità:</strong>
                        <div class="ms-btn-quantity">
                            <span class="mx-2 px-2" @click="$event=>incrementQuantity(product.id)"><strong><i class="fa-solid fa-plus"></i></strong></span>
                            <span class="mx-2">{{ productsQuantity[product.id] }}</span>
                            <span class="mx-2 px-2" @click="$event=>decrementQuantity(product.id)"><strong><i class="fa-solid fa-minus"></i></strong></span>
                        </div>
                        <div class="mt-auto">
                            <button @click="addToCart(product), calculateTotalPrice()"
                                    class="btn ms-btn my-2 w-100">
                                       <strong>Aggiungi al carrello</strong>
                            </button>
                        </div>
                    </div>
                </div>

                <div v-show="this.addedToCart == true" class="ms-add-message my-3 mx-3 position-fixed bottom-0 end-0 p-3">
                    <div class="toast-header">
                        <strong class="me-auto ms-message-title">Prodotto aggiunto!</strong>
                    </div>
                    <div class="toast-body ms-message-desc">
                        Continua ad aggiungere prodotti o vai al checkout!
                    </div>
                </div>

                <div v-show="this.addToCartError == true" class="ms-add-message-wrong my-3 mx-3 position-fixed bottom-0 end-0 p-3">
                    <div class="toast-header">
                        <strong class="me-auto ms-message-title">Ops!</strong>
                    </div>
                    <div class="toast-body ms-message-desc">
                        Non puoi ordinare da due ristoranti diversi!
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>

.ms-aside{
    width: 30vw;
    height: 130vh;
   
    i{
        color: rgba(23, 196, 185, 1);
    }
}

.ms-products-container{
    width: 70vw;
    height: 130vh;
    overflow-y: auto;
}

.ms-product{
    flex-wrap: wrap;
    margin: auto;
}   

.ms-company-img{
    max-width: 100%;
    max-height: 28.125rem;
    padding-bottom: 20px;
    overflow-y: auto;
}

.ms-img-container{
    text-align: center;
    img{
        height: 12.5rem;
        border-radius: 5%;
    }
}

.ms-btn{
    background-color: rgba(23, 196, 185, 1);
    color: #fff;
}

.ms-btn-quantity{
    padding: 5px;
    max-width: fit-content;
    span{
        display: inline-block;
        cursor: pointer;
        text-align: center;

        :hover{
            color: rgba(23, 196, 185, 0.8);
        }
    }
}
.ms-add-message{
    font-size: 22px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: lightgreen;

    animation: fadeOut 1s;
    animation-delay: 1.5s;
}

.ms-add-message-wrong{
    font-size: 22px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: lightcoral;

    animation: fadeOut 1s;
    animation-delay: 1.5s;
}

.ms-message-title{
    font-size: 18px;
}

.ms-message-desc{
    font-size: 16px;
}

@keyframes fadeOut {
    0%{
        opacity: 1;
    }
    20%{
        opacity: 0.80;
    }
    40%{
        opacity: 0.60;
    }
    60%{
        opacity: 0.40;
    }
    80%{
        opacity: 0.20;
    }
    100%{
        opacity: 0;
    }
}
</style>