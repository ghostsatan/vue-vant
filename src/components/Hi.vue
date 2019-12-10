<template>
  <div class="hello">
   <div>这是首页 我就想看首页</div>
   <van-button type="danger" @click="$router.push('/hi/grid')">跳转按钮</van-button>
   <van-button type="danger" @click="$router.push('/hi/swipe')">跳转按钮</van-button>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
 data(){
   return{
   
   }
  
 }, 
 methods:{
   jump(){
    this.$router.push('/hello')
   }
 }
}
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
