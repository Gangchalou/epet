<template>
  <!--<div class="class_guide" >
    <div class="class">
      <a>分类</a>
    </div>
    <div class="brand">
      <p>品牌</p>
      <img src="image/search-ico.png" alt="search">
    </div>
  </div>-->
  <div>
    <!--<div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>分类</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>品牌</router-link>
      </div>
    </div>-->
  </div>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.class_guide
    position fixed
    z-index 10
    width: 100%
    height: 40px
    display flex
    background: #fff;
    box-shadow: 0 1px 1px #888888;
    .class_left
      flex 1
      width: 50%

      height: 100%
      p
        float right
        line-height 40px
        padding-right 10px
    .brand
      flex 1
      width: 50%
      height: 100%
      a
        display block
        float left
        line-height 40px
        padding-left 10px
      img
        float right
        padding 13px 15px
        display block
        width: 14px
        height: 14px*/

</style>
