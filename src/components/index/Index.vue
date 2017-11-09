<template>
  <div class="main-warp">
    <banner></banner>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            1
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
  export default{
    components: {
      banner
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
  .content{
    width: 1200px;
    border: 1px solid red;
    margin: 0 auto;
    background: #ffffff;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
  }
  .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 336px;
    margin: 0;
  }
</style>
