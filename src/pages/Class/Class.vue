<template>
  <div class="categorybox">
    <div class="header">
      <div class="header_left">
        <a href="javascript:;">
          <router-link to="/class/classer" replace>分类</router-link>
        </a>
      </div>

      <div class="header_right">
        <a href="javascript:;">
          <router-link to="/brand/brand" replace>品牌</router-link>
        </a>
        <img src="./images/search-ico.png" alt="search">
      </div>


    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .categorybox
    width: 100%
    height: 100%
    background: #fff;
    .header
      position fixed
      z-index 10
      width: 100%
      height: 40px
      display flex
      background: #fff;
      box-shadow: 0 1px 1px #888888;
      .header_left
        flex 1
        width: 50%
        height: 100%
        a
          display block
          float right
          line-height 40px
          padding 0 10px
          font-size 13px
          color #333
          &.router-link-active
            color #DC143C
            border-bottom 2px solid red

      .header_right
        flex 1
        width: 50%
        height: 100%
        a
          padding 0 10px
          display block
          float left
          line-height 40px
          font-size 13px
          color #333
          &.router-link-active
            color #DC143C
            border-bottom 2px solid red

        img
          float right
          padding 13px 15px
          display block
          width: 14px
          height: 14px










</style>
