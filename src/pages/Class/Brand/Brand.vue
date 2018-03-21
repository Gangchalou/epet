<template>
  <div class="brand">
    <div class="brand_box">
      <div class="box_header">
        <span>—— 推荐品牌 ——</span>
      </div>
      <div class="box_container">
        <ul>
          <li>
            <a href="javascript:;">
              <div>
                <img src="../images/87feaa80f9fbed84c37a7b07da6324a1.jpg" alt="pic">
              </div>
            </a>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <a href="javascript:;">
              <div>
                <img src="../images/87feaa80f9fbed84c37a7b07da6324a1.jpg" alt="pic">
              </div>
            </a>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <a href="javascript:;">
              <div>
                <img src="../images/87feaa80f9fbed84c37a7b07da6324a1.jpg" alt="pic">
              </div>
            </a>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <a href="javascript:;">
              <div>
                <img src="../images/87feaa80f9fbed84c37a7b07da6324a1.jpg" alt="pic">
              </div>
            </a>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <a href="javascript:;">
              <div>
                <img src="../images/87feaa80f9fbed84c37a7b07da6324a1.jpg" alt="pic">
              </div>
            </a>
            <p>冠能</p>
            <p>美国</p>
          </li>
          <li>
            <a href="javascript:;">
              <div>
                <img src="../images/87feaa80f9fbed84c37a7b07da6324a1.jpg" alt="pic">
              </div>
            </a>
            <p>冠能</p>
            <p>美国</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//  import Bscroll from 'better-scroll'

  export default {
    mounted() {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand
    width: 100%
    padding-top 40px
    .brand_box
      width: 100%
      height 300px
      .box_header
        padding-top 20px
        width: 100%
        height: 19px
        text-align center
        span
          text-align center
          font-size 12px
          color #999


      .box_container
        width 100%
        background darkgray
        ul
          margin 0 auto
          width: 365px
          li
            float left
            width: 33.33%
            height 107px
            padding-bottom 10px
            a
              padding-top 10px

              margin 0 auto
              width: 80%
              border 1px solid #e2e2e2
              display block
              div
                margin 0 auto
                width: 80%
                height 42px
                img
                  width: 100%

            p
              padding-top 5px
              text-align center
              height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;


</style>
