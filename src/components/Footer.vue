<template>
  <div class="footer">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <ul>
            <li><a href="">关于网易</a></li>
            <li>|</li>
            <li><a href="">客户服务</a></li>
            <li>|</li>
            <li><a href="">服务条款</a></li>
            <li>|</li>
            <li><a href="">网站导航</a></li>
            <li>|</li>
            <li><a href="">意见反馈</a></li>
          </ul>
          <p>网易公司版权所有©1997-2017杭州乐读科技有限公司运营：浙网文[2015] 0415-135号</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <ul>
            <li><a href="" class="footer-icon"></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
    export default{}
</script>
<style>
.footer{
  padding: 20px 0;
  border:1px solid red;
  width: 1200px;
  margin: 0 auto;
  text-align: left;
}
.footer-icon{
  background: url("../assets/foot_enter.png") no-repeat;
  display: block;
  width: 50px;
  height: 50px;
  background-position: 0px 0px;
  }
</style>
