<template>
  <div class="index">
    <div class="container-fluid">
      <!-- floor1 古城西安 丝绸之路 start-->
      <div class="row no-gutters floor1 mb-5 fade-in">
        <div class="col-sm-12 col-lg-6 img fade-in">
          <div class="img_anima">
            <router-link to="/"
              ><img src="index/index-pic-1.jpg" class="w-100"
            /></router-link>
          </div>
        </div>
        <div
          class="col-sm-12 col-lg-6 bg-info bg_img_1 text-center pt-5 fade-in"
        >
          <h3 class="mb-4">古城西安</h3>
          <p class="mb-5">
            西安，陕西省会、十三朝古都。中华文明和中华民族重要发祥地，中国四大古都之一丝绸之路经济带的经济、文化、商贸中心
          </p>
          <p><router-link to="#" class="font_16">查看</router-link></p>
        </div>
        <div
          class="col-sm-12 col-lg-6 bg-warning bg_img_2 text-center pt-xl-4 fade-in"
        >
          <h3 class="mb-4 pt-sm-3 pt-xl-5">丝绸之路</h3>
          <p class="mb-5">一条具有历史意义的国际通道，促进了东西方文明的交流</p>
          <ul class="d-flex justify-content-around ul_style">
            <li class="m-3"><router-link to="/">海上丝绸之路</router-link></li>
            <li class="m-3"><router-link to="/">陆上丝绸之路</router-link></li>
            <li class="m-3"><router-link to="/">申遗丝绸之路</router-link></li>
            <li class="m-3"><router-link to="/">玄奘丝绸之路</router-link></li>
          </ul>
        </div>
        <div class="col-sm-12 col-lg-6 img fade-in">
          <div class="img_anima">
            <router-link to="/"
              ><img src="index/index-pic-2.jpg" class="w-100"
            /></router-link>
          </div>
        </div>
      </div>
      <!-- 古城西安 丝绸之路 end -->
      <!-- floor2 吃住娱购 start-->
      <div class="row no-gutters floor2 fade-in">
        <!-- food -->
        <div class="col-sm-6 col-lg-3 p-2 fade-in">
          <router-link to="/food" class="d-block f2">
            <i class="mask"></i>
            <span class="words">
              <img src="index/index-words-food.png" class="w-100" />
            </span>
            <img src="index/index-pic-3.jpg" class="w-100" />
          </router-link>
        </div>
        <!-- hotel -->
        <div class="col-sm-6 col-lg-3 p-2 fade-in">
          <a href="/hotel" class="d-block f2">
            <i class="mask"></i>
            <span class="words">
              <img src="index/index-words-hotel.png" class="w-100" />
            </span>
            <img src="index/index-pic-4.jpg" class="w-100" />
          </a>
        </div>
        <!-- recreation -->
        <div class="col-sm-6 col-lg-3 p-2 fade-in">
          <router-link to="/" class="d-block f2">
            <i class="mask"></i>
            <span class="words">
              <img src="index/index-words-yu.png" class="w-100" />
            </span>
            <img src="index/index-pic-5.jpg" class="w-100" />
          </router-link>
        </div>
        <!-- shopping -->
        <div class="col-sm-6 col-lg-3 p-2 fade-in">
          <router-link to="/shop" class="d-block f2">
            <i class="mask"></i>
            <span class="words">
              <img src="index/index-words-shopping.png" class="w-100" />
            </span>
            <img src="index/index-pic-6.jpg" class="w-100" />
          </router-link>
        </div>
      </div>
      <!-- 吃住娱购 end -->
      <!-- 旅游攻略 start -->
      <div class="floor3 mt-5 fade-in">
        <ul class="row no-gutters f3">
          <li class="col-sm-12 col-lg-6 h-100">
            <div>
              <router-link to="/" class="d-flex fade-in">
                <img src="index/index-pic-7.jpg" alt="" class="w-50" />
                <div class="f3_content w-50 text-center pt-5">
                  <h3 class="title h4 mb-4">高山仰止 感恩秦岭</h3>
                  <p>
                    从秦岭流淌而出的河流浇灌了中国十三个封建王朝，又承载着今天“南水北调”的使命，牵系着中国的未来。
                  </p>
                </div>
              </router-link>
              <router-link to="/" class="d-flex fade-in">
                <div class="f3_content w-50 text-center pt-5">
                  <h3 class="title mb-4">古城底蕴 名家辈出</h3>
                  <p>
                    中国诗歌发展的黄金时代，云蒸霞蔚，名家辈出，唐诗数量多达五万余首。
                  </p>
                </div>
                <img src="index/index-pic-8.jpg" class="w-50" />
              </router-link>
            </div>
          </li>
          <li class="col-sm-12 col-lg-6 h-100 f_rela fade-in">
            <router-link to="/">
              <img src="index/index-pic-9.jpg" class="w-100" />
              <div class="f_absolute">
                <h3 class="title">锦绣三秦 长安八景</h3>
                <p>
                  “长安八景”是三秦大地著名的文物胜地。在西安碑林，有一块碑石，用诗和画的形式描绘了这八景的奇丽秀美。
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 旅游攻略 end -->
      <!-- 主题旅游 start -->
      <div class="theme mt-5">
        <div class="row no-gutters text-center">
          <div class="col-sm-4 col-md-4 col-xl-2 theme_item">
            <div class="theme_content">
              <img src="index/index-sec5-1.jpg" class="w-100" />
              <p>丝绸之路旅游</p>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xl-2 theme_item">
            <div class="theme_content">
              <img src="index/index-sec5-2.jpg" class="w-100" />
              <p>历史文化旅游</p>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xl-2 theme_item">
            <div class="theme_content">
              <img src="index/index-sec5-3.jpg" class="w-100" />
              <p>经典红色旅游</p>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xl-2 theme_item">
            <div class="theme_content">
              <img src="index/index-sec5-4.jpg" class="w-100" />
              <p>休闲度假旅游</p>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xl-2 theme_item">
            <div class="theme_content">
              <img src="index/index-sec5-5.jpg" class="w-100" />
              <p>乡村民俗旅游</p>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-xl-2 theme_item">
            <div class="theme_content">
              <img src="index/index-sec5-6.jpg" class="w-100" />
              <p>会奖会展旅游</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 主题旅游 end -->
    </div>
  </div>
</template>
<style>
/* 顶部插图 start */
.index .top_illustration {
  height: 200px;
  background-color: rgb(178, 31, 31);
}

/* 顶部插图  end */
.index .fade-in {
  opacity: 0;
  transition: 0.3s all ease-out;
  transform: scale(0.8);
  box-sizing: border-box;
  /* padding: 20px; */
  /* display: inline-block; */
}
/* header start */
.index .nav_top li {
  padding-bottom: 5px;
}
.index .nav_top li:hover {
  border-bottom: 2px solid rgb(178, 31, 31);
}
/* header end */
/* floor1   start*/
.index .floor1 .bg_img_1 {
  background: url(../../public/index/index-intro-bg-1.jpg) 50% no-repeat;
}
.index .floor1 .bg_img_2 {
  background: url(../../public/index/index-intro-bg-2.jpg) 50% no-repeat;
}
.index .font_16 {
  font-size: 16px;
}
.index .ul_style {
  list-style: circle;
}
/* 动画缩放效果 */
.index .img {
  overflow: hidden;
}
.index .img_anima {
  transition: all 0.5s;
}
.idnex .img_anima:hover {
  transform: scale(1.1);
}
/* floor2 start */
.index .floor2 .f2 {
  position: relative;
  overflow: hidden;
}
.index .f2 {
  transition: all 0.5s ease 0s;
}
.index .f2 .mask {
  background: url(../../public/index/mask-5.png) repeat;
  opacity: 0;
  transition-duration: 0.9s;
}
.index .f2 .mask,
.index .f2 .words {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
}
.index .f2:hover {
  transform: translateY(-6px);
}
.index .f2:hover .mask {
  opacity: 1;
}
.index .f2 .words {
  transition: all 0.4s;
}
.index .f2:hover .words {
  transform: scale(1.2);
}
/* 旅游攻略  start */
.index .floor3 {
  background: #f5f5f5;
  overflow: hidden;
}
.index .f3_content {
  background: url(../../public/index/index-zx-bg.jpg) 50% no-repeat;
}
.index .f_rela {
  position: relative;
}
.index .f_absolute {
  position: absolute;
  left: 20px;
  bottom: 20px;
}
/* 旅游攻略  end */
/* 主题旅游 start */
.index .theme .theme_item {
  position: relative;
  overflow: hidden;
}
.index .theme_content img {
  transition: all 0.5s;
}
.index .theme_content:hover img {
  transform: scale(1.1);
}
.index .theme_item p {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
  color: #fff;
  transition: all 0.5s;
}
.index .theme_item:hover p {
  display: none;
}
</style>
<script>
export default {
  data() {
    return {
      fadeInElements: [],
    };
  },
  mounted() {
    // 先获取全部需要过渡效果的元素
    this.fadeInElements = Array.from(
      document.getElementsByClassName("fade-in")
    );
    // 监听鼠标滚动事件
    document.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 循环判断是否要触发过渡
    handleScroll(evt) {
      for (var i = 0; i < this.fadeInElements.length; i++) {
        var elem = this.fadeInElements[i];
        if (this.isElemVisible(elem)) {
          elem.style.opacity = "1";
          elem.style.transform = "scale(1)";
          this.fadeInElements.splice(i, 1); // 只让它运行一次
        }
      }
    },
    // 判断元素距离窗口的位置
    isElemVisible(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top + 200; // 200 = buffer
      var elemBottom = rect.bottom;
      return elemTop < window.innerHeight && elemBottom >= 0;
    },
  },
};
</script>
    