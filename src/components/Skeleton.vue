<template>
<div class="hello">

    <div v-if="isLoad">
      <van-skeleton title :row="5" style="margin-top:50px" v-for="item in 3" :key="item"/>

      <div class="loading">
        <img src="../assets/logo.png" alt="">
      </div>
    </div>

    <div v-else>
      <div v-for="item in 3" :key="item" style="margin-top:40px">
        <p>Skeleton 骨架屏</p>
        <p>将loading属性设置成false表示内容加载完成，此时会隐藏占位图，并显示Skeleton的子组件段落占位图宽度，
          可传数组来设置每一行的宽度段落占位图行数头像占位图大小通过title属性显示标题占位图，通过row属性配置占位段落行数</p>
      </div>
    </div>

  </div>

</template>

<script>
export default {
 data() {
    return {
        isLoad: true
    }
  
 }, 
 mounted() {
    // 静态数据，所以用了计时器。正式项目中不用这样做
    setTimeout(function(){
      this.isLoad = false;
    }.bind(this),3000)
  },
 methods:{
  
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 p{
    font-size: 14px;
    line-height: 28px;
    margin:0;
    padding: 0 15px;
  }
  
  .loading img{
        position: fixed;
        width:42px;
        height:42px;
        margin:-21px 0 0 -21px;
        top: 50%;
        left: 50%;
        z-index: 99;
        animation:rotate .6s infinite linear;
        -webkit-animation:rotate .6s infinite linear;
    }
    @keyframes rotate{
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
    @-webkit-keyframes rotate{
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
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
