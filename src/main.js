import Vue from 'vue'
import App from './App.vue'
import  router  from './router/index'
import Header from './components/header/header.vue'
Vue.config.productionTip = false
Vue.component('Header',Header) //注册全局组件
new Vue({
  el:'#app',
  render: h => h(App),
  router
})
