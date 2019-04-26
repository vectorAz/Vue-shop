<template>
  <ul class="star-list" :class="'star-'+size">
    <li class="star-item" v-for="(item, index) in starClassArr" :key="index" :class="item"></li>
  </ul>
</template>
<script>
export default {
  props: {
    size: Number,
    score: Number
  },
  computed: {
    starClassArr() {
      const { score } = this;
      const flScore = Math.floor(score);
      const starArr = [];
      for (var i = 0; i < flScore; i++) {
        starArr.push("on");
      }
      if (score*10 - flScore*10 > 5) {
        starArr.push("half");
      }
      while(starArr.length<5){
        starArr.push('off')
      }

      return starArr
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stulus/mixins.styl'
  .star-list // 2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>