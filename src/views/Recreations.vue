<template>
  <div class="recreation">
    <div>
      <img src="recreation/04-wanzhuan_02.jpg" class="w-100" />
    </div>
    <!-- crumb start-->
    <div class="crumb p-3 crumb_bg">
      <div class="container app-title">
        <span class="pl-1 pr-3 font-small">您当前的位置：</span>
        <router-link to="/" class="px-2">网站首页</router-link>&gt;
        <router-link to="/" id="select_color">玩转西安</router-link>&gt;
        <router-link to="/" class="px-2">住在西安</router-link>
      </div>
    </div>
    <!--crumb end -->
    <div class="container mt-3">
      <!-- 子标题开始 -->
      <div class="d-flex justify-content-betwwn subtitle mb-3">
        <div class="">
          <div class="app-center-subtitle">
            <ul>
              <li>娱乐场所类型:</li>
              <router-link to="/">
                <li class="active" id="select_colors">全部</li>
              </router-link>
              <router-link to="/">
                <li>电影</li>
              </router-link>
              <router-link to="/">
                <li>剧院</li>
              </router-link>
              <router-link to="/">
                <li>酒吧/ktv</li>
              </router-link>
              <router-link to="/">
                <li>旅游演出</li>
              </router-link>
              <router-link to="/">
                <li>咖啡馆</li>
              </router-link>
              <router-link to="/">
                <li>运动休闲</li>
              </router-link>
              <router-link to="/">
                <li>书店</li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <!-- 子标题结束 -->
      <!-- 中间内容开始 -->
      <div class="row no-gutters">
        <div
          class="col-sm-12 col-md-12 col-lg-4"
          v-for="(item, index) of play"
          :key="index"
        >
          <div class="my-shadow app-center-bg mb-3 p-2 ml-2 mr-2">
            <div class="app-center-img1">
              <img
                class="app-center-img w-100"
                :src="`/recreation/${item.recreation_img}`"
                alt="猫的天空之城"
              />
            </div>
            <h6 class="app-center-h6">{{ item.recreation_title }}</h6>
            <div class="app-center-p mt-5 ml-2">
              <p>
                <!-- <img src="../assets/image/phone.png" alt="" /> -->
                {{ item.recreation_phone }}
              </p>
              <p class="pb-2">
                <!-- <img src="../assets/image/dizhi.png" alt="" /> -->
                {{ item.recreation_address }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间内容结束 -->
      <!-- 分页开始 -->
      <!-- 分页 start-->
      <nav aria-label="page navigation mt-3 mb-3">
        <ul class="pagination d-flex justify-content-center">
          <li class="page-item disabled">
            <router-link class="page-link" to="#">上一页</router-link>
          </li>
          <li class="page-item active">
            <router-link class="page-link" to="#">1</router-link>
          </li>
          <li class="page-item">
            <router-link class="page-link" to="#">2</router-link>
          </li>
          <li class="page-item">
            <router-link class="page-link" to="#">3</router-link>
          </li>
          <li class="page-item">
            <router-link class="page-link" to="#">4</router-link>
          </li>
          <li class="page-item">
            <router-link class="page-link" to="#">下一页</router-link>
          </li>
        </ul>
      </nav>
      <!-- 分页 start -->
    </div>
    <!-- 分页结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      play: [],
    };
  },
  mounted() {
    this.axios.get("/recreation").then((res) => {
      console.log(res.data);
      let play = res.data.result;
      this.play = play;
    });
  },
};
</script>
<style>
:root {
  --primary-color: #efefef;
}

.recreation {
  background: var(--primary-color);
}
/* crumb start */
.recreation .crumb_bg {
  background: #fff;
}
.recreation #select_color {
  color: rgb(178, 31, 31) !important;
}
.recreation #select_colors {
  color: #fff !important;
  background: brown;
  padding: 3px 10px;
}
.recreation .app-title {
  font-size: 14px;
}
.recreation .app-title a {
  color: #333;
}
.recreation a:hover {
  text-decoration: none;
  color: #fff;
  background: brown;
}
.recreation a:link {
  text-decoration: none;
}
/* crumb end */
/*子标题开始 */
.recreation .subtitle {
  background: #fff;
  border-radius: 5px;
}
.recreation .app-center-subtitle ul {
  margin-bottom: 0;
  padding: 10px;
}
.recreation .app-center-subtitle ul li {
  display: inline-block;
  font-size: 14px;
  padding: 0px 8px;
}
.recreation .app-center-subtitle a:hover {
  color: #fff;
}
.recreation .app-center-subtitle a {
  color: #333;
  margin-left: 15px;
  padding: 5px;
}
/*子标题结束 */
/* 中间内容开始 */
.recreation .app-center-img1 {
  overflow: hidden;
}
.recreation .app-center-img1:hover .app-center-img {
  transform: scale(1.1);
  cursor: pointer;
}
.recreation .app-center-img {
  background: #fff;
  transition-duration: all 0.5s;
}
.recreation .app-center-h6 {
  margin-top: -40px;
  text-align: center;
  color: #fff;
  background-image: "";
  position: relative;
}
.recreation .app-center-bg {
  background: #fff;
}
.recreation .app-center-p p {
  font-size: 14px;
  color: #666666;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 90%;
}
.recreation .my-shadow {
  /* background: #6dc0cf; */
  transition: all 0.3s ease-in-out;
}
.recreation .my-shadow:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -15px #666;
}
/* 中间内容结束 */
/* 分页开始 */
.recreation .page-item.disabled .page-link {
  color: #999;
  background-color: #fff;
}
.recreation .page-item.active .page-link {
  color: #fff;
  background-color: rgb(178, 31, 31);
  border: 1px solid rgb(178, 31, 32);
}
.recreation .page-item .page-link {
  color: #666;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #e9e9e9;
}
.recreation .page-item + .page-item {
  margin: 0 5px;
}
.recreation .page-link:hover {
  color: #fff;
  border-color: rgb(178, 31, 32);
  background-color: rgb(178, 31, 31);
}
/* 分页结束 */
</style>
