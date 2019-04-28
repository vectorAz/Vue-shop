<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul ref="leftUL">
          <li
            class="menu-item"
            v-for="(item, index) in goods"
            :key="index"
            :class="{current:index===currentIndex}"
            @click="Gomenu(index)"
          >
            <span class="text bottom-border-1px">
              <img class="icon" :src="item.icon" v-if="item.icon">
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="RightUL">
          <li class="food-list-hook" v-for="(item, index) in goods" :key="index">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(item, index) in item.foods"
                :key="index"
                @click="FoodISshow(item)"
              >
                <div class="icon">
                  <img width="57" height="57" :src="item.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{item.name}}</h2>
                  <p class="desc">{{item.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{item.sellCount}}份</span>
                    <span>好评率{{item.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{item.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="item"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCard/>
    </div>
    <Food ref="Foodref" :food="food"/>
    <!-- 食品详情组件 -->
  </div>
</template>
<script>
import ShopCard from "../../../components/ShopCard/ShopCard";
import { mapState } from "vuex";
import BScroll from "better-scroll";
import Food from "../../../components/Foods/foods";
export default {
  components: {
    Food,
    ShopCard
  },
  data() {
    return {
      rightY: 0, //右侧滑动的距离
      rightLi: [], //右侧所有li的位置
      food: {}
    };
  },
  mounted() {
    //解决切换路由后该路由销毁 滑屏失效的问题
    //在重新生成路由时判断数据是否存在
    //若已存在则重新调用BScroll的函数
    //也可使用keep-alive缓存路由组件
    if (this.goods.length > 0) {
      this.RollBS();
      this.RigthTO();
    }
  },

  computed: {
    ...mapState({
      goods: state => state.shop.goods
    }),
    currentIndex() {
      const { rightY, rightLi } = this;
      const CLIy = rightLi.findIndex((item, index) => {
        return item <= rightY && rightLi[index + 1] > rightY;
      });
      if (CLIy !== this.index && this.LeftScroll) {
        this.index = CLIy;
        this.LeftScroll.scrollToElement(this.$refs.leftUL.children[CLIy], 300);
      }
      return CLIy;
    }
  },

  methods: {
    RollBS() {
      this.RightScroll = new BScroll(".foods-wrapper", {
        scrollY: true,
        click: true
      });
      this.LeftScroll = new BScroll(".menu-wrapper", {
        scrollY: true,
        click: true
      });
      this.RightScroll.on("scrollEnd", ({ x, y }) => {
        // console.log("B", x, y);
        this.rightY = Math.abs(y);
      });
      this.RightScroll.on("scroll", ({ x, y }) => {
        // console.log("A", x, y);
        this.rightY = Math.abs(y);
      });
    },

    RigthTO() {
      const rightLi = [];
      let top = 0;
      rightLi.push(top);
      const li = this.$refs.RightUL.children;
      [].forEach.call(li, item => {
        top += item.clientHeight;
        rightLi.push(top);
      });
      this.rightLi = rightLi;
    },

    Gomenu(index) {
      const top = this.rightLi[index];
      this.rightY = top;
      this.RightScroll.scrollTo(0, -top, 300);
    },
    FoodISshow(food) {
      this.food = food;
      this.$refs.Foodref.FoodISshow();
    }
  },
  watch: {
    goods() {
      this.$nextTick(() => {
        this.RollBS();
        this.RigthTO();
      });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stulus/mixins.styl'
.goods
  display flex
  position absolute
  top 230px
  bottom 46px
  width 100%
  background #fff
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #fff
        color $green
        font-weight 700
        .text
          border-none()
      .icon
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
      .text
        display table-cell
        width 56px
        vertical-align middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size 12px
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>
