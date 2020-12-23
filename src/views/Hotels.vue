<template>
  <div class="hotel">
    <div>
      <img src="hotel/04-wanzhuan_02.jpg" class="w-100" />
    </div>
    <!-- crumb start-->
    <div class="crumb p-3 crumb_bg my_font_14">
      <div class="container">
        <span class="pl-1 pr-3">您当前的位置：</span>
        <router-link to="/" class="px-2">网站首页</router-link>&gt;
        <router-link to="/" class="px-2">玩转西安</router-link>&gt;
        <router-link to="/" class="select_color">住在西安</router-link>
      </div>
    </div>
    <!--crumb end -->
    <!-- 分类 start -->
    <div class="container mt-3">
      <div class="px-4 hotel_select mb-4 my_font_14">
        <div class="filter-list border-bottom py-2">
          <ul class="d-flex justify-content-around my_width1">
            <li class="my_cursor1">选择类型：</li>
            <li class="my_cursor2 filter-item select_bg">全部</li>
            <li class="my_cursor2 filter-item">星级饭店</li>
            <li class="my_cursor2 filter-item">主题酒店</li>
            <li class="my_cursor2 filter-item">经济酒店</li>
            <li class="my_cursor2 filter-item">普通宾馆饭店</li>
            <li class="my_cursor2 filter-item">招待所</li>
            <li class="my_cursor2 filter-item">青年旅社</li>
            <li class="my_cursor2 filter-item">家庭旅馆</li>
            <li class="my_cursor2 filter-item">度假村</li>
            <li class="my_cursor2 filter-item">度假中心</li>
            <li class="my_cursor2 filter-item">其他</li>
          </ul>
        </div>
        <div class="filter-list filter-list-rate py-2">
          <ul class="d-flex justify-content-around w-75">
            <li class="my_cursor1">酒店星级：</li>
            <li class="my_cursor2 select_bg">全部</li>
            <li class="my_cursor2">五星级</li>
            <li class="my_cursor2">四星级</li>
            <li class="my_cursor2">三星级</li>
            <li class="my_cursor2">公寓</li>
            <li class="my_cursor2">民宿</li>
            <li class="my_cursor2">商务型</li>
            <li class="my_cursor2">经济型</li>
            <li class="my_cursor2">其他</li>
          </ul>
        </div>
      </div>
      <!-- 分类 end -->
      <!-- 住宿列表 start -->
      <div class="d-flex justify-content-around hotel_content flex-wrap">
        <div class="my_padding" v-for="(hotel, key) of hotels" :key="key">
          <div class="hotel_list p-2">
            <div class="hotel_img">
              <img :src="`hotel/${hotel.hotel_img}`" class="w-100 h-100" />
            </div>
            <div class="hotel_bt">
              <p class="pb-3 border-bottom pt-3 d-flex">
                <router-link
                  class="hotel_content d-block w-50 my_wrap font-weight-bold"
                  to="/"
                  >{{ hotel.hotel_name }}</router-link
                >
                <span class="hotel_rate d-block w-20 my_bg py-1 px-3">{{
                  hotel.hotel_rate
                }}</span>
              </p>
              <div class="my_font_14 pt-1">
                <p class="py-2 mb-0">
                  <span class="phone_icon"></span> 电话：{{
                    hotel.hotel_phone
                  }}
                </p>
                <p class="pb-2 my_wrap1 mb-0">
                  <span class="address_icon"></span> 地址：{{
                    hotel.hotel_address
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页 start-->
      <nav aria-label="page navigation mt-3">
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
      <!-- 分页 end -->
    </div>
  </div>
</template>
<style scoped>
/* page start  */
/* 引入字体图标 */
@font-face {
  font-family: "icomoon";
  src: url("../../public/fonts/icomoon.eot?26q28q");
  src: url("../../public/fonts/icomoon.eot?26q28q#iefix")
      format("embedded-opentype"),
    url("../../public/fonts/icomoon.ttf?26q28q") format("truetype"),
    url("../../public/fonts/icomoon.woff?26q28q") format("woff"),
    url("../../public/fonts/icomoon.svg?26q28q#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.hotel .phone_icon {
  font-family: "icomoon";
  color: rgb(178, 31, 31);
}
.hotel .address_icon {
  font-family: "icomoon";
  color: #09d079;
}
.hotel .page-item.disabled .page-link {
  color: #999;
  background-color: #fff;
}
.hotel .page-item.active .page-link {
  color: #fff;
  background-color: rgb(178, 31, 31);
  border: 1px solid rgb(178, 31, 32);
}
.hotel .page-item .page-link {
  color: #666;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #e9e9e9;
}
.hotel .page-item + .page-item {
  margin: 0 5px;
}
.hotel .page-link:hover {
  color: #fff;
  border-color: rgb(178, 31, 32);
  background-color: rgb(178, 31, 31);
}
/* page end */
/* crumb start */
.hotel .crumb_bg {
  background: #fff;
}
.hotel .select_color {
  color: rgb(178, 31, 31);
}
/* crumb end */
/* hotel-select start */
.hotel .hotel_select {
  background: #fff;
}
.hotel .filter-list ul {
  margin-left: -20px;
}
.hotel .filter-list ul li:not(:nth-child(1)):hover {
  background: rgb(178, 31, 31);
  color: #fff;
}
.hotel .filter-list .my_width1 {
  width: 85%;
}
.hotel .my_cursor1 {
  cursor: default;
  padding: 5px;
}

.hotel .my_cursor2 {
  cursor: pointer;
  padding: 5px;
  border-radius: 2px;
  transition-duration: 0.3s;
}
.hotel .select_bg {
  background: rgb(178, 31, 31);
  color: #fff;
}
/* hotel-select end */
/* hotel-list start */
.hotel .my_padding {
  margin-bottom: 15px;
}

.hotel .my_padding:nth-child(2) {
  padding: 0 15px;
}

.hotel .my_padding:nth-child(5) {
  padding: 0 15px;
}

.hotel .my_padding:nth-child(8) {
  padding: 0 15px;
}
.hotel .hotel_list {
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.hotel .hotel_list:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -15px #666;
}

.hotel .my_wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(178, 31, 31);
}
.hotel .my_wrap1 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hotel .my_bg {
  background: rgb(178, 31, 31);
  color: #fff;
  font-size: 12px;
}

.hotel .my_font_14 {
  font-size: 14px;
}

.hotel .hotel_img {
  overflow: hidden;
  height: 272px;
}

.hotel .hotel_img img {
  transition: all 0.5s ease-in;
}

.hotel .hotel_img:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 960px) {
  .hotel_content .my_padding {
    width: 100%;
  }
}

@media screen and (min-width: 960px) {
  .hotel_content .my_padding {
    width: 33.3333333%;
  }
}
/* hotel-list end */
</style>
<script>
export default {
  data() {
    return {
      hotels: [],
    };
  },
  mounted() {
    this.axios.get("/hotel").then((res) => {
      //   console.log(res.data);
      this.hotels = res.data.result;
      // console.log(this.hotels);
    });
  },
};
</script>