//包含用于间接更新状态数据的方法的对象
import {
  getAddress,
  getfootlist,
  getshopLists,
  reqUSER,
  loginout
} from '../api/index'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RECEIVE_RESETUSER
} from './mutation-types'

export default {
  //获取地址
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
  //获取当前用户
  async getUSER({
    commit
  }) {
    const result = await reqUSER()
    if (result.code === 0) {
      const USER = result.data
      commit(RECEIVE_USERINFO, USER)
    }
  },

  //退出当前账号
  async loginout({
    commit
  }) {
    const result = await loginout()
    if (result.code === 0) {
      commit(RECEIVE_RESETUSER)
    }
  },
}