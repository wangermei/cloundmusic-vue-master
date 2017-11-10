<template>
  <div>
    <div class="navMenu">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <a href="">
              <i class="logo-icon"></i>
            </a>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple indexMenu">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1"><router-link to="index">发现音乐</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="">我的音乐</router-link></el-menu-item>
              <el-menu-item index="3"><router-link to="">朋友</router-link></el-menu-item>
              <el-menu-item index="4"><router-link to="">商城</router-link></el-menu-item>
              <el-menu-item index="5"><router-link to="">音乐人</router-link></el-menu-item>
              <el-menu-item index="6"><router-link to="">下载客户端</router-link></el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="search">
              <i class="el-icon-search"></i>
              <input type="text" placeholder="音乐/电台/用户" v-model="search.text"/>
            </div>
            <a href="" class="vedio-btn">
              <i class="el-icon-service"></i>
              视频投稿
            </a>
            <div class="login-btn">
              <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">登录</template>
                  <el-menu-item index="1-1">手机号登录</el-menu-item>
                  <el-menu-item index="1-1">QQ登录</el-menu-item>
                  <el-menu-item index="1-2">微信登录</el-menu-item>
                  <el-menu-item index="1-3">微博登录</el-menu-item>
                  <el-menu-item index="1-3">网易邮箱号登录</el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

export default{
  data () {
    return {
      search: {
        text: ''
      }
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    recommend () {
      this.$router.push({ path: 'index' })
    }
  }
}
</script>
<style>
  .drawDownMenu{
    position: absolute;
    top: 60px;
    z-index: 200;
    background-color: #C20C0C;
    height: 40px;
    margin: 0 auto;
    width: 100%;
  }
  .drawDownMenu .el-row{
    width: 780px;
    margin: 0 auto;
  }
  .drawDownMenu .el-row a{
    /*padding: 0;*/
    display: block;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    padding: 0 27px;
    float: left;
    list-style: none;
    font-size: 1.4rem;
    color: #ffffff;
  }
  .menuSelected{
    background: url("././../assets/topbar.png") no-repeat;
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: -6px;
    background-position: -228px 0px;
    z-index: 250;
    left: 36px;
  }
  .el-menu{
    /*display: block!important;*/
    /*background-color:transparent!important;*/
    /*box-shadow: none!important;*/
    /*-webkit-box-shadow: none;*/
  }
  .navMenu{
    border-top: none;
    width: 1200px;
    margin: 0 auto;
  }
  .search{
    height: 34px;
    background-color: #ffffff;
    line-height: 34px;
    margin-top: 13px;
    width: 180px;
    border-radius: 20px;
    float: left;
  }
  .search input{
    border: none;
    width: 100px;
  }
  .search input:focus{
    outline: none;
  }
  .logo-icon{
    background: url("../assets/topbar.png") no-repeat;
    background-position: 0 -7px;
    display: block;
    width: 160px;
    height: 45px;
  }
  .vedio-btn{
    color: #ffffff;
    margin-left: 9px;
    border: 1px solid #585858;
    padding: 8px 12px;
    border-radius: 15px;
  }
  .vedio-btn:hover{
    border: 1px solid #848484
  }
  .login-btn{
    float: right;
    font-size: 1.2rem;
  }
</style>
