<script>
export default {
  name: "HomeMain",
};
</script>

<template>
  <!-- SECTION-APP -->
  <section>
    <div class="container p-3">
      <div class="row m-3 shadow">
        <div class="col-6 p-3 ms-text-top">
          <h3>Segui gli ordini passo passo</h3>
          <p>
            I piatti e i prodotti che ami, consegnati in pochissimo tempo.
            Vedrai quando il rider ha ritirato l'ordine, che potrai seguire
            passo passo, e riceverai una notifica quando sarà quasi da te.
          </p>
          <div class="ms-buttons pt-3">
            <img
              class="ms-badge"
              src="../../../assets/img/badge-app-store.png"
              alt="app-store"
            />
            <img
              class="ms-badge"
              src="../../../assets/img/badge-google-play.png"
              alt="google-play"
            />
          </div>
        </div>
        <div class="col-6 ms-image-container">
          <img
            class="ms-image-map"
            src="../../../assets/img/Map.png"
            alt="Map"
          />
          <div class="ms-notification-container shadow rounded">
            <div
              class="ms-title d-flex align-items-center justify-content-between"
            >
              <div>
                <img
                  class="ms-logo rounded"
                  src="../../../assets/img/deliveroo-app-logo.png"
                  alt="logo"
                />
                <span>DELIVEROO</span>
              </div>
              <div>ora</div>
            </div>
            <div class="ms-content">
              <strong>Aggiornamento ordine</strong>
              <p>
                Il rider sta arrivando da te! Ti avviseremo quando sarà vicino.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- SECTION-APP END -->
  <!-- SECTION-DISCOUNT -->
  <section class="section-discount text-light p-3 my-3">
    <div class="container d-flex justify-content-center p-3">
      <div class="col-6 text-center">
        <div class="ms-title d-flex">
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
  <!-- SECTION-DISCOUNT END -->
  <!-- SECTION-WORK -->
  <div class="container my-3">
    <div class="row flex-nowrap column-container">
      <div class="col-6 ms-column-1 my-2 rounded">
        <div class="ms-text p-3">
          <h3>Diventa nostro partner</h3>
          <p>
            raggiungi più clienti con DeliveBool. Gestiamo noi la consegna, così
            tu puoi dedicarti a offrire i migliori piatti e prodotti.
          </p>
          <button class="ms-button rounded p-2">
            Inizia ora <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="col-6 ms-column-2 m-2 rounded">
        <div class="ms-text p-3">
          <h3>Consegna con noi</h3>
          <p>
            La libertà di consegnare dove e quando vuoi, con ottimi guadagni,
            convenzioni e sconti riservati a te.
          </p>
          <button class="ms-button rounded p-2">
            Inizia ora <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- SECTION-WORK-END -->
</template>

<style lang="scss" scoped>
.ms-badge {
  width: 20%;
  padding-right: 20px;
}
.ms-image-container {
  position: relative;

  .ms-image-map {
    width: 526px;
  }

  .ms-notification-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    background: rgba(255, 255, 255, 0.7);
    color: #bdbdbd;
    padding: 10px;
    margin: 10px;

    .ms-logo {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    .ms-content {
      color: black;
    }
  }
}
.section-discount {
  background: rgb(0, 126, 137);
  background: linear-gradient(
    to bottom right,
    rgba(0, 126, 137, 1) 0%,
    rgba(25, 190, 181, 1) 84%,
    rgba(23, 196, 185, 1) 100%
  );
  .stars-image {
    width: 20%;
    height: 10%;
  }
}

.ms-column-1 {
  background-image: url(../../../assets/img/cuoco.jpg);
  background-size: cover;
  height: 350px;
  position: relative;
}
.ms-column-2 {
  background-image: url(../../../assets/img/rider.avif);
  background-size: cover;
  height: 350px;
  position: relative;
}
.ms-text {
  position: absolute;
  left: 50;
  bottom: 0;
  color: #fff;

  .ms-button {
    border: none;
  }
}
</style>
