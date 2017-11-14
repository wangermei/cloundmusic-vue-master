<template>
  <div class="banner">
    <div class="block">
      <el-carousel trigger="click" height="336px">
        <el-carousel-item v-for="item in bannerImgUrl" :key="item">
          <img v-bind:src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  import one from '../assets/1.jpg'
  import two from '../assets/2.jpg'
  import three from '../assets/3.jpg'
  import four from '../assets/4.jpg'

  export default{
    data () {
      return {
        bannerImgUrl: [
          {url: one}, {url: two}, {url: three}, {url: four}
        ]
      }
    }
  }
</script>
<style>
  /*.el-carousel__item:nth-child(2n) {*/
  /*background-color: pink;*/
  /*}*/
  .banner .el-carousel__item:nth-child(3) {
    background-color: black;
  }
  .banner .el-carousel__item:nth-child(4) {
    background-color: black;
  }
  .banner .el-carousel__item:nth-child(5) {
    background-color: pink;
  }
  .banner .el-carousel__item:nth-child(6) {
    background-color: #FF6347;
  }
  /*.el-carousel__item:nth-child(2n+1) {*/
  /*background-color: black;*/
  /*}*/
</style>
