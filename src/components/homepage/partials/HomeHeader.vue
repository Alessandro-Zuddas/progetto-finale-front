<script>
export default {
  name: "HomeHeader",
};
</script>

<template>

    <div class="container-fluid bg-black">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col my-2">
                    <a href="http://localhost:5174/">
                        <img class="ms-logo-home" src="https://logodownload.org/wp-content/uploads/2019/09/deliveroo-logo-6.png" alt="Logo Deliveroo">
                    </a>
                </div>
                <div class="col text-end my-2">
                    <a class="mx-2 btn btn-primary" href="http://127.0.0.1:8000/login">Accedi</a>
                    <a class="mx-2 btn btn-secondary" href="http://127.0.0.1:8000/register">Registrati</a>
                </div>
            </div>
        </div>
    </div>
  
</template>

<style lang="scss" scoped>

.ms-logo-home{
    width: 200px;
}

</style>