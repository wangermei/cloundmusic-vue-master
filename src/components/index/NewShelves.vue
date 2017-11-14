<template>
  <div class="new-shelves">
    <div class="hot-item">
      <div class="hot-title">
        <h1>新碟上架</h1>
      </div>
      <router-link to="" class="hot-more">更多<i class="el-icon-d-arrow-right"></i></router-link>
    </div>
    <div class="new-shelves-body">
      <div class="block">
        <el-carousel trigger="click" height="200px" autoplay="false">
          <el-carousel-item v-for="item in 5" :key="item" >
            <new-card></new-card>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
  import musicList from '../MusicList.vue'
  import newCard from './NewCard'
  export default{
    data () {
      return {
      }
    },
    components: {
      musicList,
      newCard
    }
  }
</script>
<style>
.new-shelves-body{
  padding: 20px 0;
}
.new-shelves-body .el-carousel {
  padding: 20px;
  background-color: #f5f5f5;
  border:1px solid #d3d3d3;
}
.new-shelves{
  padding:20px;
}
</style>
