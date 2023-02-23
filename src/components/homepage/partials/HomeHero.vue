<script>
export default {
  name: "HomeHero",
};
</script>

<template>

    <div class="container-fluid">
        <div class="row">
            <div class="ms-hero-img ms-hero col-3 px-0 d-flex"></div>

            <div class="ms-input-col col-6 px-0 d-flex flex-column align-items-center justify-content-center">
                <h1 class="text-center text-light my-4">I piatti dei ristoranti che ami, a domicilio</h1>
                <form class="ms-search-form" action="">
                    <input class="ms-input-home px-2" type="text" placeholder="Cerca un ristorante">
                    <button class="ms-search-btn" type="submit">Cerca</button>
                </form>
            </div>

            <div class="ms-hero-img ms-hero col-3 px-0 d-flex"></div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>

.ms-hero-img{
    height: 31.25rem;
    background-repeat: no-repeat;
    background-size: cover;
}

.ms-hero{
    background-position: top;
    background-image: url(https://www.gdoweek.it/wp-content/uploads/sites/7/2021/07/Deliveroo-ODC-696x696.jpeg);
}


.ms-input-col{
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    background-image: url(https://www.lume-1.com/wp-content/uploads/2022/02/Peter-Pane-Holzfaeller-Burger.jpg);
}

.ms-search-form{
    position: relative;
}

.ms-input-home{
    width: 31.25rem;
    padding: .9375rem .3125rem;
    border: none;
    border-radius: 1.5625rem;
}

.ms-search-btn{
    position: absolute;
    left: 83%;
    top: 9%;
    color: white;
    background-color: #00CCBC;
    border: none;
    border-radius: 1.5625rem;
    padding: .625rem 1.25rem;
}

</style>