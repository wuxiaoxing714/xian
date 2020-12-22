<template>
  <el-carousel  :interval="5000" arrow="always">
    <el-carousel-item >
      <img src="images/index/02-旅游资讯_02.jpg"   alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="images/index/03-探秘西安_02.jpg"   alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="images/index/04-玩转西安_02 (1).jpg"   alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="images/index/05-旅游攻略_02.jpg"   alt="">
    </el-carousel-item>
    <el-carousel-item >
      <img src="images/index/06-旅游帮助_02.jpg"   alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__arrow{
  border: 0;
  top:100%
}
.el-carousel{
  height: 560px;
}
.el-carousel__item>img{
  margin-left: 0;
  margin-top: 0;
}
  .el-carousel__item  {
    height: 560px;
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
   
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
