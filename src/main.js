import Vue from 'vue'
import App from './App.vue'
import  router  from './router/index'
import Header from './components/header/header.vue'
import store from './store/index'
import Star from './components/stars/index.vue'
import {Button} from 'mint-ui'
import  CartControl from  './components/CartControl/CartControl.vue'

import './validate/index'
import './pages/Shops/mock/mockServer'
Vue.config.productionTip = false
Vue.component('Header',Header) //注册全局头部组件
Vue.component('Star',Star) //注册全局星星组件
Vue.component(Button.name,Button) //注册全局星星组件
Vue.component('CartControl',CartControl) //注册全局星星组件
new Vue({
  el:'#app',
  render: h => h(App),
  router, //配置路由器
  store  //配置vuex的store  使所有组件多了个属性$store
})
