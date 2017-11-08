<template>
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
          <div class="grid-content bg-purple">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1" >
                <template slot="title">发现音乐</template>
                <el-menu-item index="1-1"><a href="https://www.ele.me" target="_blank">推荐</a></el-menu-item>
                <el-menu-item index="1-2"><a href="https://www.ele.me" target="_blank">选项2</a></el-menu-item>
                <el-menu-item index="1-3"><a href="https://www.ele.me" target="_blank">选项3</a></el-menu-item>
              </el-submenu>
              <el-menu-item index="2"><a href="https://www.ele.me" target="_blank">我的音乐</a></el-menu-item>
              <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">朋友</a></el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">商城</a></el-menu-item>
              <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">音乐人</a></el-menu-item>
              <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">下载客户端</a></el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="search">
              <i class="el-icon-search"></i>
              <input type="text" placeholder="音乐/电台/用户"/>
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
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>
<script>
export default{
}
</script>
<style>
  .el-menu{
    display: block;
  }
  .navMenu{
    border:1px solid red;
    border-top: none;
    width: 1200px;
    margin: 0 auto;
  }
  .el-submenu .el-menu-item{
    background-color: #C20C0C!important;
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
