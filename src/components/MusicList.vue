<template>
  <div class="hot-page" >
    <a href="#"><img v-for="item in imgUrl" v-bind:src="item.img" /></a>
    <div class="list-title">
      <div class="title-mask"></div>
      <div class="listen-deatil">
        <span>
          <i class="el-icon-service"></i>
          {{ item.listenNum }}
          <a @click="palyMusic" class="el-icon-caret-right music-play"></a>
        </span>
      </div>
    </div>
    <div class="hot-text">
      <a @click="palyMusic">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
  import one from '.././assets/1.jpg'
  export default{
    data () {
      return {
        imgUrl: [
          {img: one}
        ]
      }
    },
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      palyMusic () {
        this.$router.push({ path: 'index' })
      }
    },
    mounted () {
      console.log(this.img1)
    }
  }
</script>
<style>
.hot-page{
  overflow: hidden;
}
.hot-page img{
  width: 100%;
  height: 150px;
}
.list-title{
  height: 30px;
  position: absolute;
  top: 123px;
  z-index: 100;
  width: 100%;
}
.list-title .title-mask{
  background-color: #000;
  opacity: 0.5;
  z-index: 110;
  width: 100%;
  height: 30px;
  line-height: 30px;
  }
.list-title .listen-deatil span{
  z-index: 120;
  position: absolute;
  top: 5px;
  color: #fff;
  left: 0;
  padding-left: 10px;
  }
  .music-play{
    margin-left: 85px;
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 1px;
  }
  .hot-text{
    padding: 7px 0;
    font-size: 1.3rem;
    line-height: 18px;
  }
</style>
