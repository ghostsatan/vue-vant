import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store';
import Vant from 'vant'
// import { Button, Grid, GridItem,NoticeBar,Skeleton,Collapse,CollapseItem,Swipe, SwipeItem,Lazyload,NumberKeyboard,ActionSheet,Toast,Uploader,CouponCell,CouponList} from 'vant'
import 'vant/lib/index.css';
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/';
// Vue.use(Button).use(Grid).use(GridItem).use(NoticeBar).use(Skeleton).use(Collapse).use(CollapseItem).use(Swipe).use(SwipeItem).use(Lazyload).use(NumberKeyboard).use(ActionSheet).use(Toast).use(Uploader);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
