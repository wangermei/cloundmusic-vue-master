<template>
    <div class="hot-recommend" style="border: 1px solid red;">
      <div class="hot-item">
        <div class="hot-title">
          <h1>热门推荐</h1>
        </div>
        <div class="hot-menu">
          <ul>
            <li v-model="selectedIndex" tabindex="1"><router-link to="">华语</router-link></li>
            <li>|</li>
            <li tabindex="1"> <router-link to="">流行</router-link></li>
            <li>|</li>
            <li tabindex="1"><router-link to="">摇滚</router-link></li>
            <li>|</li>
            <li tabindex="1"><router-link to="">民谣</router-link></li>
            <li>|</li>
            <li tabindex="1"><router-link to="">电子</router-link></li>
          </ul>
        </div>
        <router-link to="" class="hot-more">更多<i class="el-icon-d-arrow-right"></i></router-link>
      </div>
      <div class="hot-lists">
        <ul>
          <li v-for="item in musicLists" >
            <music-list v-bind:item="item"></music-list>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import musicList from '.././MusicList'
  export default{
    data () {
      return {
        selected: ''
      }
    },
    components: {
      musicList
    }
  }
</script>
<style>
.hot-recommend{
  padding: 20px;
  border:1px solid red;
}
.hot-item{
  border-bottom: 2px solid #C10D0C;

}
.hot-item div{
  float: left;
}
.hot-title h1{
  background: url("../.././assets/index.png") left no-repeat;
  display: block;
  padding-left: 20px;
  background-position: -235px -161px;
}
.hot-menu ul li a{
  padding: 0px 10px;
  color: #666666;
}
.hot-more{
  float: right;
  line-height: 40px;
  color: #666666;
}
</style>
