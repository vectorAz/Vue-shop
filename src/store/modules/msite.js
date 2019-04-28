import {
  getAddress,
  getfootlist,
  getshopLists,
} from '../../api/index'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from '.././mutation-types'


const state = {
  longitude: '116.36867', //经度
  latitude: '40.10038', //纬度
  address: {}, //地址
  categorys: [], //食品列表
  shops: [], //商家列表

}
const mutations = {
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  },
}
const actions = {
  async reqAddress({
    commit,
    state
  }) {
    const {
      latitude,
      longitude
    } = state
    const result = await getAddress(latitude, longitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  //获取商家分类
  async reqshopLists({
    commit,
    state
  }) {
    const {
      latitude,
      longitude
    } = state
    const result = await getshopLists({
      latitude,
      longitude
    })
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },
  //获取商品
  async reqfootlist({
    commit
  }) {
    const result = await getfootlist()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}