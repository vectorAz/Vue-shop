<template>
<div class="cartcontrol" >
  <transition name="REM-button">
  <div class="iconfont icon-remove_circle_outline" @click.stop="upShop(false)"  v-show="food.count"></div>
  </transition>
  <div class="cart-count"  v-show="food.count">{{food.count}}</div>
  <div class="iconfont icon-add_circle"  @click.stop="upShop(true)"></div>
  
</div>
</template>
<script>
export default {
 props:{
   food:Object
 },
 methods:{
   upShop(isadd){
      console.log(11111);
     this.$store.dispatch('updateShop',{food:this.food,isadd})
     //给每个添加的商品属性上添加一个count
   }
 } 
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stulus/mixins.styl'
  .cartcontrol
    font-size: 0

    .REM-button-leave-active
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.REM-button-enter-active, &.REM-button-leave-active
        transition transform .3s
      &.REM-button-enter, &.REM-button-leave-to
        transform translateX(20px) rotateZ(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>