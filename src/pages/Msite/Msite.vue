<template>
  <section class="Onesection">
    <Header :title="address.name||'正在获取'">
      <div class="iconfont icon-sousuo logoheader" slot="left"></div>
      <div class="login-register" slot="right">
        <button>注册</button>
        <button>登录</button>
      </div>
    </Header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(catgory, index) in categorysArr" :key="index">
          <a href="#" v-for="(item, index) in catgory" :key="index">
            <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="1">
            <span>{{item.title}}</span>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="content-inner">
      <div class="title">
        <i class="iconfont icon-xuanxiang"></i>
        <span>附近商家</span>
      </div>
      <Shoplist/>
    </div>
  </section>
</template>
<script>
import Swiper from "swiper";
import "./swiper.min.css";
import Shoplist from "../../components/shoplist/index";
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("reqshopLists");
    this.$store.dispatch("reqfootlist");
  },
  //解决初始化时请求categorys尚无元素 无法产生滑屏的问题
  watch: {
    categorys(val) {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          direction: "horizontal", // 垂直切换选项
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },

          // 如果需要滚动条
          scrollbar: {
            el: ".swiper-scrollbar"
          }
        });
      });
    }
  },

  computed: {
    ...mapState(["address", "categorys"]),

    categorysArr() {
      const bigarr = [];
      let smallArr = [];
      this.categorys.forEach(item => {
        if (smallArr.length === 0) {
          bigarr.push(smallArr);
        }
        smallArr.push(item);
        if (smallArr.length === 8) {
          smallArr = [];
        }
      });
      return bigarr;
    }
  },

  components: {
    Shoplist
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stulus/mixins.styl'
.Onesection
  width 100%
  height 100%
  width 100%
  position absolute
  left 0px
  top 0px
  .swiper-container
    width 100%
    height 200px
    background #ffffff
    margin-top 50px
    .swiper-wrapper
      .swiper-slide
        clearFix()
        a
          float left
          width 25%
          height 100px
          display flex
          flex-direction column
          justify-content space-around
          align-items center
        span
          text-align center
        img
          width 50px
  .content-inner
    background #ffffff
    margin 10px 0px 50px 0px
    .title
      clearFix()
      color #999
      height 30px
      padding 10px 10px 0px 10px
      i
        float left
      span
        display block
        font-size 16px
  &>header
    height 50px
    position fixed
    background #02a774
    width 100%
    color #fff
    display flex
    flex-direction colum
    justify-content center
    align-items center
    z-index 100
    .iconfont
      font-size 25px
      flex 1
      margin-left 20px
    .heard-title
      color #fff
      flex 1
    .login-register
      flex 1
      margin-right 20px
      float left
      button
        float right
        border none
        color #fff
        outline none
        background-color rgba(0, 0, 0, 0)
        cursor pointer
</style>