<template>
  <div class="all">
    <div class="title">
      <span class="back" @click="goto('/brand/brand')" :class="{on:$route.path === '/brand/brand'}"></span>
      <p>全部商品</p>
      <span class="menu" @click="menuShow" ></span>
    </div>
    <TopMenu v-show="isShow"/>
    <div class="container">
      内容
    </div>
  </div>
</template>

<script>
  import TopMenu from '../../components/TopMenu/TopMenu.vue'

  export default {
    data(){
      return{
        isShow:false
      }


    },

    components:{
      TopMenu
    },
    methods:{
      menuShow() {
        this.isShow = !this.isShow

      },
      goto(path) {
        this.$router.replace(path)
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .all
    width: 100%
    .title
      margin 0 auto
      width: 96%
      height: 50px
      border-bottom 1px solid black
      p
        text-align center
        line-height 50px
        font-size 18px
        color #333
      .back
        background url("./img.png") no-repeat
        background-size: 234px 159px;
        height: 18px;
        width: 11px;
        background-position: -201px -10px;
        position: absolute;
        margin-top: 15px;
        left: 10px;
      .menu
        background: url(./img.png) no-repeat;
        background-size: 234px 163px;
        height: 18px;
        width: 17px;
        background-position: -217px -10px;
        position: absolute;
        top: 15px;
        right: 10px;
        outline: 0;

    .container
      padding 0
      width: 100%
      height: 200px



</style>
