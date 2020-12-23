<template>
  <div class="shop">
    <div>
      <img src="shop/04-wanzhuan_02.jpg" class="w-100" />
    </div>
    <!-- crumb start-->
    <div class="crumb p-3 crumb_bg my_font_14">
      <div class="container">
        <span class="pl-1 pr-3">您当前的位置：</span>
        <router-link to="/" class="px-2">网站首页</router-link>&gt;
        <router-link to="/" class="px-2">玩转西安</router-link>&gt;
        <router-link to="/" class="select_color">购在西安</router-link>
      </div>
    </div>
    <!--crumb end -->
    <!-- 分类 start -->
    <div class="container mt-3">
      <div class="px-4 shop_select mb-4 my_font_14">
        <div class="filter-list border-bottom py-2">
          <ul class="d-flex justify-content-around my_width1">
            <li class="my_cursor1">旅游商品类型：</li>
            <li class="my_cursor2 filter-item select_bg">全部</li>
            <li class="my_cursor2 filter-item">食品类</li>
            <li class="my_cursor2 filter-item">日用品</li>
            <li class="my_cursor2 filter-item">纪念用品</li>
            <li class="my_cursor2 filter-item">艺术类</li>
            <li class="my_cursor2 filter-item">工业类</li>
            <li class="my_cursor2 filter-item">药材类</li>
          </ul>
        </div>
      </div>
      <!-- 分类 end -->
      <!-- 住宿列表 start -->
      <div class="d-flex justify-content-around shop_content flex-wrap">
        <div class="my_padding" v-for="(shop, key) of shops" :key="key">
          <div class="shop_list p-2">
            <div class="shop_img">
              <img :src="`shop/${shop.shop_img}`" class="w-100 h-100" />
            </div>
            <div class="shop_bt">
              <p class="pb-3 border-bottom pt-3 d-flex">
                <router-link
                  class="shop_content d-block w-75 font-weight-bold title-hove"
                  to="/"
                  >{{ shop.shop_title }}</router-link
                >
              </p>
              <div class="my_font_14 pt-1">
                <p class="py-2 mb-0 my_wrap">
                  {{ shop.shop_content }}
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
            <router-link class="page-link" to="#">5</router-link>
          </li>
          <li class="page-item">
            <router-link class="page-link" to="#">6</router-link>
          </li>
          <li class="page-item">
            <router-link class="page-link" to="#">下一页</router-link>
          </li>
        </ul>
      </nav>
      <!-- 分页 start -->
    </div>
  </div>
</template>
<style scoped>
/* page start  */
.shop .page-item.disabled .page-link {
  color: #999;
  background-color: #fff;
}
.shop .page-item.active .page-link {
  color: #fff;
  background-color: rgb(178, 31, 31);
  border: 1px solid rgb(178, 31, 32);
}
.shop .page-item .page-link {
  color: #666;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #e9e9e9;
}
.shop .page-item + .page-item {
  margin: 0 5px;
}
.shop .page-link:hover {
  color: #fff;
  border-color: rgb(178, 31, 32);
  background-color: rgb(178, 31, 31);
}
/* page end */
/* crumb start */
.shop .crumb_bg {
  background: #fff;
}
.shop .select_color {
  color: rgb(178, 31, 31);
}
/* crumb end */
/* hotel-select start */
.shop .shop_select {
  background: #fff;
}
.shop .filter-list ul {
  margin-left: -20px;
}
.shop .filter-list ul li:not(:nth-child(1)):hover {
  background: rgb(178, 31, 31);
  color: #fff;
}
.shop .filter-list .my_width1 {
  width: 85%;
}
.shop .my_cursor1 {
  cursor: default;
  padding: 5px;
}

.shop .my_cursor2 {
  cursor: pointer;
  padding: 5px;
  border-radius: 2px;
  transition-duration: 0.3s;
}
.shop .select_bg {
  background: rgb(178, 31, 31);
  color: #fff;
}
/* hotel-select end */
/* hotel-list start */
.shop .my_padding {
  margin-bottom: 15px;
}

.shop .my_padding:nth-child(2) {
  padding: 0 15px;
}

.shop .my_padding:nth-child(5) {
  padding: 0 15px;
}

.shop .my_padding:nth-child(8) {
  padding: 0 15px;
}
.shop .shop_list {
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.shop .shop_list:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -15px #666;
}
.shop .shop_list:hover .title-cover {
  color: rgb(178, 31, 31);
}
.shop .my_wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shop .my_wrap1 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shop .my_bg {
  background: rgb(178, 31, 31);
  color: #fff;
  font-size: 12px;
}

.shop .my_font_14 {
  font-size: 14px;
}

.shop .shop_img {
  overflow: hidden;
  height: 272px;
}

.shop .shop_img img {
  transition: all 0.5s ease-in;
}

.shop .shop_img:hover img {
  transform: scale(1.1);
}

@media screen and (max-width: 960px) {
  .shop_content .my_padding {
    width: 100%;
  }
}

@media screen and (min-width: 960px) {
  .shop_content .my_padding {
    width: 33.3333333%;
  }
}
/* hotel-list end */
</style>
<script>
export default {
  data() {
    return {
      shops: [],
    };
  },
  mounted() {
    this.axios.get("/shop").then((res) => {
      //   console.log(res.data);
      this.shops = res.data.result;
      console.log(this.shops);
    });
  },
};
</script>