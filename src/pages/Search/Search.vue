<template>
  <section class="Towsection ">
        <Header title="搜索" />
        <div class="title-tow">
          <input type="search" placeholder='你在说你妈呢' class="towinput"> <button class="towbutton">提交</button>
        </div>
      </section>
</template>
<script>
export default {
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
  .Towsection
    overflow hidden
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
      top 0px
      left 0px
        .heard-title
          color #fff
          flex 1
    .title-tow
      margin-top 50px
      width 100%
      background #fff
      padding 15px 8px
      // position relative
      .towinput
        width 79%
        border 4px solid #f2f2f2
        font-size 19px
        color #333
        background-color #f2f2f2
        padding 3px
        border-radius 2px
        font-weight bold
        outline none
      .towbutton
        // float: right;
        width 16%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774
  
</style>