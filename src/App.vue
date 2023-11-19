<template>
  <div>
    <NavbarComponent :logo="logo_src" :alt="app_name"/>
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
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Burger",
    };
  }
};
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {

    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
