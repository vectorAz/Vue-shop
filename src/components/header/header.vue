<template>
  <header>
    <slot name="left"></slot>
    <div class="heard-title">
      <span>{{title}}</span>
    </div>
    <slot name="right"></slot>
  </header>
</template>
<script>
export default {
  props:{
    title:String
  }

};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
    header
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
      top 0
      left 0
      font-size 21px
      .iconfont
        font-size 25px
        flex 1
        margin-left 20px
      .heard-title
        color #fff
        flex 1
        text-align center
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