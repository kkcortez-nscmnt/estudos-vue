<template>
  <div class="main-container">
    <BannerComponent />
    <h1>Monte o seu burger:</h1>
    <BurgerForm />
  </div>
</template>

<script>
import BannerComponent from "../components/Banner.vue";
import BurgerForm from "../components/BurgerForm.vue";
export default {
  name: "HomeView",
  components: {
    BannerComponent,
    BurgerForm
  }
};

</script>
