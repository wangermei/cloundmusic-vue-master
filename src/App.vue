<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow: auto;
}
 html{
   font-size: 62.5%;
 }
  body{
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  div{
    overflow: hidden;
  }
</style>
