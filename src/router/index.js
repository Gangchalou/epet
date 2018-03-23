import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from  '../pages/Msite/Msite.vue'
import Class from  '../pages/Class/Class.vue'
import ShopCart from  '../pages/ShopCart/ShopCart.vue'
import Profile from  '../pages/Profile/Profile.vue'
import Classer from '../pages/Class/Classer/Classer.vue'
import Brand from '../pages/Class/Brand/Brand.vue'
import All from '../pages/All/All.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect:'/msite'
    },
    {
      path: '/msite',
      component:Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/class',
      component: Class,
      meta: {
        showFooter: true
      },
      children: [
        {
          path: '/class/classer',
          component: Classer,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/brand/brand',
          component: Brand,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/',
          redirect:'/class/classer'
        },
      ]
    },
    {
      path: '/shopcart',
      component: ShopCart,
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/all',
      component: All
    },

  ]
})
