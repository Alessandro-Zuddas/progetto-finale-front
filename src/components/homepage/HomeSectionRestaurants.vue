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
    <div class="container-fluid">
        <div class="row">
            <div class="ms-col-aside">
                <h2 class="ms-2 text-light">Seleziona una categoria:</h2>
                <label :for=" typology.slug " class="ms-2 text-light" v-for="typology in this.store.typologies">
                    <input type="checkbox" :value=" typology.slug " :id=" typology.slug " class="me-1" v-model="this.selectedTypes">
                    {{ typology.name }}
                </label>
            </div>
            
            <div class="ms-col-big">
                <div class="card mx-2 my-2" style="width: 18rem;" v-for="restaurant in filteredCompanies">
                    <img :src="restaurant.image" class="card-img-top ms-company-img" :alt="restaurant.company_name" v-if="restaurant.image">
                    <img src="https://via.placeholder.com/150" class="card-img-top ms-company-img" :alt="restaurant.company_name" v-else>
                    <div class="card-body">
                        <h5 class="card-title">{{ restaurant.company_name }}</h5>
                        <p class="card-text">{{ restaurant.address }}</p>
                        <p class="card-text">
                            <strong>N. telefono:</strong> <br>
                            {{ restaurant.telephone }}
                        </p>
                        <p class="card-text">
                            <strong>Orario di apertura:</strong> <br>
                            {{ restaurant.opening_hours }}
                        </p>
                        <p class="card-text">
                            <strong>Ordine minimo:</strong>
                            {{ restaurant.minimum_order }} €
                        </p>
                        <a :href="restaurant.slug" class="btn btn-primary">Ordina ora!</a>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .container-fluid{
        background-color: rgba(23, 196, 185, 1);
        // background: linear-gradient(
        //     to bottom right,
        //     rgba(0, 126, 137, 1) 0%,
        //     rgba(25, 190, 181, 1) 84%,
        //     rgba(23, 196, 185, 1) 100%
        // );
        padding: .625rem 10px;
    }

    .ms-col-aside{
        width: 25vw;
        height: 85vh;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
    }

    .ms-col-big{
        width: 75vw;
        height: 85vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow-y: auto;
    }

    .card{
        max-height: 37.5rem;
    }

</style>