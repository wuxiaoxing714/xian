<template>
  <div id="app">
    <div class="dynamic-area1"></div>
    <div class="dynamic-area2"></div>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<style>
a {
  color: #333;
}
a:link {
  text-decoration: none;
}
a:hover {
  color: rgb(178, 31, 31);
}
body {
  font: 16px tahoma, arial, Microsoft YaHei, sans-serif;
  color: #333;
  background: url(../public/index/poster-about.jpg);
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  z-index: -1;
}
.dynamic-area1 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(../public/index/poster-drop-animate2.png) repeat-x 0px 0px;
  background-size: cover;
  animation: posterDrop1 6000s linear infinite;
  z-index: -1;
}

@keyframes posterDrop1 {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 4000% 0;
  }
}

.dynamic-area2 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(../public/index/poster-drop-animate1.png) repeat-x 0px 0px;
  background-size: cover;
  animation: posterDrop2 8000s linear infinite;
  z-index: -1;
}

@keyframes posterDrop2 {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 30000% 0;
  }
}
</style>
