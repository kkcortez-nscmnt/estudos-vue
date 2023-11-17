<template>
  <div>
    <NavbarComponent/>
    <router-view />
    <FooterComponent/>
  </div>
</template>
<script>
import NavbarComponent from "./components/Navbar.vue";
import FooterComponent from "./components/Footer.vue";
export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
};
</script>

<style>

</style>
