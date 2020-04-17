<template>
  <div class="hello">
    <h1>这是欢迎页面</h1>
    <van-button type="danger" @click="jump">跳转login</van-button>
    <van-button type="danger" @click="jump2">跳转check</van-button>
    <div>
      <a-button type="primary">hello world</a-button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push("/hello/login");
    },
    jump2() {
      this.$router.push("/hello/check");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
