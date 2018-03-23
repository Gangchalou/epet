<template>
  <div>
    <div class="menu_box">
      <div class="box_inner">
        <a href="javascript:;">
          <span class="m1" @click="goto('/msite')" :class="{on:$route.path === '/msite'}"></span>
          <p>首页</p>
        </a>
        <a href="javascript:;">
          <span class="m2" @click="goto('/class')" :class="{on:$route.path === '/class'}"></span>
          <p>商品分类</p>
        </a>
        <a href="javascript:;">
          <span class="m3" @click="goto('/shopcart')" :class="{on:$route.path === '/shopcart'}"></span>
          <p>购物车</p>
        </a>
        <a href="javascript:;">
          <span class="m4" @click="goto('/profile')" :class="{on:$route.path === '/profile'}"></span>
          <p>我的E宠</p>
        </a>
      </div>
    </div>
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
  .menu_box
    width 100%
    height 68px
    background: #fff;
    border-bottom 1px solid #d7d7d7
    /*transition 0.5s */
    .box_inner
      width 100%
      height 58px
      a
        display inline-block
        width 25%
        height: 47px
        margin-top 5px
        text-align center
        float left
        p
          color: #666;
          font-size: 14px;
          text-align: center;
          height: 22px
          line-height 22px
        span
          display block
          background: url(./image/img.png) no-repeat
          background-size 234px 163px
          height 25px
          width 25px
          margin 0 auto
          &.m1
            background-position -172px -7px

          &.m2
            background-position -172px -49px

          &.m3
            background-position -172px -90px;

          &.m4
            background-position -172px -133px



</style>
