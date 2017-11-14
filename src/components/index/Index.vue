<template>
  <div class="main-warp">
    <div class="drawDownMenu">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <i class="menuSelected"></i>
            <router-link to="index">推荐</router-link>
            <router-link to="">排行榜</router-link>
            <router-link to="">歌单</router-link>
            <router-link to="">主播电台</router-link>
            <router-link to="">歌手</router-link>
            <router-link to="">新碟上架</router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <banner></banner>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="16" style="border: 1px solid red;">
          <div class="grid-content bg-purple">
            <hot-recommend></hot-recommend>
            <new-shelves></new-shelves>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            2
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import banner from '../../components/Banner'
  import hotRecommend from './HotRecommend'
  import newShelves from './NewShelves'
  export default{
    components: {
      banner,
      hotRecommend,
      newShelves
    },
    methods: {
      async getBanners () {
        await this.$store.dispatch('getBanners')
      }
    },
    mounted () {
      this.getBanners()
    }
  }
</script>
<style>
  li{
    display: inline-block;
  }
  .content{
    width: 1200px;
    border: 1px solid red;
    margin: 0 auto;
    background: #ffffff;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    overflow: hidden;
  }
  .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 336px;
    margin: 0;
  }
  .indexMenu .el-menu--horizontal{
    background-color: #000!important;
  }
  .indexMenu .el-menu--horizontal .el-menu-item{
    background-color: #000!important;
    color: #ccc!important;
  }
  .indexMenu .el-menu--horizontal .el-menu-item a:hover{
    color: #fff;
  }
  .el-submenu .el-menu-item{
    min-width: 90px;
  }
</style>
