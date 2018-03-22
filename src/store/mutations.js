import Vue from 'vue'
import {
  RECEIVE_HOMEPAGE,
  RECEIVE_ALLBRANDS,
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND
} from './mutation-types'

export default {
  [RECEIVE_HOMEPAGE](state, {homepage}) {
    state.homepage = homepage
  },

  [RECEIVE_ALLBRANDS](state, {allbrands}) {
    state.allbrands = allbrands
  },

  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state, {brand}) {
    state.brand = brand
  },
}
