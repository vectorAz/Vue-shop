//包含用于直接更新状态数据的方法的对象
import {

  RECEIVE_USERINFO,
  RECEIVE_RESETUSER,

} from '.././mutation-types'

import {
  reqUSER,
  loginout
} from '../../api/index'


const state = {
  userINfo: {}, //登录用户信息对象

}
const mutations = {
  [RECEIVE_USERINFO](state, userINfo) {
    state.userINfo = userINfo
  },

  [RECEIVE_RESETUSER](state) {
    state.userINfo = {}
  },
}
const actions = {
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
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}