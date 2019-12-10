<!-- 商品详情购买页面 -->
<template>
  <div class="shopinfo">
    <van-swipe :autoplay="2000" indicator-color="white" class="lunbobox">
      <van-swipe-item v-for="item in lunbotu" :key="item.id" class="lunbotu">
        <van-image width="15rem" fit="fill" :src="item.src" />
      </van-swipe-item>
    </van-swipe>
    <div class="shopinfodec">
      <h2>{{ shopinfo.title }}</h2>
      <div class="sellprice">
        市场价：
        <del>￥{{ shopinfo.market_price }}</del>&nbsp;&nbsp;&nbsp;销售价：
        <span class="shopprice">￥{{ shopinfo.sell_price }}</span>
      </div>
      <div class="shopnum">
        购买数量：
        <van-stepper
          v-model="value"
          :max="shopinfo.stock_quantity"
          input-width="1.2rem"
          button-size="1.2rem"
        />
      </div>
      <div class="btn">
        <van-button type="info">立即购买</van-button>
        <van-button type="danger" @click="addCart">加入购物车</van-button>
      </div>
    </div>
    <div class="shopparameter">
      <h2>商品参数</h2>
      <div class="shoptro">
        <p>商品货号：{{ shopinfo.goods_no }}</p>
        <p>库存情况：{{ shopinfo.stock_quantity }}件</p>
        <p>上架时间：{{ shopinfo.add_time }}</p>
      </div>
      <div class="shoptjieshao">
        <van-button plain size="large" type="info" @click="goShopdesc(id)">图文介绍</van-button>
        <van-button plain size="large" type="danger" @click="goComment(id)">商品评论</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      shopinfo: {},
      value: 0
    };
  },
  methods: {
    // 获取商品图片轮播图
    getLunbo() {
      this.$axios.get("api/getthumimages/" + this.id).then(res => {
        if (res.data.status === 0) {
          this.lunbotu = res.data.message;
        } else {
          this.$toast("图片加载失败");
        }
      });
    },
    // 获取商品参数
    getinfo() {
      this.$axios.get("api/goods/getinfo/" + this.id).then(res => {
        if (res.data.status === 0) {
          this.shopinfo = res.data.message[0];
        } else {
          this.$toast("信息加载失败");
        }
      });
    },
    // 点击去往商品评论页面
    goComment(id) {
      this.$router.push({ name: "shopcomment", params: { id } });
    },
    // 点击去往商品介绍页面
    goShopdesc(id) {
      this.$router.push({ name: "shopdesc", params: { id } });
    },
    // 加入购物车函数
    addCart() {
      let shopinfo = {
        count: parseInt(this.value),
        maxCount: this.shopinfo.stock_quantity,
        id: this.id,
        price: this.shopinfo.sell_price,
        flag: true
      };
      this.$store.commit("addTocart", shopinfo);
    }
  },
  created() {
    this.getLunbo();
    this.getinfo();
  }
};
</script>
<style lang='less' scoped>
@rem: 750/10rem;
.shopinfo {
  padding: 20 / @rem;
  .lunbobox {
    box-shadow: 0 0 5px #aaa;
    .lunbotu {
      text-align: center;
    }
  }
  .shopinfodec {
    margin: 20 / @rem 0;
    padding: 20 / @rem;
    box-shadow: 0 0 5px #aaa;
    h2 {
      margin: 0;
      font-size: 80 / @rem;
      font-weight: 600;
      text-align: center;
      padding: 20 / @rem 0;
      border-bottom: 1px solid #ccc;
    }
    .sellprice {
      margin-top: 20 / @rem;
      color: #666;
      font-size: 64 / @rem;
      .shopprice {
        font-size: 40 / @rem;
        color: red;
        font-weight: bold;
      }
    }
    .shopnum {
      display: flex;
      align-items: center;
      margin: 30 / @rem 0;
      color: #666;
      font-size: 64 / @rem;
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      button {
        font-size: 32 / @rem;
        font-weight: bold;
        margin: 10 / @rem;
      }
    }
  }
  .shopparameter {
    padding: 20 / @rem;
    box-shadow: 0 0 5px #ccc;
    h2 {
      margin: 0;
      padding: 20 / @rem 0;
      font-size: 42 / @rem;
      border-bottom: 1px solid #ccc;
    }
    .shoptro {
      font-size: 28 / @rem;
      color: #aaa;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>