<template>
    <div class="hot-recommend">
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
      <div class="advert">
        <img src="../../assets/3.jpg" />
      </div>
    </div>
</template>
<script>
  import musicList from '.././MusicList'
  import { mapState } from 'Vuex'
  export default{
    data () {
      return {
        selected: ''
      }
    },
    computed: mapState([
      'musicLists'
    ]),
    components: {
      musicList
    },
    methods: {
      async getMusicList () {
        try {
          this.$store.dispatch('getMusicList')
        } catch (err) {
          this.errmessages = err.message
        }
      }
    },
    mounted () {
      this.getMusicList()
    }
  }
</script>
<style>
.hot-recommend{
  padding: 20px;
  overflow: hidden;
}
.hot-item{
  border-bottom: 2px solid #C10D0C;
  overflow: hidden;
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
.hot-lists{
  padding: 20px 0;
  overflow: hidden;
}
.hot-lists ul{
  padding:0;
  margin: 0;
}
.hot-lists ul li{
  width: 23%;
  margin-right: 15px;
  margin-bottom: 35px;
  position: relative;
  height: auto;
  display: block;
  float: left;
}
  .advert{
    overflow: hidden;
    height: 100px;
    width: 100%;
  }
</style>
