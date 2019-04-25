import Vue from 'vue'
import App from './App.vue'
import  router  from './router/index'
import Header from './components/header/header.vue'
import store from './store/index'
Vue.config.productionTip = false
Vue.component('Header',Header) //注册全局组件
new Vue({
  el:'#app',
  render: h => h(App),
  router, //配置路由器
  store  //配置vuex的store  使所有组件多了个属性$store
})
