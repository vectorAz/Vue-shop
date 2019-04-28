<template>
  <ul class="shoplist" v-if="shops.length">
    <li v-for="(item, index) in shops" :key="index" @click="$router.push('/Shops')">
      <div class="shopleft">
        <img :src="'https://fuss10.elemecdn.com'+item.image_path" alt="1">
      </div>
      <div class="shopright">
        <div class="inner-Top">
          <h4>{{item.name}}</h4>
          <ul class="shop-icon">
            <li v-for="(item, index) in item.supports" :key="item._id">{{item.icon_name}}</li>
          </ul>
        </div>
        <div class="inner-center">
          <Star :score="item.rating" :size="24"/>
          <span class="Price">{{item.rating}}</span>
          <span class="solds">月售{{item.recent_order_num}}</span>
          <div class="center-right">
            <div class="left-span">{{item.delivery_mode.text}}}</div>
            <div class="right-span">准时到达</div>
          </div>
        </div>
        <div class="inner-bottom">
          <span>{{item.float_minimum_order_amount}}起送&nbsp;/&nbsp;配送费{{item.float_delivery_fee}}元</span>
        </div>
      </div>
    </li>
  </ul>
  <ul v-else>
    <li>
      <img src="./shop_back.svg" alt="1">
    </li>
    <li>
      <img src="./shop_back.svg" alt="1">
    </li>
    <li>
      <img src="./shop_back.svg" alt="1">
    </li>
    <li>
      <img src="./shop_back.svg" alt="1">
    </li>
  </ul>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(
      {
         shops: state => state.msite.shops,
      }
    )
}
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stulus/mixins.styl'
.shoplist
  background #ffffff
  padding 15px 8px
  li
    bottom-border-1px(#eee)
    clearFix()
    display flex
    margin-bottom 5px
    .shopleft
      width 23%
      display inline-block
      img
        width 100%
    .shopright
      float right
      width 77%
      height 70px
      .inner-Top
        clearFix()
        width 100%
        line-height height
        h4
          float left
          font-weight 700
          &::before
            content '品牌'
            display inline-block
            font-size 11px
            line-height 11px
            color #333
            background-color #ffd930
            padding 2px 2px
            border-radius 2px
            margin-right 5px
        .shop-icon
          float right
          &>li
            float left
            border 1px solid #f1f1f1
            color #999
            font-size 10px
            margin 2px
      .inner-center
        clearFix()
        margin 10px 0px 10px 0px
        .star-list
          display inline-block
          float left
          .stars
            width 10px
            height 10px
            float left
            background-size 10px 10px
            &.onstars
              bg_image(star_on)
            &.halfstars
              bg_image(star_half)
            &.offstars
              bg_image(star_off)
        &>span
          float left
          font-size 10px
          margin-left 10px
        &>.solds
          color gray
        &>.Price
          color #ff6000
        .center-right
          display inline-block
          float right
          .left-span
            float left
            background-color #02a774
            color #fff
            font-size 10px
            padding 1px
            border-radius 2px
            border 1px solid #02a774
          .right-span
            float left
            color #02a774
            border 1px solid #02a774
            font-size 10px
            padding 1px
            border-radius 2px
            margin-left 4px
      .inner-bottom
        span
          color #666
          font-size 13px
</style>