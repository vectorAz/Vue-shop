//表单效验
import Vue from 'vue'
// import messages from 'assets/js/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate);
// 指定本地提示信息
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    myphone: '手机号',
    Vercode: '验证码',
    name: '用户名',
    pwd: '密码',
    captcha: '验证码'
  }
})
