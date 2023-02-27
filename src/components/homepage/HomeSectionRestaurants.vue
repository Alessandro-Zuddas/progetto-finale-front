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
    <div class="container-fluid py-5">
        <div class="row">
            <div class="ms-col-aside">
                <div class="ms-title-container pb-4">
                    <h2 class="ms-2">Categorie:</h2>
                </div>
                <label :for=" typology.slug " class="ms-2 text-secondary ms-check-restaurant" v-for="typology in this.store.typologies">
                    <input type="checkbox" :value=" typology.slug " :id=" typology.slug " class="me-1" v-model="this.selectedTypes">
                    {{ typology.name }}
                </label>
            </div>
            
            <div class="ms-col-big">
                <div class="card mx-2 my-4 shadow" style="width: 18rem;" v-for="restaurant in filteredCompanies">
                    <img :src="restaurant.image" class="card-img-top ms-company-img" :alt="restaurant.company_name" v-if="restaurant.image">
                    <img src="https://via.placeholder.com/150" class="card-img-top ms-company-img" :alt="restaurant.company_name" v-else>
                    <div class="card-body">
                        <h5 class="card-title">{{ restaurant.company_name }}</h5>
                        <p class="card-text text-secondary ms-address">{{ restaurant.address }}</p>
                        <!-- <p class="card-text">
                            <strong>N. telefono:</strong> <br>
                            {{ restaurant.telephone }}
                        </p>
                        <p class="card-text">
                            <strong>Orario di apertura:</strong> <br>
                            {{ restaurant.opening_hours }}
                        </p> -->
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

    .container-fluid{
        margin-top: 100px;
        padding: .625rem 10px;
        background: rgba(255, 255, 255, 0.7);
    }
    
    .ms-col-aside{
        width: 20vw;
        height: 85vh;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    .ms-col-big{
        width: 80vw;
        height: 85vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow-y: auto;
        border: 1px solid white;
        border-radius: 15px;
    }

    .card{
        max-height: 37.5rem;
        border: none;
        .ms-company-img{
            height: 9.375rem;
        }
        .ms-address{
            font-size: 13px;
        }
    }

    .ms-title-container{
        background-color: white;
        border-radius: 15px;
        margin-top: .3125rem;
    }

    .ms-button{
       background-color:  rgba(23, 196, 185, 1);
       color: #fff;
       width:100%;
    }

    .ms-check-restaurant{
        padding: 10px;
        border-bottom: 1px solid white;
    }

</style>