<template>
  <div class="Shopcenter">
    <Shopheader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/Shops/goods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Shops/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Shops/info">商家</router-link>
      </div>
    </div>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive>  -->
  </div>
</template>
<script>
import Shopheader from "../../components/Shopheader/Shopheader";
import { getInfo, getGoods, getRatings } from "../../api/index.js";
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from "../../store/mutation-types.js";
export default {
  components: {
    Shopheader,
  },
  async mounted() {
    // const reqGOODS = getGoods();
    // const reqRATINGS = getRatings();
    // const reqINFO = getInfo();
    const result = await Promise.all([getGoods(), getRatings(), getInfo()]);
    const goods = result[0].data;
    const ratings = result[1].data;
    const info = result[2].data;

    console.log(info);
    
    //提交mutation 将数据保存
    this.$store.commit(RECEIVE_GOODS, { goods });
    this.$store.commit(RECEIVE_RATINGS, { ratings });
    this.$store.commit(RECEIVE_INFO, { info });
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stulus/mixins.styl'
.tab
  height 40px
  line-height 40px
  background #fff
  
  bottom-border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    float left
    width 33.33333%
    text-align center
    font-size 14px
    color rgb(77, 85, 93)
    // border  1px solid  rgba(7, 17, 27, 0.1)
    bottom-border-1px(rgba(7, 17, 27, 0.1))

    a
      display block
      position relative
      text-decoration none
      color #7e8c8d
      &.router-link-active
        color #02a774
        &::after
          content ''
          position absolute
          left 50%
          bottom 1px
          width 35px
          height 2px
          transform translateX(-50%)
          background #02a774
</style>