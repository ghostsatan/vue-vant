<template>
  <div id="app">
      <Navbar/>
      <router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Nav';
export default {
  components:{
    Navbar
  },
  name: "app",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
