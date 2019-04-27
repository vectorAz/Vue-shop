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
  mounted(){
    this.$store.dispatch('reqAddress')
    this.$store.dispatch('getUSER')
  }


};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped></style>
