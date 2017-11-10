<template>
  <div>
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        <footer-down></footer-down>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import navMenu from '../components/NavMenu.vue'
  import footerDown from '../components/Footer.vue'

  export default {
    components: {
      navMenu,
      footerDown
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    background-color: #242424;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding:0;
  }
  .el-footer{
    border-top: 1px solid #d3d3d3;
    background-color: #f2f2f2;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .el-main {
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
    padding: 0;
    margin-top: 40px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .banner{
    border:1px solid red;
    margin-bottom: 30px;
  }
</style>
