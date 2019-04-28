<template>
  <div>
    <router-view/>
    <FooterGuide/>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide
  },
 async mounted(){
    this.$store.dispatch('reqAddress') //去vuex的所有模块中查找对应的action
    this.$store.dispatch('getUSER')
  
  }


};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped></style>
