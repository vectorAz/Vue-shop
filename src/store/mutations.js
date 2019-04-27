//包含用于直接更新状态数据的方法的对象
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USERINFO,RECEIVE_RESETUSER} from './mutation-types'

export default {
 [ RECEIVE_ADDRESS](state,address){
    state.address=address
  },
 [ RECEIVE_CATEGORYS](state,categorys){
    state.categorys=categorys
  },
 [RECEIVE_SHOPS](state,shops){
    state.shops=shops
  },
 [RECEIVE_USERINFO](state,userINfo){
    state.userINfo=userINfo
  },
 [RECEIVE_RESETUSER](state){
    state.userINfo={}
  },
}