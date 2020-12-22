<template>
     <div class="silde">
      <div class="wx">
        <img src="images/icons/wechat1.png" alt="" />
        <span class="img-1"><img src="images/index/wx-code.png" alt="" /></span>
      </div>
      <div class="wb">
        <img src="images/icons/weibo1.png" alt="" />
        <span class="img-2"
          ><img src="images/index/web-code.png" alt=""
        /></span>
      </div>
      <div>
        <img src="images/icons/tiktok1.png" alt="" />
        <span class="img-3"><img src="images/index/dy-code.png" alt="" /></span>
      </div>
      <div>
        <img src="images/icons/message1.png" alt="" />
      </div>
      <div id="btnTop" onclick="returnTop()">
        <img src="images/icons/db.png" alt="" />
      </div>
    </div>
</template>
<style >
.silde {
  position: fixed;
  top: 450px;
  right: 30px;
  z-index: 50;
}

.silde > div {
  width: 50px;
  height: 50px;
  background-color: #b2b2b2;
  margin-bottom: 1px;
  position: relative;
  cursor: pointer;
}

img {
  margin-top: 11px;
  margin-left: 11px;
}

.img-1 {
  position: absolute;
  top: -54px;
  left: -173px;
  display: none;
}

.img-2 {
  display: none;
  position: absolute;
  top: -65px;
  left: -176px;
}

.img-3 {
  display: none;
  position: absolute;
  top: -63px;
  left: -175px;
}

.silde > .wx,
:hover > span {
  display: block;
}
.silde div:hover{
  background-color:#b21f1f;
}
#btnTop {
  cursor: pointer;
  position: absolute;
  left: 100px;
  transition: all 0.3s linear;
}
</style>
 <script>
let divEle = document.getElementById("btnTop");
console.log(document.documentElement);
window.addEventListener("scroll", (e) => {
  let pos = document.documentElement.scrollTop;
  console.log(pos);
  if (pos < 100) {
    divEle.style.left = 100 + "px";
  } else {
    divEle.style.left = 0 + "px";
  }
});

// 点击按钮，返回顶部
function returnTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>