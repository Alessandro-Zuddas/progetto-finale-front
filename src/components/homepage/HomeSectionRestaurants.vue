<script>
    import { store } from "../../store";
    import axios from "axios";
    export default {
        name:"HomeSectionRestaurants",
        data() {
            return {
                selectedTypes: [],
                filteredCompanies: [],
                store,
            };
        },
        computed: {
            filteredRestaurants() {
                if (this.selectedTypes.length === 0) {
                    return this.store.companies;
                } else {
                    return this.filteredCompanies;
                }
            },
        },
        watch: {
            selectedTypes: {
                handler: function() {
                    this.fetchRestaurants();
                },
                deep: true,
            },
        },
        methods: {
            fetchRestaurants() {
                axios.get('http://127.0.0.1:8000/api/companies', {
                    params: {
                        typologies: this.selectedTypes
                    }
                })
                .then(response => {

                    this.filteredCompanies=response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
            },
        },
        created() {
            this.fetchRestaurants();
        },
    };
</script>

<template>
    <div class="ms-container container shadow py-5">
        <div class="row">
            <div class="ms-col-aside col-3 d-flex align-items-center">
                <div class="ms-title-container my-4 pb-4">
                    <h2 class="ms-category-text">Categorie:</h2>
                </div>
                <div :class="`ms-check-background ms-background-${typology.id}`" v-for="typology in this.store.typologies">
                        <label :for=" typology.slug " class="ms-5 ms-check-restaurant">
                            <input type="checkbox" :value=" typology.slug " :id=" typology.slug " class="me-1" v-model="this.selectedTypes" style="zoom:1.2;">
                            <h3 class="ms-category-title">{{ typology.name }}</h3>
                        </label>
                </div>
            </div>
            
            <div class="ms-col-big col-9">
                <div class="card mx-2 my-4 shadow" style="width: 18rem;" v-for="restaurant in filteredCompanies">
                    <img :src="restaurant.image" class="card-img-top ms-company-img" :alt="restaurant.company_name" v-if="restaurant.image">
                    <img src="https://via.placeholder.com/150" class="card-img-top ms-company-img" :alt="restaurant.company_name" v-else>
                    <div class="card-body">
                       
                        <h5 class="card-title">{{ restaurant.company_name }}</h5>
                        <p class="card-text text-secondary ms-address">{{ restaurant.address }}</p>
                        <span class="badge ms-badge mb-3" v-for="typology in restaurant.typologies"> 
                            {{ typology.name }}
                        </span>
                        <p class="card-text">
                            <strong>Ordine minimo:</strong>
                            {{ restaurant.minimum_order }} €
                        </p>
                
                        
                        <router-link
                        :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }"
                        class="btn ms-button">
                            Ordina ora!
                        </router-link>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .ms-container{
        position: relative;
        margin-top: 100px;
        padding: .625rem 10px;
        background: rgba(255, 255, 255, 0.7);
    }
    
    .ms-col-aside{
        // width: 20vw;
        height: 85vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        overflow-y: auto;
    }

    .ms-col-big{
        // width: 60vw;
        height: 85vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow-y: auto;
        border: 1px solid white;
        border-radius: 15px;
    }

    .card{
        max-height: 400px;
        border: none;
        .ms-company-img{
            height: 9.375rem;
        }
        .ms-address{
            font-size: 13px;
        }
        .ms-badge{
            color: rgba(23, 196, 185, 1);
            font-weight: lighter;
            padding:5px;
            margin-right:5px;
            border: 1px solid lightgray ;
        }
    }

    .ms-title-container{
        background-color: white;
        border-radius: 15px;
        margin-top: .3125rem;
    }

    .ms-category-text{
        position: absolute;
        top: 5%;
        left: 7%;
    }

    .ms-button{
       background-color:  rgba(23, 196, 185, 1);
       color: #fff;
       width:100%;
    }

    .ms-check-restaurant{
        font-size: 19px;
        padding: 10px;
    }

    input[type=checkbox] {
        accent-color: rgba(23, 196, 185, 1);
    }

    .ms-check-background{
        position: relative;
        width: 100%;
        padding: 10px 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: grayscale(0.4);
        cursor: pointer;
    }

    .ms-category-title{
        position: absolute;
        top: 23%;
        left: 32%;
        color: white;
    }

    .ms-background-1{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfY0rG3h36m60KnjBCl7OmJD25SfJxNWeuNA&usqp=CAU);
    }

    .ms-background-2{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhODdAUH8YKjh48hY_9HxHdi_6PcDXWR_L2A&usqp=CAU);
    }

    .ms-background-3{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDOxqL6PMsnyreIoD7CKqaJ9Ci7iY5bYvjA&usqp=CAU);
    }

    .ms-background-4{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYb7Nft0RzuGJVp3ycycja0pMYATL3japiQ&usqp=CAU);
    }

    .ms-background-5{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6eliCoMB-1bPmMatM06o9K1EBwkm7NCRmHQ&usqp=CAU);
    }

    .ms-background-6{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GbZWT5MwgKVSiCT-NeH9nRj523xb8xewWQ&usqp=CAU);
    }

    .ms-background-7{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcChp6A54gDCRtJ7mLgibHBpQh3wtpWgt1A&usqp=CAU);
    }

    .ms-background-8{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF04ibBToBQwlrlaVgf7VSP6hVuFxdBAlhVg&usqp=CAU);
    }

    .ms-background-9{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPIlOyya6y47R46rYXuIrzDhfHJk1HtneQg&usqp=CAU);
    }

</style>