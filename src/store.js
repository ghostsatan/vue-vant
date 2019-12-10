import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
export default new Vuex.Store({
  state: {
    cart
  },
  mutations: {
    addTocart(state, shopinfo) {
      // 先设定一个开关，判断传过来的商品是否在car存在
      let flag = false;
      // 用一个some函数来判断
      state.cart.some(item => {
        if (item.id == shopinfo.id) {
          item.count += shopinfo.count;
          item.count = Math.min(item.count, item.maxCount);
          flag = true;
          return true;
        }
      })
      if (!flag) {
        state.cart.push(shopinfo)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // 删除商品
    shiftgoods(state, id) {
      state.cart.some((item, index) => {
        if (item.id == id) {
          state.cart.splice(index, 1);
          return true
        }
      });
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // 更新数量
    updateCount(state, obj) {
      state.cart.some(item => {
        if (item.id == obj.id) {
          item.count = obj.count
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    // 更新选中的状态
    updateFlag(state, obj) {
      state.cart.some(item => {
        if (item.id == obj.id) {
          item.flag = obj.flag
          return true
        }
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    //清空购物车
    clear(state) {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    // 获取总数量
    getAllCount(state) {
      let sum = 0;
      state.cart.forEach(item => {
        sum += item.count
      });
      return sum
    },
    // 获取id字符串
    getAllId(state) {
      let id = [];
      state.cart.forEach(item => {
        id.push(item.id)
      });
      return id.join(',')
    },
    // 获取每个id对应的数量
    getIdCount(state) {
      let obj = {};
      state.cart.forEach(item => {
        obj[item.id] = item.count
      });
      return obj
    },
    // 获取每个id对应的状态
    getAllFlag(state) {
      let obj = {};
      state.cart.forEach(item => {
        obj[item.id] = item.flag
      });
      return obj
    },
    // 获取总价格
    getAllSum(state) {
      let price = 0;
      state.cart.forEach(item => {
        if (item.flag) {
          price += (item.count * item.price);
        }
      });
      return price * 100
    }
  },
  actions: {

  }
});

