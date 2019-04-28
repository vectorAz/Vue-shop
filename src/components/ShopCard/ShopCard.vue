<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{highlight:shopLength>0}">
              <i class="iconfont icon-shopping_cart highlight" :class="{highlight:shopLength>0}"></i>
            </div>
            <div class="num">{{shopLength}}</div>
          </div>
          <div class="price highlight">￥{{ALLprice}}</div>
          <div class="desc">另需配送费￥{{info.deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="enough">{{size}}</div>
        </div>
      </div>
      <transition name="Shoplist">
        <div class="shopcart-list" v-show="MASKshow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearSHOP">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(item, index) in ShopCard" :key="index">
                <span class="name">{{item.name}}</span>
                <div class="price">
                  <span>￥{{item.price}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="item"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="MASK">
      <div class="list-mask" v-if="MASKshow" @click="toggleShow"></div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      isShow: false
    };
  },
  props: {
    food: Object
  },
  computed: {
    ...mapState({
      ShopCard: state => state.shop.ShopCard,
      info: state => state.shop.info
    }),
    ...mapGetters(["shopLength", "ALLprice"]),

    size() {
      const { ALLprice, shopLength } = this;
      const { minPrice } = this.info;
      if (shopLength === 0) {
        return `${minPrice}起送`;
      } else if (ALLprice < minPrice) {
        return `还差$${minPrice - ALLprice}起送`;
      } else {
        return "去结账";
      }
    },
    enough() {
      return this.ALLprice >= this.info.minPrice ? "enough" : "not-enough";
    },
    MASKshow() {
      if (this.shopLength === 0) {
        this.isShow = false;
        return false;
      }
      if (this.isShow) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(".list-content", {
              click: true
            });
          } else {
            this.scroll.refresh(); //刷新
          }
        });
      }

      return this.isShow;
    }
  },
  methods: {
    toggleShow() {
      if (this.shopLength > 0) {
        //坑注意!!!!!!
        this.isShow = !this.isShow;
      }
    },
    clearSHOP(){
      this.$store.dispatch('ClearLIST')
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stulus/mixins.styl'
.shopcart
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height 48px
  .content
    display flex
    background #141d27
    font-size 0
    color rgba(255, 255, 255, 0.4)
    .content-left
      flex 1
      .logo-wrapper
        display inline-block
        vertical-align top
        position relative
        top -10px
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        box-sizing border-box
        border-radius 50%
        background #141d27
        .logo
          width 100%
          height 100%
          border-radius 50%
          text-align center
          background #2b343c
          &.highlight
            background $green
          .icon-shopping_cart
            line-height 44px
            font-size 24px
            color #80858a
            &.highlight
              color #fff
        .num
          position absolute
          top 0
          right 0
          width 24px
          height 16px
          line-height 16px
          text-align center
          border-radius 16px
          font-size 9px
          font-weight 700
          color #ffffff
          background rgb(240, 20, 20)
          box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .price
        display inline-block
        vertical-align top
        margin-top 12px
        line-height 24px
        padding-right 12px
        box-sizing border-box
        border-right 1px solid rgba(255, 255, 255, 0.1)
        font-size 16px
        font-weight 700
        &.highlight
          color #fff
      .desc
        display inline-block
        vertical-align top
        margin 12px 0 0 12px
        line-height 24px
        font-size 10px
    .content-right
      flex 0 0 105px
      width 105px
      .pay
        height 48px
        line-height 48px
        text-align center
        font-size 12px
        font-weight 700
        &.not-enough
          background #2b333b
        &.enough
          background #00b43c
          color #fff
  .shopcart-list
    position absolute
    left 0
    top 0
    z-index -1
    width 100%
    transform translateY(-100%)
    &.Shoplist-enter-active, &.Shoplist-leave-active
      transition all 0.5s
    &.Shoplist-enter, &.Shoplist-leave-to
      transform translateY(0%)
  .list-header
    height 40px
    line-height 40px
    padding 0 18px
    background #f3f5f7
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    .title
      float left
      font-size 14px
      color rgb(7, 17, 27)
    .empty
      float right
      font-size 12px
      color rgb(0, 160, 220)
  .list-content
    padding 0 18px
    max-height 217px
    overflow hidden
    background #fff
    .food
      position relative
      padding 12px 0
      box-sizing border-box
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      .name
        line-height 24px
        font-size 14px
        color rgb(7, 17, 27)
      .price
        position absolute
        right 90px
        bottom 12px
        line-height 24px
        font-size 14px
        font-weight 700
        color rgb(240, 20, 20)
      .cartcontrol-wrapper
        position absolute
        right 0
        bottom 6px
.list-mask
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 40
  backdrop-filter blur(10px)
  opacity 1
  background rgba(7, 17, 27, 0.6)
  &.MASK-enter-active, &.MASK-leave-active
    transition all 0.5s
  &.MASK-enter, &.MASK-leave-to
    opacity 0
</style>