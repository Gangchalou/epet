import {
  reqHomepage,
  reqAllbrands,
  reqCategorys,
  reqBrand,
} from '../api'
import {
  RECEIVE_HOMEPAGE,
  RECEIVE_ALLBRANDS,
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
} from './mutation-types'

export default {
   // 异步获取商家商品列表
  async getHomepage({commit}, cb) {
    const result = await reqHomepage()
    if(result.code===0) {
      const homepage = result.data
      commit(RECEIVE_HOMEPAGE, {homepage})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      cb && cb()
    }
  },

  //异步获取全部品牌
  async getAllbrands({commit}, cb) {
    const result = await reqAllbrands()
    if(result.code===0) {
      const Allbrands = result.data
      commit(RECEIVE_ALLBRANDS, {allbrands})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      cb && cb()
    }
  },
  //异步获取分类列表
  async getCategorys({commit}, cb) {
    const result = await reqCategorys()
    if(result.code===0) {
      const Homepage = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      cb && cb()
    }
  },
  //异步获取品牌
  async getBrand({commit}, cb) {
    const result = await reqBrand()
    if(result.code===0) {
      const brand = result.data
      commit(RECEIVE_BRAND, {brand})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      cb && cb()
    }
  },



}
