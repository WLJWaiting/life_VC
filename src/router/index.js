import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home/home.vue';
import allproducts from '../components/allproducts/allproducts.vue';
import personal from '../components/personal/personal.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import stroll from '../components/stroll/stroll.vue'
import setting from '../components/setting/setting.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import newList from '../components/new/new.vue'
import know from '../components/know/know.vue'
import channel from '../components/channel/channel.vue'
import kitchen from '../components/kitchen/kitchen.vue'
import menage from '../components/menage/menage.vue'
import homeclothes from '../components/homeclothes/homeclothes.vue'
import live from '../components/live/live.vue'
import channelsub from '../components/channelsub/channelsub.vue'
import item from '../components/item/item.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/allproducts',
      component: allproducts
    },
    {
      path: '/stroll',
      component: stroll
   },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/know',
      component: know
    },
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/new',
      component: newList
    },
    {
      path: '/channel',
      component: channel,
      children: [
        {
          path: '2001',
          component: menage
        },
        {
          path: '2101',
          component: kitchen
        },
        {
          path: '2201',
          component: homeclothes
        },
        {
          path: '2301',
          component: live
        }
      ]
    },
    {
      path: '/channelsub',
      component: channelsub
    },
    {
      path: '/item',
      component: item,
      children: [
        {
          path: '2001',
          component: menage
        },
        {
          path: '2101',
          component: kitchen
        },
        {
          path: '2201',
          component: homeclothes
        },
        {
          path: '2301',
          component: live
        }
      ]
    },
  ]
})
