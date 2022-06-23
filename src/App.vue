<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavVue/>
  <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavVue from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavVue
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
}
body{
  font-family:'Avenir',Helvetica,Arial,sans-serif;
}
/* header{
  background: dimgrey;
  width: auto;
  height: 80px;
} */
#app{
  height: 100%;
}
.nav{
  position: fixed;
  width: 100vw;
  z-index: 1000;
  display: block;
  top: 0;
}
</style>
