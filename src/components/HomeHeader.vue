<script>

import { store } from "../store";

export default {
  name: "HomeHeader",

  data(){
    return {
      store, 
    }
  },
  methods: {
    calculateTotalPrice(){

        this.store.totalPrice = 0;

        this.store.shoppingCart.forEach(product => {
            
            let productPrice = parseFloat( product.quantity * product.product.price);
            let cartPrice = parseFloat(this.store.totalPrice);

            console.log(productPrice, "Product Price")
            console.log(cartPrice, "Cart Price")

            // Funziona toFixed() ma non logica
            this.store.totalPrice = parseFloat(this.store.totalPrice += productPrice).toFixed(2);

            console.log(this.store.totalPrice, "Total Price prima")
            this.store.totalPrice = parseFloat(this.store.totalPrice);
            console.log(this.store.totalPrice, "Total Price dopo")
            // /Funziona toFixed() ma non logica                                                       

            // Funziona logica ma non toFixed()
            // parseFloat(this.store.totalPrice += productPrice).toFixed(2);
            // /Funziona logica ma non toFixed()
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
    }
  },
};
</script>

<template>

    <div class="container-fluid bg-black">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col my-2">
                    <router-link :to="{ name: 'homepage' }">
                        <img class="ms-logo-home" src="https://logodownload.org/wp-content/uploads/2019/09/deliveroo-logo-6.png" alt="Logo Deliveroo">
                    </router-link>
                </div>
                <div class="col text-end my-2" v-if="this.store.email">
                    <span>{{ this.store.name }}</span>
                    <a class="mx-2 btn btn-primary" :href="this.store.companyurl">Backoffice</a>
                </div>
                <div class="col text-end my-2" v-else>
                    <a class="mx-2 btn btn-primary" href="http://127.0.0.1:8000/login">Accedi</a>
                    <a class="mx-2 btn btn-secondary" href="http://127.0.0.1:8000/register">Registrati</a>
                    <!-- <router-link class="col ms-nav-links" :to="{ name: 'restaurants' }">
                        <strong>Ristoranti</strong>
                    </router-link> -->
                </div>
                <button @click="calculateTotalPrice()" class=" col-1 btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="fa-solid fa-basket-shopping ms-cart-icon"></i>
                </button>
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
        <div v-if="this.store.shoppingCart.length > 0">
            <h1>Dettagli dell'ordine:</h1>
            <div class="ms-cart-product d-flex align-items-center" v-for="item in this.store.shoppingCart">
                <div class=" d-inline" @click="deleteItem(item.product.id)">
                    <strong>x</strong>
                </div>
                <div class="mx-2 my-2 d-inline">- 
                    <strong>{{ item.product.name }}:</strong>
                </div>
                <div class="mx-2 my-2">{{ item.product.price }}</div>
                <div class="mx-2 my-2">
                    <button class="ms-quantity-button btn btn-danger" @click="removeOneItem(item), calculateTotalPrice()">-</button> x {{ item.quantity }} <button class="ms-quantity-button btn btn-success" @click="addOneItem(item), calculateTotalPrice()">+</button>
                </div>
            </div>
            <h1 class="ms-total-price my-4">Totale: {{ this.store.totalPrice }} €</h1>
        </div>
        <div v-else>
            <h1>Il carrello è vuoto!</h1>
        </div>
    </div>
    </div>
    <!-- /Carrello -->
</template>

<style lang="scss" scoped>

.ms-logo-home{
    width: 200px;
}

.ms-nav-links, span{
    color: white;
    text-decoration: none;
}

.ms-nav-links:hover{
    transform: scale(1.5);
}

.ms-cart-icon{
    font-size: 1.375rem;
}
.ms-button{
       background-color:  rgba(23, 196, 185, 1);
       color: #fff;
       width:100%;
}
.ms-cart-product{
    border-bottom: 1px solid black;
}

.ms-quantity-button{
    padding: 3px 8px;
    border-radius: 50%;
    border: none;
    aspect-ratio: 1;
}

</style>