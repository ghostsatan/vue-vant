/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';

const Hi = r => require.ensure([], () => r(require('./components/Hi.vue')), 'Components');
const Hello = r => require.ensure([], () => r(require('./components/HelloWorld.vue')), 'Components');

const Login = r => require.ensure([], () => r(require('./components/login.vue')), 'Components');
const Check = r => require.ensure([], () => r(require('./components/check.vue')), 'Components');

const grid = r => require.ensure([], () => r(require('./components/grid.vue')), 'Components');
const swipe = r => require.ensure([], () => r(require('./components/swipe.vue')), 'Components');

const skeleton = r => require.ensure([], () => r(require('./components/Skeleton.vue')), 'Components');
const Ant = r => require.ensure([], () => r(require('./components/Ant.vue')), 'Components');

const slide = r => require.ensure([], () => r(require('./components/slide.vue')), 'Components');
const upload = r => require.ensure([], () => r(require('./components/upload.vue')), 'Components');

const coupon = r => require.ensure([], () => r(require('./components/coupon.vue')), 'Components');
const shoplist = r => require.ensure([], () => r(require('./components/shoplist.vue')), 'Components');
const shopcard = r => require.ensure([], () => r(require('./components/shopcard.vue')), 'Components');
const shopinfo = r => require.ensure([], () => r(require('./components/shopinfo.vue')), 'Components');

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', redirect: '/hello' },
    {
      path: '/hello',
      component: Hello,
      children: [
        {
          path: 'login',
          name: "login",
          component: Login
        },
        {
          path: 'check',
          name: 'check',
          component: Check
        }
      ]
    },
    {
      path: '/hi',
      component: Hi,
      children: [
        {
          path: 'grid',
          component: grid
        },
        {
          path: 'swipe',
          component: swipe
        }
      ]
    },
    {
      path: '/Ant',
      component: Ant,
    },
    {
      path: '/skeleton',
      component: skeleton,
    },
    {
      path: '/slide',
      component: slide,
    },
    {
      path: '/upload',
      component: upload,
    },
    {
      path: '/coupon',
      component: coupon,
    },
    {
      path: '/shopcard',
      component: shopcard,
    },
    {
      path: '/shoplist',
      component: shoplist,
    },
    {
      path: '/shopinfo/:id',
      component: shopinfo,
    }
  ]
});


export default router;