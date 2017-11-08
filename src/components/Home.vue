<template>
  <div class="warrper">
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <div class="banner">
        <div class="block">
          <span class="demonstration">Click 指示器触发</span>
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in banners" :key="item">
              <!--<h3>{{ item }}</h3>-->
              <img v-bind:src="item.url" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <el-main>Main</el-main>
      <el-footer>
        <footer-down></footer-down>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import navMenu from '../components/NavMenu.vue'
  import footerDown from '../components/Footer.vue'
  import axios from 'axios'
  export default {
    components: {
      navMenu,
      footerDown
    },
    data () {
      return {
        banner: []
      }
    },
    mounted () {
      axios.get('http://localhost:3000/static/banner.json').then(response => {
        console.log(response.data.result)
        if (response.data.status === '0') {
          this.banner = response.data.result
        }
      })
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
  }
  .el-footer{
    border-top: 1px solid #d3d3d3;
    background-color: #f2f2f2;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
