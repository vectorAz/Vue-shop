<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:isshow}" @click="isshow=true">短信登录</a>
          <a href="javascript:;" :class="{on:!isshow}" @click="isshow=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:isshow}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button
                :disabled="!isrightPH||time>0"
                class="get_verification"
                @click="getVerCode"
                :class="{right_phone_number:isrightPH}"
              >{{time>0?`${time}s`:'获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>

          <div :class="{on:!isshow}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input
                  :type="pswdShow?'tel':'password'"
                  maxlength="8"
                  placeholder="密码"
                  v-model="pwd"
                >
                <div class="switch_button" :class="pswdShow?'on':'off'" @click="pswdShow=!pswdShow">
                  <div class="switch_circle" :class="{on:pswdShow}"></div>
                  <span class="switch_text">{{pswdShow?'ABC':'...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img
                  ref="Imgverification"
                  class="get_verification"
                  src="http://localhost:5000/captcha"
                  alt="captcha"
                  @click="getVerPh"
                >
              </section>
            </section>
          </div>
          <button class="login_submit" @click="loginUser">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>
<script>
import { reqSms, reqLoginSms, reqLoginPS } from "../../api/index.js";
import {RECEIVE_USERINFO} from '../../store/mutation-types.js'
export default {
  data() {
    return {
      isshow: true,
      phone: "", //手机号
      code: "", //手机验证码
      pswdShow: false, //控制密码显示隐藏
      name: "", //密码登录账号
      pwd: "", //密码登录password
      captcha: "", //密码登录验证码
      time: 0,
    };
  },

  methods: {
    async getVerCode(e) {
      e.preventDefault();
      this.time = 30;
      this.tiemID = setInterval(() => {
        if (this.time <= 0) {
          clearInterval(this.tiemID);
        }
        this.time--;
      }, 1000);

      const result = await reqSms(this.phone);
      if (result.code === 0) {
        alert("短信发送成功");
      } else {
        alert("短信发送失败");
        this.time = 0;
      }
    },
    async loginUser(e) {
      e.preventDefault();
      const { name, pwd, captcha, isrightPH, code,isshow, phone } = this;
      let result;
      if (isshow) {
        //短信登录
        if (!isrightPH) {
          alert("请输入正确的手机号");
          return;
        } else if (!/^\d{6}$/.test(code)) {
          alert("请输入正确的验证码");
          return;
        }
        console.log(phone,code);
        
        result = await reqLoginSms({ phone, code });
      } else {
        //密码登录
        if (!name.trim()) {
          alert("必须输入密码");
          return;
        } else if (!pwd.trim()) {
          alert("必须输入密码");
          return;
        } else if (!captcha.trim()) {
          alert("必须输入验证码");
          return;
        }
        console.log(name,pwd,captcha);
        
        result = await reqLoginPS({ name, pwd, captcha })
        console.log(result);
        
      }
      if (result.code === 0) {
        console.log(result.data);
       const userINfo=result.data  //保存到状态中
        this.$store.commit(RECEIVE_USERINFO,userINfo)

        alert("登录成功");
        this.$router.replace('/profile')

    } else {
        this.time = 0;
        alert("登录失败");
      }
    },
    getVerPh() {
      this.$refs.Imgverification.src =
        "http://localhost:5000/captcha?data:" + Date.now();
    }
  },
  computed: {
    //计算属性 判断是否是正确的手机号
    isrightPH() {
      const phoneREG = /^1\d{10}$/;
      return phoneREG.test(this.phone);
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stulus/mixins.styl'
.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #02a774
        text-align center
      .login_header_title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #02a774
            font-weight 700
            border-bottom 2px solid #02a774
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #02a774
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right_phone_number
                color #000
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color 0.3s, border-color 0.3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #02a774
              >.switch_circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.1)
                transition transform 0.3s
                &.on
                  transform translateX(30px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #02a774
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go_back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>