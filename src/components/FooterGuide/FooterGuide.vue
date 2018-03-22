<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" >
      <div class="item_icon">
        <a href="javascript:;" class="bg1" @click="goto('/msite')" :class="{on:$route.path === '/msite'}"></a>
      </div>
    </div>
    <div class="guide_item" >
      <div class="item_icon">
        <a href="javascript:;" class="bg2" @click="goto('/class')" :class="{on:$route.path === '/class' || $route.path === '/class/classer' || $route.path === '/brand/brand' }"></a>
      </div>
    </div>

    <div class="guide_item" >
      <div class="item_icon">
        <a href="javascript:;" class="bg3 " @click="goto('/shopcart')" :class="{on:$route.path === '/shopcart'}"></a>
      </div>
    </div>
    <div class="guide_item" >
      <div class="item_icon">
        <a href="javascript:;" class="bg4 " @click="goto('/profile')" :class="{on:$route.path === '/profile'}"></a>
      </div>
    </div>
  </footer>
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
  /*@import "../../common/stylus/mixins.styl"*/
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      color #999999
      .item_icon
        margin 0 auto
        margin-top 5px
        width 42
        height 40px
        >a
          display block
          width: 42px
          height: 40px
          background url("./images/img.png") no-repeat
          background-size: 234px 163px;
          &.bg1
            background-position -85px 0
            &.on
              background-position 0 0


          &.bg2
            background-position -85px -41px
            &.on
              background-position 0px -41px


          &.bg3
            background-position -85px -81px
            &.on
              background-position 0px -81px


          &.bg4
            background-position -85px -122px
            &.on
              background-position 0px -122px











</style>
