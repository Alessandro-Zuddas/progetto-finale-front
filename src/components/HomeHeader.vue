<script>

import { store } from "../store";

export default {
  name: "HomeHeader",

  data(){
    return {
      store, 
      wasRemoved: false,
    }
  },
  methods: {
    calculateTotalPrice(){

        this.store.totalPrice = 0;

        this.store.shoppingCart.forEach(product => {
            
            let productPrice = parseFloat( product.quantity * product.product.price);
            let cartPrice = parseFloat(this.store.totalPrice);

            this.store.totalPrice = parseFloat(this.store.totalPrice += productPrice).toFixed(2);

            this.store.totalPrice = parseFloat(this.store.totalPrice);
        });
    },
    removeOneItem(product){
        product.quantity = parseInt(product.quantity) - 1;

        if(product.quantity == 0){
            this.deleteItem(product.product.id);
        }

        localStorage.setItem("cart", JSON.stringify(this.store.shoppingCart));
    },
    addOneItem(product){
        product.quantity = parseInt(product.quantity) + 1;

        localStorage.setItem("cart", JSON.stringify(this.store.shoppingCart));
    },
    deleteItem(id){

        this.wasRemoved = true;

        this.store.shoppingCart.forEach(product => {
            if(product.product.id==id){

                let currentId = this.store.shoppingCart.indexOf(product);
                this.store.shoppingCart.splice(currentId, 1);
                this.calculateTotalPrice();

                return
            }
        })
        if( this.store.shoppingCart.length>1){
            localStorage.setItem('cart', JSON.stringify(this.store.shoppingCart));
        }else{
            localStorage.setItem('cart', []);
        }

        setTimeout(() => {
            this.wasRemoved = false;
        }, 2300)
    }
  },
};
</script>

<template>

    <div class="container-fluid bg-black">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col my-4">
                    <router-link class="ms-router" :to="{ name: 'homepage' }">
                        <img class="ms-logo-home" src="../assets/img/Deliveboo-Logo-1.png" alt="Logo Deliveroo">
                        <span class="ms-logo-name"> deliveboo</span>
                    </router-link>
                </div>
                <div class="col d-flex justify-content-end my-4" v-if="this.store.email">
                    <span class="ms-name">{{ this.store.name }}</span>
                    <a class="nav-link mx-3 text-light" :href="this.store.companyurl">Area riservata</a>
                </div>
                <div class="col d-flex justify-content-end text-light my-2" v-else>
                    <a class="nav-link mx-2" href="http://127.0.0.1:8000/login">Accedi</a>
                    <a class="nav-link mx-2" href="http://127.0.0.1:8000/register">Registrati</a>
                    <!-- <router-link class="col ms-nav-links" :to="{ name: 'restaurants' }">
                        <strong>Ristoranti</strong>
                    </router-link> -->
                </div>
                <div @click="calculateTotalPrice()" class=" col-1 ms-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="fa-solid fa-basket-shopping ms-cart-icon"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- Carrello -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="ms-cart d-flex align-items-star flex-column " v-if="this.store.shoppingCart.length > 0">
            <h1 class="ms-cart-1">Dettagli dell'ordine:</h1>
            <div class="ms-cart-product d-flex align-items-start" v-for="item in this.store.shoppingCart">
                <div class="ms-singleproduct d-flex align-items-center">
                    <div class=" mx-2 my-2"> 
                        <strong>{{ item.product.name }}:</strong>
                    </div>
                    <div class="mx-2 my-2">{{ item.product.price }}</div>
                    <div class="mx-2 my-2">
                        <button class="ms-quantity-button" @click="removeOneItem(item), calculateTotalPrice()"><strong>-</strong></button> x {{ item.quantity }} <button class="ms-quantity-button" @click="addOneItem(item), calculateTotalPrice()"><strong>+</strong></button>
                    </div>
                    <div class="ms-trash-icon px-3" @click="deleteItem(item.product.id)">
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
            </div>
            <h1 class="ms-total-price my-4">Totale: {{ this.store.totalPrice }} €</h1>
            <router-link
                :to="{ name: 'check-out'}"
                class="btn ms-cart-btn">
                Checkout
            </router-link>
        </div>
        <div v-else>
            <h1>Il carrello è vuoto!</h1>
        </div>

        <div v-show="this.wasRemoved == true" class="ms-add-message my-3 mx-4 position-fixed bottom-0 end-1 p-3">
            <div class="toast-header">
                <strong class="me-auto ms-message-title">Prodotto rimosso correttamente!</strong>
            </div>
            <div class="toast-body ms-message-desc">
                Modifica l'ordine o vai al checkout!
            </div>
        </div>

    </div>
    </div>
    <!-- /Carrello -->
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap');

.container{
    font-family: 'PT Sans', sans-serif;
}

.ms-router{
    text-decoration:none !important;
    display: flex;
    align-items: center;
    .ms-logo-home{
        width: 5rem;
    }

    .ms-logo-name{
        color:  rgba(23, 196, 185, 1);
        font-size:40px;
    }
}

.nav-link:hover , .ms-name{
    color:  rgba(23, 196, 185, 1);
}

.ms-nav-links, span{
    color: white;
    text-decoration: none;
}

.ms-cart-icon{
    font-size: 1.375rem;
}

.ms-cart-icon:hover{
    color: rgba(23, 196, 185, 1);
}

.ms-button{
    background-color: transparent;
    color: #fff;
}
.ms-cart{
    height: 100%;
}
.ms-cart-1{
  height:70px
}
.ms-product-delate:hover{
    color:  rgba(23, 196, 185, 1);
}
.ms-cart-product{
    flex-grow: 1;
    border-bottom: 1px solid black;
}
.ms-total-price{
    height:70px
}
.ms-quantity-button{
    color:  rgba(23, 196, 185, 1);
    padding: 3px 8px;
    background-color: transparent;
    border:1px solid lightgray;
}
.ms-quantity-button:hover{
    background-color: rgba(23, 196, 185, 1);
    color:#fff;
}
.ms-trash-icon:hover{
color:#e30e0e;
}
.ms-cart-btn{
    background-color:  rgba(23, 196, 185, 1);
    color:#fff
}
.ms-cart-btn:hover{
    background-color: #01ac9e;
    color:#fff;
}
.ms-add-message{
    font-size: 22px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: lightgreen;

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