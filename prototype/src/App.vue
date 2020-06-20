<template>
  <div id="app">
    <nav-bar />
    <div id="main">
      <router-view />
    </div>
    <!-- <div class="background-img" /> -->
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
    <!-- <p>HELLO THERE</p>
      <i class="icon-edit-pencil" />
      <img src="./assets/images/parsed-image.png" />
    <div class="background-img" />-->
    <!-- <Hello /> -->
    <!-- </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">


// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
