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
    <div class="container">
        <label :for=" typology.slug " class="ms-4" v-for="typology in this.store.typologies">
            {{ typology.name }}
            <input type="checkbox" :value=" typology.slug " :id=" typology.slug " class="me-4" v-model="this.selectedTypes">
        </label>
        
        <ul>
            <li v-for="restaurant in filteredCompanies" >
                <div>

                </div>
                <div>{{ restaurant.company_name }}</div>
                <div v-for="typology in restaurant.typologies">{{ typology.name }}</div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>