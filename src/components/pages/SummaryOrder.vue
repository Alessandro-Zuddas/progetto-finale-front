
<script>

import axios from 'axios';
import { store } from "../../store";

export default {
  name: "SummaryOrder",
  data(){
    return{
        
    }
  },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <h1>Riepilogo ordine</h1>
            <div class="col-3">
                Immagine ristorante
                <h2>Nome ristorante</h2>
            </div>
            <div class="col-7">
                <h3><strong>Ordine n°:</strong> 000111</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Prodotto</th>
                            <th scope="col">Quantità</th>
                            <th scope="col">Prezzo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Lasagna al ragù</th>
                            <th>x 1</th>
                            <th>9.99 €</th>
                        </tr>
                    </tbody>
                </table>
                <p><strong>Totale:</strong> 50.50€</p>
                <button>Acquista ora</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>