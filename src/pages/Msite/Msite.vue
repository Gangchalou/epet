<template>
  <div class="home">
    <!--广告-->
    <div class="ad" >
      <div class="ad_wrap"  @click="Hide">
      <span class="closebtn"  >
        <img src="./image_2/closebtn_03.png" alt="关闭">
      </span>
        <div class="appdowimg">
          <a href="https://weibo.com/2461334074/profile?topnav=1&wvr=6">
            <img src="./image_2/c63b6e6cf483cbb61196f658920a9d6e.jpg" alt="ad_img">
          </a>
        </div>
      </div>
    </div>

    <!--内容区大盒子-->
    <div class="index" >
      <!--头部-->
      <div class="index_header">
        <!--搜索栏-->
        <div class="dog_input">
          <div class="dog_input_wrap">
            <div class="dog_position">
              <span>狗狗</span>|<span>北京</span>
              <span class="city_pull"></span>
            </div>
            <div class="dog_good_search">
              <input type="text" placeholder="搜索商品和品牌">
            </div>
            <div class="talk">
              <img src="./image_2/mydope.png" alt="对话">
            </div>
          </div>
        </div>
        <!--导航条-->
        <div class="swiper-container" ref="nav">
          <div class="swiper-wrapper" >
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
          </div>
        </div>
      </div>

      <!--滚动内容区-->
      <div class="index_move">
        <!--轮播-->
        <div class="banner">
          <div class="swiper-container" ref="ban">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="./image_2/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="pic"></div>
              <div class="swiper-slide"><img src="./image_2/d945d3f1b34e0081cf8c9eb34def9096.jpg" alt="pic"></div>
              <div class="swiper-slide"><img src="./image_2/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="pic"></div>
              <div class="swiper-slide"><img src="./image_2/b898562338c7f04ac9b2fa3e5aec8b4c.jpg" alt="pic"></div>
              <div class="swiper-slide"><img src="./image_2/94d4681e2ab878c340d441a5c1c7b98a.jpg" alt="pic"></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>

          </div>
        </div>
        <!--菜单-->
        <div class="menu">
            <ul>
              <li><img src="./image_2/55231bc567328e7c57cde19809769d99.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
              <li><img src="./image_2/4e820b334820dbb62178bd367cdd7ba6.jpg" alt="菜单图标"></li>
            </ul>
        </div>
        <!--新人专享-->
        <div class="new_enjoy">
          <img src="./image_2/60c354a5d94be9fd114523ee77259c73.gif" alt="enjoy">
        </div>
        <!--每日疯抢-->
        <div class="surprise">
          <div class="surprise_box">
            <div class="surprise_left">
              <img src="./image_2/new_index_icon_suprice.png" alt="surprise">
              <div class="get_time">
                <p>下一场开始</p>
                <div>
                  <span class="time1"></span>
                  <span class="time_gap"></span>
                  <span class="time2"></span>
                </div>
              </div>
            </div>
            <div class="surprise_right">
              <div class="surprise_more">
                <img src="./image_2/80acfffe2d91b341fd2c8de903b3eace.png" alt="more">
              </div>
            </div>
          </div>
        </div>









      </div>
    </div>


  </div>


</template>

<script>
  import Swiper from 'swiper'


  export default {

    data() {
      return{

      }


    },
    mounted(){
      new Swiper(this.$refs.nav, {
        slidesPerView: 4,
        spaceBetween:5,
      });
      new Swiper(this.$refs.ban, {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    },



    methods: {
        Hide() {
          this.$el.querySelector(".ad").style.display="none"
          this.$el.querySelector(".index").style.padding=0
        },
      },


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">


  @import './css/swiper.css'

  .swiper-pagination-bullet-active
    width 16px
    border-radius 8px
    background: #fff;

  .home
    width: 100%
    .ad
      position fixed
      width 100%
      height 55px
      z-index 100
      .ad_wrap
        position relative
        width 100%
        height 55px
        .closebtn
          position absolute
          left 5px
          top 50%
          transform translateY(-50%)
          display block
          width 18.75px
          height 18.75px
          img
            display block
            width 18.75px
            height 18.75px
        .appdowimg
          width 100%
          height 55px
          >a
            display block
            width 100%
            height 55px
            img
              width 100%

    .index
      position relative
      width 100%
      padding-top 55px
      .index_header
        position fixed
        width 100%
        height 87px
        background: #fff;
        box-shadow: 0 1px 3px #888888;
        z-index 5
        .dog_input
          position absolute
          width: 100%
          height: 51px
          .dog_input_wrap
            width 95%
            height 25px
            margin-top 13px
            display flex
            .dog_position
              margin-left 10px
              position relative
              flex 2
              font-size 16px
              .city_pull
                position: absolute;
                top: 8px;
                right -5px
                border-width: 4px;
                border-style: solid solid dotted;
                border-color: #898989 transparent transparent;
            .dog_good_search
              margin-left 10px
              flex 4
              input
                background: #e9e9e9;
                border-radius: 4px;
                text-indent: 10px;
                font-size: 18px;
                outline: 0;
            .talk
              flex 1
              position relative
              width: 35px
              height: 25px
              >img
                position absolute
                right 0px
                display block
                width: 25px
                height: 25px



        .swiper-container
          position absolute
          top 51px
          width 100%
          height 36px
          .swiper-wrapper
            width: 100%
            height: 36px
            .swiper-slide
              text-align center
              line-height 36px
              /*font-size 18px*/
              background #fff




      /*内容区*/
      .index_move
        padding-top 88px
        width 100%
        height 1000px
        overflow hidden
        background: darkgray;
        .banner
          width 100%
          height 160px
          .swiper-container
            width 100%
            height 100%
            .swiper-slide
              text-align center
              font-size 18px
              background #fff
              img
                width: 100%


        .menu
          width: 100%
          height: 180px
          ul
            width: 100%
            height: 180px
            li
              float left
              width: 20%
              height: 90px
              img
                width: 100%


        .new_enjoy
          width: 100%
          height: 120px
          img
            width: 100%


        .surprise
          width: 100%
          height: 39.2px
          background: red;
          .surprise_box
            margin 10px auto
            width 100%
            height 19.2px
            display flex
            .surprise_left
              flex 6
              height 19.2px
              background darkcyan
            .surprise_right
              flex 1
              height 19.2px
              background saddlebrown

</style>
