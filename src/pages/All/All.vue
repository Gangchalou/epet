<template>
  <div class="all">
    <div class="title">
      <span class="back" @click="goto('/brand/brand')" :class="{on:$route.path === '/brand/brand'}"></span>
      <p>全部商品</p>
      <span class="menu" @click="menuShow" ></span>
    </div>
    <TopMenu v-show="isShow"/>
    <div class="all_brand">
      <!--导航字母表-->
      <div class="brand_menu">
        <div class="menu_wrap">
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>
          <span>C</span>

        </div>
      </div>
      <!--国家品牌区-->
      <div class="brand_wrap">
        <div class="item_box">
          <h2>A</h2>
          <div class="item">
            <div href="javascript:;">
              <div class="inner_box">
                <div class="img">
                  <img src="./image/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="pic">
                </div>
                <div class="brand_pos">
                  <p>艾尔</p>
                  <p>中国</p>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="inner_box">
                <div class="img">
                  <img src="./image/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="pic">
                </div>
                <div class="brand_pos">
                  <p>艾尔</p>
                  <p>中国</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="item_box">
          <h2>B</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="inner_box">
                <div class="img">
                  <img src="./image/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="pic">
                </div>
                <div class="brand_pos">
                  <p>百特安琪儿</p>
                  <p>中国</p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="inner_box">
                <div class="img">
                  <img src="./image/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="pic">
                </div>
                <div class="brand_pos">
                  <p>Dior</p>
                  <p>中国</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="item_box">
          <h2>B</h2>
          <div class="item">
            <a href="javascript:;">
              <div class="inner_box">
                <div class="img">
                  <img src="./image/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="pic">
                </div>
                <div class="brand_pos">
                  <p>百特安琪儿</p>
                  <p>中国</p>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="javascript:;">
              <div class="inner_box">
                <div class="img">
                  <img src="./image/16b0a6dd2bc28ee4809ac8945bc8f282.jpg" alt="pic">
                </div>
                <div class="brand_pos">
                  <p>Dior</p>
                  <p>中国</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopMenu from '../../components/TopMenu/TopMenu.vue'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        isShow:false
      }
    },
    computed:{
      ...mapState(['']),

      /*currentIndex () { // findIndex(): 返回值是第个返回true所对应的index
        const {scrollY, tops} = this
        // scrollY要>=当前的top && 小于下一个top
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }*/
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
      },

      check(){
        this.addClass(current)
        console.log(111);
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

    .all_brand
      width: 100%
      height: 200px
      .brand_menu
        position fixed
        top  0
        right 3px
        width: 13px
        height: 100%
        display table
        .menu_wrap
          display: table-cell;
          height: 100%;
          vertical-align: middle
          span
            display: block;
            height: 12px;
            margin-top: 2px;
            font-size: 12px;
            &.current
              color: #fe3e3e;
              font-weight: 700;




    .brand_wrap
      width: 100%
      background darkgray
      h2
        text-indent 15px
        height 24px
        line-height 24px
        color: #999;
        font-weight: 400;
        background #fff
      .item
        background gold
        width: 100%
        height: 73px




</style>
