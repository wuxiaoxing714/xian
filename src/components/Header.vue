
<template>
  <header class="container-fluid p-0">
    <div class="row mb-4">
      <div class="col-3 mt-3">
        <router-link to="/"><img class="ml-3" src="images/index/logo-new.png" alt="" /></router-link>
      </div>
      <ul class="col-9 menu d-flex mt-4 justify-content-end align-items-center">
        <li class="mr-3 p-3"><a class="text-danger" href="#">首页</a></li>
        <li class="mr-3 p-3">
          <router-link to="/" class="textc" href="#">旅游资讯</router-link>
          <ul>
            <li><router-link to="/" class="textc" href="">旅游头条</router-link></li>
            <li><router-link to="/" class="textc" href="">景区咨询</router-link></li>
            <li><router-link to="/" class="textc" href="">酒店动态</router-link></li>
            <li><router-link to="/" class="textc" href="">旅行社促销</router-link></li>
            <li><router-link to="/" class="textc" href="">美食推荐</router-link></li>
            <li><router-link to="/" class="textc" href="">惠购西安</router-link></li>
            <li><router-link to="/" class="textc" href="">动感城市</router-link></li>
            <li><router-link to="/" class="textc" href="">专题活动</router-link></li>
          </ul>
        </li>

        <li class="mr-3 p-3">
          <router-link to="/" class="textc" href="#">探秘西安</router-link>
          <ul>
            <li><router-link to="/" class="textc" href="">西安简介</router-link></li>
            <li><router-link to="/" class="textc" href="">历史沿革</router-link></li>
            <li><router-link to="/" class="textc" href="">地理环境</router-link></li>
            <li><router-link to="/" class="textc" href="">行政规划</router-link></li>
            <li><router-link to="/" class="textc" href="">西安文化</router-link></li>
            <li><router-link to="/" class="textc" href="">标识西安</router-link></li>
            <li><router-link to="/" class="textc" href="">精美图库</router-link></li>
            <li><router-link to="/" class="textc" href="">视频赏析</router-link></li>
            <li><router-link to="/" class="textc" href="">全景漫游</router-link></li>
          </ul>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/" class="textc" href="#">玩转西安</router-link>
          <ul>
            <li><router-link to="/" class="textc" href="">吃在西安</router-link></li>
            <li><router-link to="/" class="textc" href="">住在西安</router-link></li>
            <li><router-link to="/" class="textc" href="">行在西安</router-link></li>
            <li><router-link to="/" class="textc" href="">游在西安</router-link></li>
            <li><router-link to="/" class="textc" href="">购在西安</router-link></li>
            <li><router-link to="/" class="textc" href="">娱在西安</router-link></li>
            <li><router-link to="/" class="textc" href="">在线预定</router-link></li>
          </ul>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/" class="textc" href="#">主题活动</router-link>
          <ul>
            <img class="icon-hot" src="images/icons/icon-hot.gif" alt="" />
            <li><router-link to="/" class="textc" href="">国庆浪起来</router-link></li>
            <li><router-link to="/" class="textc" href="">中国年·看西安</router-link></li>
            <li><router-link to="/" class="textc" href="">云游大西安</router-link></li>
            <li><router-link to="/" class="textc" href="">长安夜·我的夜</router-link></li>
            <li><router-link to="/" class="textc" href="">非遗匠心暖全城</router-link></li>
          </ul>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/" class="textc" href="#">旅游攻略</router-link>
          <ul>
            <li><router-link to="/" class="textc" href="">精品线路推荐</router-link></li>
            <li><router-link to="/" class="textc" href="">主题旅游</router-link></li>
            <li><router-link to="/" class="textc" href="">秦人看天下</router-link></li>
            <li><router-link to="/" class="textc" href="">旅游攻略</router-link></li>
          </ul>
        </li>
        <li class="mr-3 p-3">
          <router-link to="/" class="textc" href="#">旅游帮助</router-link>
          <ul>
            <li><router-link to="/" class="textc" href="">旅游信息查询終信</router-link></li>
            <li><router-link to="/" class="textc" href="">天气查询</router-link></li>
            <li><router-link to="/" class="textc" href="">旅行查询</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>
   
 <style>
html {
  scroll-behavior: smooth;
}

ul,
li {
  margin: 0;
  padding: 0;
}

.row {
  width: 100%;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  text-decoration: none;
}
/* .breadcrumb-item+.breadcrumb-item::before{content:"";} */

.textc:hover {
  color: red;
}

.textc {
  color: black;
}

/* 所有二级菜单项鼠标悬停时，都变为红字 */

ul.menu > li > ul > li:hover {
  color: red;
}

ul.menu > li {
  position: relative;
}

/* 设置所有二级菜单项的统一内容 */

ul.menu > li > ul {
  /* 每个二级菜单设置为绝对定位 */
  position: absolute;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  width: 150px;
  left: -25px;
  z-index: 1000;
}

/* 所有二级菜单中每个菜单项的统一样式 */

ul.menu > li > ul > li {
  display: block;
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
}

/* 二级菜单隐藏时的起始样式（含transition和overflow的） */

ul.menu > li > ul {
  /* 如果只做单纯的显示，就这个： */
  display: none;
  opacity: 0;
  /* overflow: hidden; */
}

ul.menu > li:hover > ul {
  /* 如果只做单纯的显示，就这个：*/
  display: block;
  opacity: 1;
}

ul.menu > li > ul::before {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  transform: rotate(135deg);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  background: #fff;
  content: "";
  left: 50%;
  margin-top: -4px;
}

ul.menu > li > ul::after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: "";
  width: 100%;
  height: 10px;
  background: #fff;
}
.icon-hot {
  position: absolute;
  display: inline-block;
  width: 13px;
  height: 13px;
  top: 35px;
  right: 10px;
}

</style>