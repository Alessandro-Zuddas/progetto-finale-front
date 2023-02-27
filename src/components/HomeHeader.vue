<script>

import { store } from "../store";

export default {
  name: "HomeHeader",

  data(){
    return {
      store, 
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
                <button class=" col-1 btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Carrello</button>
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
       <ul>
            <li v-for="item in this.store.shoppingCart">
                <div>{{ item.product.name }}</div>
                <div>{{ item.product.price }}</div>
                <div>{{ item.product.quantity }}</div>
            </li>
       </ul>
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

</style>