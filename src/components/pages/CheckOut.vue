<script>
import axios from 'axios';
import { store } from "../../store";

export default {
  name: "SingleRestaurant",
  data(){
    return{
        store,
    }
  },
    created(){

        axios.get('http://127.0.0.1:8000/api/companies/' + this.$route.params.slug)
        .then(response => {

            this.restaurant = response.data;

        })
        .catch(error => {
            console.log(error)
        })
        var button = document.querySelector('#submit-button');

        braintree.dropin.create({
        authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
        selector: '#dropin-container'
        }, function (err, instance) {
        button.addEventListener('click', function () {
            instance.requestPaymentMethod(function (err, payload) {
            // Submit payload.nonce to your server
            });
        })
        });
    }
}
</script>

<template>

    <div class="container d-flex p-0">
        <div class="ms-aside py-4 px-4">
            
        </div>
        <div >
            <form class="card ms-5 px-4 py-2 my-5">
                <div class="mb-3">
                    <label for="name" class="form-label">Inserisci il nome*</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                    <label for="Email" class="form-label">Inserisci l'email*</label>
                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" required>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="telephone" class="form-label">Inserisci il numero di telefono*</label>
                    <input type="text" class="form-control" id="telephone" required>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Inserisci il numero l'indirizzo*</label>
                    <input type="text" class="form-control" id="address" required>
                </div>
                <div id="dropin-container"></div>
                <button id="submit-button" class="button button--small button--green">Purchase</button>
            </form>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.ms-aside{
    width: 30vw;
    height: 80vh;
    border-right: 1px solid black;
}


.ms-product{
    flex-wrap: wrap;
}

.ms-company-img{
    max-width: 28.125rem;
    max-height: 28.125rem;
    border-radius: 1.5625rem;
    overflow-y: auto;
}
.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>