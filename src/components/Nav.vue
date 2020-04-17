<template>
  <div class="nav">
    <router-link to="/hello" class="router">首页</router-link>
    <router-link to="/hi" class="router">hi首页</router-link>
    <router-link to="./skeleton" class="router">骨架屏</router-link>
    <router-link to="./slide" class="router">滑动</router-link>
    <router-link to="./upload" class="router">上传</router-link>
    <router-link to="./coupon" class="router">优惠</router-link>
    <router-link to="./Ant" class="router">Ant-design</router-link>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o"  to="/shopcard" :info="$store.getters.getAllCount" >购物车</van-tabbar-item>
      <van-tabbar-item icon="gift-card-o"  to="/shoplist">商品</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  margin: 10px;
}
.router {
  margin: 0 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
