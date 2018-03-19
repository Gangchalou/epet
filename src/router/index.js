import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from  '../pages/Msite/Msite.vue'
import Class from  '../pages/Class/Class.vue'
import ShopCart from  '../pages/ShopCart/ShopCart.vue'
import Profile from  '../pages/Profile/Profile.vue'

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
    },
    {
      path: '/class',
      component: Class,
    },
    {
      path: '/shopcart',
      component: ShopCart,
    },
    {
      path: '/profile',
      component: Profile
    },
  ]
})
