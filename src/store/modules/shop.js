//包含用于直接更新状态数据的方法的对象
import Vue from 'vue'
import {

  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  REM_SHOPCARD,
  ADD_SHOPCARD,
  CLEAR_SHOPCARD
} from '.././mutation-types'
const state = {

  goods: [],  //商品列表
  ratings: [], //评价
  info: {},   //商家列表
  ShopCard:[] //购物车

}
const mutations = {

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [ADD_SHOPCARD](state,food){
      if(food.count){ //判断是不是第一次
        food.count++
      }else{
        Vue.set(food, 'count', 1)  //添加一个有数据绑定的属性 默认值为1
        state.ShopCard.push(food) //将已添加count属性的食物添加至购物车

      }
  },
  [REM_SHOPCARD](state,food){
     if(food.count){
      food.count--
      if(food.count===0){
        state.ShopCard.splice(state.ShopCard.indexOf(food),1) //如果count为0  将该商品从购物车删除
      }
     }
  },
  [CLEAR_SHOPCARD](state){
    state.ShopCard=[]
  }
}
const actions = {
  updateShop({commit},{food,isadd}){
    if(isadd){
      commit(ADD_SHOPCARD,food)
    }else{
      commit(REM_SHOPCARD,food)

    }

  },
  ClearLIST({commit}){
    state.ShopCard.forEach((item)=>item.count=0)
    commit(CLEAR_SHOPCARD)
  }

}
const getters = {
  shopLength(state){
    return state.ShopCard.reduce((previous, current) => {
    return  previous+current.count
    }, 0)
  },
  ALLprice(state){
    return  state.ShopCard.reduce((previous, current) => {
      return  previous+current.price*current.count
    }, 0)
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}