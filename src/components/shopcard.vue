<!-- 这里是购物车页面 -->
<template>
  <div class="shopcar">
    <van-checkbox-group v-model="result">
      <div class="shopcarList" v-for="(item, index) in List" :key="index">
        <img :src="item.thumb_path" alt />
        <div class="shopcarListinfo">
          <h2>{{ item.title }}</h2>
          <div>
            <span>￥{{ item.sell_price }}</span>
            <van-stepper
              async-change
              v-model="value[item.id]"
              ref="num"
              integer
              @change="countChange(item.id, index)"
            />
            <a @click="shiftIt(item.id,index)">删除</a>
          </div>
        </div>
        <van-checkbox
          class="checkbox"
          :name="item.id"
          ref="checkboxes"
          slot="right-icon"
          @click="toggle(index, item.id)"
        />
      </div>
    </van-checkbox-group>
    <van-submit-bar
      class="submit"
      :price="sum"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-button type="default" @click="clear">清空购物车</van-button>
      <van-checkbox label-position="left" v-model="checked" @click="onAllselect">全选</van-checkbox>
    
    </van-submit-bar>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
/* eslint-disable */
export default {
  data() {
    return {
      checked: false,
      id: this.$store.getters.getAllId,
      value: this.$store.getters.getIdCount,
      List: [],
      result: []
    };
  },
  computed: {
      // ...mapGetters(['getAllSum'])
      ...mapGetters({
        "sum":"getAllSum"
      })
    },
  methods: {
    // 商品列表复选框切换状态函数
    toggle(i, id) {
      this.$refs.checkboxes[i].toggle();
      let obj = {
        id,
        flag: !this.$store.getters.getAllFlag[id]
      };
      this.$store.commit("updateFlag", obj);
    },
    //清空购物车
    clear(){
      this.List =[];
       this.$store.commit("clear");
    },
    // 删除商品函数
    shiftIt(id, i) {
      this.List.splice(i, 1);
      this.$store.commit("shiftgoods", id);
      if (this.List.length === 0) {
        this.checked = false;
      }
    },
    // 提交订单函数
    onSubmit() {},
    // 获取购物车商品列表数据
    getshopcarlist() {
      if (this.id.length === 0) return;
      this.$axios.get("api/goods/getshopcarlist/" + this.id).then(res => {
        if (res.data.status === 0) {
          this.List = res.data.message;
        } else {
          this.$toast("商品信息加载失败");
        }
      });
    },
    // 点击全选
    onAllselect() {
      if (this.checked && this.List.length) {
        this.List.forEach(item => {
          this.result.push(item.id);
          // console.log(this.result);
        });
      } else {
        this.result = [];
      }
    },
    // 遍历购物车商品是否为选中状态
    selected() {
      let obj = this.$store.getters.getAllFlag;
      this.result = [];
      for (const key in obj) {
        if (obj[key]) {
          this.result.push(key * 1);
        }
      }
    },
    // 当数值发生改变时触发
    countChange(id, i) {
      let obj = {
        id,
        count: this.$refs.num[i].value
      };
      this.$store.commit("updateCount", obj);
    }
  },

  created() {
    console.log(this.$store.state);
    console.log(22222,this.$store.getters);
    this.getshopcarlist();
    // 先遍历选择状态
    this.selected();
  },

  watch: {
    List(val) {
      this.selected(val);
    },
    result(val) {
      if (val.length === this.List.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
<style lang='less' scoped>
@rem: 750/10rem;
.shopcar {
  padding-bottom: 100 / @rem;
  .shopcarList {
    display: flex;
    justify-content: space-between;
    margin: 60 / @rem 60 / @rem 0;
    padding: 60 / @rem;
    padding-left: 0;
    box-shadow: 0 0 10 / @rem #ccc;
    img {
      width: 5rem;
      height: auto;
    }
    .checkbox {
      width: 2rem;
    }
    .shopcarListinfo {
      h2 {
        font-size: 32 / @rem;
        margin: 0;
        padding: 0;
      }
      div {
        display: flex;
        align-items: center;
        margin-top: 10 / @rem;
        font-size: 28 / @rem;
        span {
          font-weight: bold;
          color: red;
          margin: 0 20 / @rem;
        }
        a {
          color: blue;
          margin-left: 20 / @rem;
        }
      }
    }
  }
  .submit {
    width: 23rem;
    bottom: 250 / @rem;
    padding-left: 20 / @rem;
  }
}
</style>