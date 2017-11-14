<template>
  <div class="new-card">
    <el-row>
      <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 5 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/1.jpg" class="image">
          <div class="card-list-title" v-for="">
            <a href="">
              曾静的你<br/>
              <span>许巍</span>
            </a>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        currentDate: new Date()
      }
    }
  }
</script>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .new-card .card-list-title{
    text-align: left;
    padding: 14px 5px;
  }
  .new-card .card-list-title a{
    color: #666;
  }
</style>
