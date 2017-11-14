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
            <li><a href="" class="footer-icon f-icon2"></a></li>
            <li><a href="" class="footer-icon f-icon3"></a></li>
            <li><a href="" class="footer-icon f-icon4"></a></li>
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
  padding: 20px 0 0 0;
  width: 1200px;
  margin: 0 auto;
  text-align: left;
}
.footer-icon{
  background: url("../assets/foot_enter.png") no-repeat;
  display: block;
  width: 56px;
  height: 70px;
  background-position: 0 0;
  }
.footer .bg-purple{
  margin: 17px 0 0 0;
}
.footer .bg-purple ul li{
  margin:0 5px;
}
.footer .bg-purple ul li a{
  color: #999;
}
.footer .bg-purple ul li a:hover{
  text-decoration: underline;
}
.footer .bg-purple p{
  color: #666;
  padding-left: 5px;
}
.footer .bg-purple-light{
  text-align: right;
  padding-right: 12px;
}
.footer .bg-purple-light ul li{
  margin: 0 15px;
}
.f-icon2{
  background-position: -60px 0;
}
.f-icon3{
  background-position: 0 -79px;
}
.f-icon4{
  background-position: -60px -79px;
}
</style>
