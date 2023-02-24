<script>
export default {
  name: "HomeSectionDiscount",
};
</script>

<template>
  <section class="ms-section text-light p-3 my-3">
    <div class="container d-flex justify-content-center p-3">
      <div class="col-6 text-center">
        <div class="d-flex">
          <img
            class="stars-image"
            src="../../../assets/img/stelle.png"
            alt="stelle"
          />
          <h1>Menù in offerta: sconti fino al 25%</h1>
          <img
            class="stars-image"
            src="../../../assets/img/stelle.png"
            alt="stelle"
          />
        </div>
        <p>
          Perfetti per dare più gusto alla tua settimana, ordinare i piatti più
          amati da tutta la famiglia e fare una pausa dai fornelli.
        </p>
        <small>
          Si applicano spese di consegna e di servizio. Offerta soggetta a
          disponibiltà, solo per ristoranti aderenti all'iniziativa. Si
          applicano termini di condizioni, consultabili qui.
          <u>Termini e condizioni qui.</u>
        </small>
      </div>
    </div>
   
    <div class="d-flex align-items-end">
      <img class="icon" src="../../../assets/icons/cupcake.png" alt="" />
      <img class="icon" src="../../../assets/icons/hotdog.png" alt="" />
      <img class="icon" src="../../../assets/icons/latte.png" alt="" />
      <img class="icon" src="../../../assets/icons/tacos.png" alt="" />
      <img class="icon" src="../../../assets/icons/pollo.png" alt="" />
      <img class="icon" src="../../../assets/icons/pizza.png" alt="" />
      <img class="icon" src="../../../assets/icons/riso.png" alt="" />
      <img class="icon" src="../../../assets/icons/mela.png" alt="" />
      <img class="icon" src="../../../assets/icons/udon.png" alt="" />
      <img class="icon" src="../../../assets/icons/panino.png" alt="" />
      <img class="icon" src="../../../assets/icons/caffè.png" alt="" />
      <img class="icon" src="../../../assets/icons/hamburger.png" alt="" />
      <img class="icon" src="../../../assets/icons/gelato.png" alt="" />
      <img class="icon" src="../../../assets/icons/bibita.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.ms-section {
  background: rgb(0, 126, 137);
  background: linear-gradient(
    to bottom right,
    rgba(0, 126, 137, 1) 0%,
    rgba(25, 190, 181, 1) 84%,
    rgba(23, 196, 185, 1) 100%
  );
  margin-top: 100px !important;

  .stars-image {
    width: 20%;
    height: 10%;
  }
}
.icon{
  width:90px
}
</style>
