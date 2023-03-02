
<script>

import axios from 'axios';
import { store } from "../../store";

export default {
  name: "SummaryOrder",
  data(){
    return{
        store,
        company:{},
        cart:[],
        currentTotalPrice: 0,
    }
  },
  created(){
    this.currentTotalPrice = this.store.totalPrice;
    this.store.orderNumber=localStorage.getItem('orderNumber')
    this.store.companies=JSON.parse(localStorage.getItem('companies'));
    console.log(this.store.companies)
    this.calculateTotalPrice();
    if(this.store.shoppingCart.length>0){
        this.cart=this.store.shoppingCart;
    }else{
        this.cart=JSON.parse(localStorage.getItem('orderCart'));
    }
    this.company=this.store.companies.data.find(element => element.id == this.cart[0].product.company_id);
    this.store.shoppingCart=[];
    localStorage.setItem('cart',[]);
    localStorage.setItem("orderCart", JSON.stringify(this.cart));
    localStorage.setItem("currentPrice", this.currentTotalPrice);
    this.currentTotalPrice = localStorage.getItem("currentPrice");
  },
  methods:{
    calculateTotalPrice(){

        this.store.totalPrice = 0;

        this.store.shoppingCart.forEach(product => {
            
            let productPrice = parseFloat( product.quantity * product.product.price);
            let cartPrice = parseFloat(this.store.totalPrice);

            this.store.totalPrice = parseFloat(this.store.totalPrice += productPrice).toFixed(2);

            this.store.totalPrice = parseFloat(this.store.totalPrice);

        });
    },
  }
}
</script>
<template>
    <div class="container ms-order-container">
        <div class="row">
            <div class="ms-order-recap-title py-2 mb-4">
                <h1>Riepilogo ordine:</h1>
            </div>
            <div class="col-3">
                <img class="img-fluid" :src="company.image_url" alt="company.name" v-if="company.image_url">
                <img class="img-fluid" :src="company.image" alt="company.name" v-else>
                <h2>{{ company.company_name }}</h2>
            </div>
            <div class="col-7">
                <h3><strong>Ordine n°:</strong> {{store.orderNumber}}</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Prodotto</th>
                            <th scope="col">Quantità</th>
                            <th scope="col">Prezzo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="element in cart">
                            <th>{{element.product.name}}</th>
                            <th>x{{ element.quantity }}</th>
                            <th>{{element.product.price}} €</th>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Totale:</strong> {{ this.currentTotalPrice }}€</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

.ms-order-container{
    margin-top: 25px;
    margin-bottom: 25px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: rgba(23, 196, 185, 1);
    border-radius: 10px;
}

.ms-order-recap-title{
    background-color: rgba(23, 196, 185, 1);
}

</style>