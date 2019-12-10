<!-- 商品列表组件 -->
<template>
  <div class="shopList-box">
    <router-link :to="'/shopinfo/' + item.id" class="shopList" v-for="item in goods" :key="item.id">
      <div class="picinfo">
        <van-image width="6rem" height="6rem" fit="cover" :src="item.img_url" />
        <p class="pictitle">{{ item.title }}</p>
      </div>
      <div class="shopprice">
        <span class="price">￥{{ item.sell_price }}</span>
        <del>￥{{ item.market_price }}</del>
        <div class="shopstatus">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </div>
      </div>
    </router-link>
    <van-button v-if="flag" plain size="large" type="danger" @click="getMoregoods">加载更多</van-button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      pageIndex: 1,
      goods: [],
      flag: true
    };
  },
  methods: {
    getgoods() {
      this.$axios.get("/api/getgoods?pageindex=" + this.pageIndex).then(res => {
        if (res.data.status === 0) {
          if (res.data.message.length) {
            this.goods = this.goods.concat(res.data.message);
          } else {
            this.flag = false;
            this.$toast("没有更多商品了");
          }
        } else {
          this.$toast("商品列表加载失败");
        }
      });
    },
    getMoregoods() {
      this.pageIndex++;
      this.getgoods();
    }
  },
  created() {
    this.getgoods();
  }
};
</script>
<style lang='less' scoped>
@rem: 750/10rem;
.shopList-box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  .shopList {
    width: 10rem;
    margin: 15 / @rem;
    box-shadow: 0 0 10 / @rem #ccc;
    .pictitle {
      display: flex;
      font-size: 30 / @rem;
      font-weight: 800;
      align-items: center;
      height: 300 / @rem;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    .shopprice {
      background-color: #ddd;
      font-size: 26 / @rem;
      color: #666;
      .price {
        font-weight: 600;
        color: red;
        margin: 60 / @rem;
        line-height: 80 / @rem;
        font-size: 40 / @rem;
      }
      .shopstatus {
        display: flex;
        justify-content: space-between;
        padding: 20 / @rem;
      }
    }
  }
}
</style>