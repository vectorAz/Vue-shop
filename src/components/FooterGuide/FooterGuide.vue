<template>
 <footer>
      <ul class="List">
        <router-link to='/msite' class="button" :class="{on:$route.path==='/msite'}">
          <span><i class="iconfont icon-shouye- "></i></span>
          <span>首页</span>
        </router-link>
        <router-link to='/order' class="button" :class="{on:$route.path==='/order'}">
          <span><i class="iconfont icon-sousuo"></i></span>
          <span>搜索</span>
        </router-link>
        <router-link to='/search' class="button" :class="{on:$route.path==='/search'}">
          <span><i class="iconfont icon-gouwuche"></i></span>
          <span>购物车</span>
        </router-link>
        <router-link to='/profile' class="button" :class="{on:$route.path==='/profile'}">
          <span><i class="iconfont icon-geren"></i></span>
          <span>个人信息</span>
        </router-link>
      </ul>
    </footer>

</template>
<script>
export default {


}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stulus/mixins.styl"
    footer
      top-border-1px(gray)
      background #ffffff
      position fixed
      bottom 0
      left 0
      width 100%
      height 50px
      z-index 100
      .List
        display flex
        width 100%
        height 100%
        .button
          text-align center
          height 100%
          flex 1
          flex-direction column
          align-items center
          margin 10px 5px 0px 5px
          &.on
            color #02a774
          span 
            i 
              display block
</style>
