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
      <!--切站点-->
      <div class="qiezhandian">
        <img src="./image_2/godog.png" alt="godog">
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
                <div class="xyc">下一场开始</div>
                <div class="show_time">
                  <span class="time1">00</span>
                  <span class="time_gap"> : </span>
                  <span class="time2">10</span>
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
        <!--轮播-->
        <div class="banner1">
          <div class="swiper-container" ref="ban1">
            <div class="swiper-wrapper" >
              <div class="swiper-slide"><img src="./image_2/3403dd29475e489f6d647a4f6f256b9d.jpg" alt="aaa"></div>
              <div class="swiper-slide"><img src="./image_2/3bef69f3c9a13b3c7ce347f0d027df9d.jpg" alt="aaa"></div>
              <div class="swiper-slide"><img src="./image_2/3403dd29475e489f6d647a4f6f256b9d.jpg" alt="aaa"></div>
              <div class="swiper-slide"><img src="./image_2/3bef69f3c9a13b3c7ce347f0d027df9d.jpg" alt="aaa"></div>
            </div>
          </div>
        </div>
        <div class="gap"></div>
        <!--currency-->
        <div class="currency">
          <div class="currncy_left">
            <img src="./image_2/1ec9379f83eb421db9a09195c9594e29.jpg" alt="left">
          </div>
          <div class="currncy_right">
            <div>
              <img src="./image_2/6c2998af853e701a2f884b92066058e5.jpg" alt="right1">
            </div>
            <div>
              <img src="./image_2/6c2998af853e701a2f884b92066058e5.jpg" alt="right2">
            </div>
          </div>
        </div>
        <div class="gap"></div>
        <div class="a">
          <img src="./image_2/1ef6fbbba6b6a8d5029afb3a458af72a.jpg" alt="item">
        </div>
        <div class="gap"></div>
        <!--潮品-->
        <div class="fashion">
          <div class="custom">
            <div class="custom_left">
              <img src="./image_2/38688d8d92c7da7aae64eda8b8bb3a94.jpg" alt="cunstom1">
            </div>
            <div class="custom_right">
              <img src="./image_2/0855ecf27a6ca47b32170caab2503ddd.jpg" alt="cunstom2">
            </div>
          </div>
          <div class="pic">
            <img src="./image_2/61023e6ce2a6fb3f198400747eccf4b0.jpg" alt="s">
          </div>
          <div class="disc">
            <p> asdasfrfr 缓解狗子拉稀</p>
            <p>缓解狗子拉稀</p>
          </div>
        </div>
        <div class="gap"></div>
        <div class="currency">
          <div class="currncy_left">
            <img src="./image_2/1ec9379f83eb421db9a09195c9594e29.jpg" alt="left">
          </div>
          <div class="currncy_right">
            <div>
              <img src="./image_2/6c2998af853e701a2f884b92066058e5.jpg" alt="right1">
            </div>
            <div>
              <img src="./image_2/6c2998af853e701a2f884b92066058e5.jpg" alt="right2">
            </div>
          </div>
        </div>
        <div class="fashion">
          <div class="custom">
            <div class="custom_left">
              <img src="./image_2/38688d8d92c7da7aae64eda8b8bb3a94.jpg" alt="cunstom1">
            </div>
            <div class="custom_right">
              <img src="./image_2/0855ecf27a6ca47b32170caab2503ddd.jpg" alt="cunstom2">
            </div>
          </div>
          <div class="pic">
            <img src="./image_2/61023e6ce2a6fb3f198400747eccf4b0.jpg" alt="s">
          </div>
          <div class="pic">
            <img src="./image_2/61023e6ce2a6fb3f198400747eccf4b0.jpg" alt="s">
          </div>
          <div class="pic">
            <img src="./image_2/61023e6ce2a6fb3f198400747eccf4b0.jpg" alt="s">
          </div>
          <div class="disc">
            <p> asdasfrfr 缓解狗子拉稀</p>
            <p>缓解狗子拉稀</p>
          </div>
        </div>
        <div class="currency">
          <div class="currncy_left">
            <img src="./image_2/1ec9379f83eb421db9a09195c9594e29.jpg" alt="left">
          </div>
          <div class="currncy_right">
            <div>
              <img src="./image_2/6c2998af853e701a2f884b92066058e5.jpg" alt="right1">
            </div>
            <div>
              <img src="./image_2/6c2998af853e701a2f884b92066058e5.jpg" alt="right2">
            </div>
          </div>
        </div>
        <div class="footer_bar">
          <div class="footer_top">
            <p>触屏版</p>
            <p>触屏版</p>
            <p>触屏版</p>
            <p>触屏版</p>
          </div>
          <div class="footer_bottom">
            <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
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
      /*banner*/
      new Swiper(this.$refs.ban, {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
      /*banner1*/
      new Swiper(this.$refs.ban1, {
        slidesPerView: 3.5,
        spaceBetween:1,
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
      height 2900px
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
      .qiezhandian
        position fixed
        right 0
        top 500px
        width: 41px
        height: 46px
        z-index 100
        img
          height: 100%
          @keyframes mydog
            0%  left 0px
          50%  left -41px
          animation:mydog 1s steps(1) infinite

      /*滑动区*/
      .index_move
        padding-top 88px
        width 100%
        overflow hidden
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
          .surprise_box
            padding-top 10px
            width 100%
            height 19.2px
            display flex
            .surprise_left
              flex 6
              height 19.2px
              img
                float left
                display block
                height 100%
                margin-left 10px
              .get_time
                width 40%
                float right
                .xyc
                  margin-top 3px
                  font-size 16px
                  float left
                .show_time
                  .time1,.time2
                    display inline-block
                    border 1px solid #ddd
                    width: 19px
                    height: 19px
                  span
                    float right

            .surprise_right
              flex 1
              .surprise_more
                width 100%
                transform translateY(-5px)
                img
                  display block
                  height 30px



        .banner1
          width 100%
          height 130px
          .swiper-container
            width 100%
            height 100%
            .swiper-slide
              text-align center
              font-size 18px
              background #fff
              img
                width: 100%

        .currency
          width: 100%
          height: 250px
          display flex
          .currncy_left
            flex 1
            width: 50%
            height: 100%
            background deeppink
            img
              display block
              width: 100%
              height: 100%
          .currncy_right
            flex 1
            width: 50%
            height: 100%
            div
              width: 100%
              height: 50%
              img
                display block
                width: 100%
                height: 100%
        .gap
          width 100%
          height 10px
          /*background #f3f4f5*/
          background: gold;
        .a
          width: 100%
          height: 160px
          img
            display: block
            width: 100%
            height: 100%

        .fashion
          width: 100%
          .custom
            width: 100%
            height: 72px
            display flex
            background: #fff;
            .custom_left
              width: 50%
              height 100%
              img
                display block
                float left
                height: 100%
            .custom_right
              width: 50%
              height 100%
              img
                display block
                float right
                height 100%

          .pic
            width: 100%
            height: 211px
            img
              display block
              width: 100%


          .disc
            width: 100%
            height: 56px
            p
              padding 6px
              text-align center



        .footer_bar
          width: 100%
          height: 86px
          .footer_top
            width: 100%
            height: 44px
            display flex
            p
              text-align center
              line-height 44px
              flex 1
          .footer_bottom
            width: 100%
            height: 42px
            p
              font-size 12px
              text-align center
              line-height 20px



</style>
