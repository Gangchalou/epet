<template>
  <div class="brand" v-if="brand">
    <div class="brand_box" v-for="(brand,index) in brand" :key="index">
      <div class="box_header">
        <span>—— {{brand.title}} ——</span>
      </div>
      <div class="box_container" >
        <ul>
          <li v-for="(list,index) in brand.list" :key="index">
            <a href="javascript:;">
              <div>
                <img :src="list.logo" alt="pic">
              </div>
            </a>
            <p>{{list.name}}</p>
            <p>{{list.address}}</p>
          </li>
          <!--<li>
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
          </li>-->
        </ul>
      </div>
    </div>
    <!--<div class="brand_box">
      <div class="box_header">
        <span>—— 主梁品牌 ——</span>
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
    </div>-->

    <div class="all">
      <a href="javascript:;" @click="goto('/all')" :class="{on:$route.path === '/all'}">全部</a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      }
    },
    mounted(){
      this.$store.dispatch('getBrand' )
    },
    computed: {
      ...mapState(['brand'])
    }



  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand
    width: 100%
    padding-top 40px
    overflow hidden
    .brand_box
      width: 100%

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
        background #f3f4f5
        ul
          margin 0 auto
          width: 100%
          background #fff
          overflow hidden
          padding-top 10px
          margin-bottom 10px
          li
            float left
            width: 33.33%
            height 107px
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



    .all
      text-align center
      width: 40px;
      height: 40px;
      right 0
      bottom: 65px;
      position: fixed;
      z-index: 10;
      background: rgba(0,0,0,.4);
      line-height: 40px;
      border-radius: 50%;
      a
        color #fff
        font-size 12px
</style>
