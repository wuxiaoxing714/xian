<template>
  <div>
    <footer class="footer">
      <div class="footer_top">
        <ul class="footer-nav d-flex justify-content-center">
          <li class="footer-nav-item"><a href="#" class="d-block">首页</a></li>
          <li class="footer-nav-item">
            <a href="#" class="d-block">中国年·看西安</a>
          </li>
          <li class="footer-nav-item">
            <a href="#" class="d-block">旅游咨询</a>
          </li>
          <li class="footer-nav-item">
            <a href="#" class="d-block">探秘西安</a>
          </li>
          <li class="footer-nav-item">
            <a href="#" class="d-block">玩转西安</a>
          </li>
          <li class="footer-nav-item">
            <a href="#" class="d-block">云游大西安</a>
          </li>
          <li class="footer-nav-item">
            <a href="#" class="d-block">旅游攻略</a>
          </li>
          <li class="footer-nav-item">
            <a href="#" class="d-block">旅游帮助</a>
          </li>
        </ul>
      </div>
      <div class="footer_bottom text-center pt-3">
        <p class="mb-4">
          咨询投诉电话：12301 地址：西安市西大街45号 邮编：710007
        </p>
        <p class="mb-4">
          Copyright © 2002-2018 西安市旅游信息咨询中心 All Rights Reserved.
          备案号：<a href="#">陕ICP备20002730号</a> 技术支持：<a href="#"
            >成都中科大旗软件股份有限公司</a
          >
        </p>
        <img src="footer/pic.gif" alt="" />
      </div>
    </footer>
  </div>
</template>
<style>
/* footer */
.footer {
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */
  margin-top: 50px;
  font-size: 14px;
  color: #6a6d80;
  height: 350px;
  background: #272831 url(../../public/footer/footer-bg.png) bottom no-repeat;
}
.footer a {
  color: #6a6d80;
}
.footer .footer_top {
  position: relative;
  border-bottom: 1px solid #6a6d80;
  height: 50%;
}
.footer .footer-nav {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}
.footer .footer-nav-item {
  padding: 0 10px;
}
.footer .footer-nav-item:not(:last-child) {
  border-right: 1px solid #6a6d80;
}
</style>    
