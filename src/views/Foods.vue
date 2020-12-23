<template>
  <div class="food">
    <div>
      <img src="food/04-wanzhuan_02.jpg" class="w-100" />
    </div>
    <!-- crumb start-->
    <div class="crumb p-3 crumb_bg my_font_14">
      <div class="container">
        <span class="pl-1 pr-3">您当前的位置：</span>
        <router-link to="/" class="px-2">网站首页</router-link>&gt;
        <router-link to="/" class="px-2">玩转西安</router-link>&gt;
        <router-link to="/" class="select_color">吃在西安</router-link>
      </div>
    </div>
    <!--crumb end -->
    <!-- 住宿列表 start -->
    <div class="zhu">
      <ul>
        <li class="kuang" v-for="(food, key) of food" :key="key">
          <a href="#">
            <div class="tu">
              <img class="tu_img" :src="`food/${food.food_img}`" alt="" />
            </div>
            <div class="zi">
              <h2 class="mingzi">{{ food.food_title }}</h2>
              <p class="xiangxi my_wrap">{{ food.food_content }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!-- 分页开始 -->
    <div class="fenye">
      <div class="fenye1">
        <span>上一页</span>
        <span class="fenyedi">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>...</span>
        <span>17</span>
        <span>下一页</span>
      </div>
    </div>
    <!-- 分页结束 -->
  </div>
</template>
<style scoped>
/* crumb start */
.food .crumb_bg {
  background: #fff;
}
.food .select_color {
  color: rgb(178, 31, 31);
}
/* crumb end */
/* 中间部分开始 */
.food .zhu {
  width: 1200px;
  margin: 24px auto;
  box-sizing: border-box;
}
.food ul {
  width: 1224px;
}
.food .kuang {
  width: 384px;
  height: 378px;
  background-color: #fff;
  margin: 24px 24px 0 0;
  padding: 10px;
  /* 动态 */
  /* background: #b6c0cf; */
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
}
.food .kuang:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -15px #333;
}

.food .kuang .tu {
  width: 364px;
  height: 272px;
  overflow: hidden; /*多出的部分不可见*/
  position: relative;
  background-color: #eee;
  box-sizing: border-box;
  /* margin:10px 10px; */
}

.food .tu:hover .tu_img {
  transform: scale(1.1);
}
.food .tu_img {
  /* width: 100%; */
  background: #fff;
  cursor: pointer;
  transition: all 0.5s;
}
.food .kuang img {
  height: 100%;
  margin: 0 auto;
}
.food li {
  list-style-type: none;
}

.food .zhu li {
  float: left;
}

.food .zi {
  padding: 15px 10px 0;
  line-height: 18px;
  font-size: 14px;
  box-sizing: border-box;
}
.food .zi .mingzi {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.food .zi p {
  color: #666;
  padding-top: 10px;
  font-size: 14px;
}
.food p.my_wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.food .kuang a {
  text-decoration: none;
}
.food .tu img {
  display: block;
  margin: 0 auto;
}

.food i {
  display: inline-block;
  height: 14px;
}
/* 中间部分开始 */

/* 分页开始 */
.food .fenye1 {
  line-height: 38px;
  padding: 30px 0;
  text-align: center;
  margin: 30px 0;
}
.food .fenye1 span {
  display: inline-block;
  padding: 6px 15px;
  margin: 30px 5px;
  font-size: 20px;
  color: #666;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e9e9e9;
}
.food .fenye1 .fenyedi {
  color: #fff;
  background-color: #b21f1f;
}
/* 分页结束 */
</style>
<script>
export default {
  data() {
    return {
      food: [],
    };
  },
  mounted() {
    this.axios.get("/food").then((res) => {
      //   console.log(res.data);
      this.food = res.data.result;
      console.log(this.food);
    });
  },
};
</script>
    
