<script>
export default {
  name: "HomeSectionPartnership",
};
</script>

<template>
  <section class="ms-section container my-3">
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
  </section>
</template>

<style lang="scss" scoped>
.ms-section {
  margin-top: 200px;

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
}
</style>
