<template>
  <div class="shop-info">
    <div class="info-content">
      <section class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="delivery">
          <div>
            <span class="delivery-icon">硅谷专送</span>
            <span>由商家配送提供配送，约30分钟送达，距离100m</span>
          </div>
          <div class="delivery-money">配送费￥3</div>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="activity">
          <div
            class="activity-item activity-green"
            v-for="(item, index) in info.supports"
            :key="index"
            :class="color[item.type]"
          >
            <span class="content-tag">
              <span class="mini-tag">{{item.name}}</span>
            </span>
            <span class="activity-content">{{item.content}}</span>
          </div>
        </div>
      </section>
      <div class="split"></div>

      <section class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
              >
            </li>
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
              >
            </li>
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
              >
            </li>
            <li class="pic-item">
              <img
                width="120"
                height="90"
                src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"
              >
            </li>
          </ul>
        </div>
      </section>
      <div class="split"></div>

      <section class="section">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li>
            <span class="bold">品类</span>
            <span>{{info.category}}</span>
          </li>
          <li>
            <span class="bold">商家电话</span>
            <span>{{info.phone}}</span>
          </li>
          <li>
            <span class="bold">地址</span>
            <span>{{info.address}}</span>
          </li>
          <li>
            <span class="bold">营业时间</span>
            <span>09:35-21:00</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
export default {
  data() {
    return {
      color: ["activity-green", "activity-red", "activity-orange"]
    };
  },

  computed: {
    ...mapState({
      info: state => state.shop.info
    })
  },

  methods: {
    roll() {
      new BScroll(".shop-info", {
        scrollY: true,
        click: true
      });
    }
  },
  watch: {
    info() {
      this.roll();
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stulus/mixins.styl'
.shop-info
  position absolute
  top 230px
  bottom 0
  left 0
  width 100%
  background #fff
  overflow hidden
  .split
    width 100%
    height 16px
    border-top 1px solid rgba(7, 17, 27, 0.1)
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    background #f3f5f7
  .section
    padding 16px 14px 14px
    font-size 16px
    background-color #fff
    color #666
    border-bottom 1px solid #eee
    position relative
    .section-title
      color #000
      font-weight 700
      line-height 16px
      > .iconfont
        float right
        color #ccc
    .delivery
      margin-top 16px
      font-size 13px
      line-height 18px
      .delivery-icon
        width 55px
        font-size 11px
        margin-right 10px
        display inline-block
        text-align center
        color #fff
        background-color #0097ff
        padding 1px 0
        border-radius 4px
      .delivery-money
        margin-top 5px
    .activity
      margin-top 16px
      .activity-item
        margin-bottom 12px
        display flex
        font-size 13px
        align-items center
        &.activity-green
          .content-tag
            background-color rgb(112, 188, 70)
        &.activity-red
          .content-tag
            background-color rgb(240, 115, 115)
        &.activity-orange
          .content-tag
            background-color rgb(241, 136, 79)
        .content-tag
          display inline-block
          border-radius 2px
          width 36px
          height 18px
          margin-right 10px
          color #fff
          font-style normal
          position relative
          .mini-tag
            position absolute
            left 0
            top 0
            right -100%
            bottom -100%
            font-size 24px
            transform scale(0.5)
            transform-origin 0 0
            display flex
            align-items center
            justify-content center
    .pic-wrapper
      width 100%
      overflow hidden
      white-space nowrap
      margin-top 16px
      .pic-list
        font-size 0
        .pic-item
          display inline-block
          margin-right 6px
          width 120px
          height 90px
          &:last-child
            margin 0
    .detail
      margin-bottom -16px
      > li
        display flex
        justify-content space-between
        align-items center
        margin-right -10px
        padding 16px 12px 16px 0
        line-height 16px
        bottom-border-1px(#ddd)
        font-size 13px
        > .bold
          font-weight 700
          color #333
        &:last-child
          border-none()
</style>
