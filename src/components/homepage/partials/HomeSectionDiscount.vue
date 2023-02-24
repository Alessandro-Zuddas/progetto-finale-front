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
  margin-top: 200px;

  .stars-image {
    width: 20%;
    height: 10%;
  }
}
</style>
