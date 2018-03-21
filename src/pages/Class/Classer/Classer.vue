<template>
   <div class="container">
     <div class="container_left" ref="wrap_ref1">
       <ul>
         <li>杨键杨键</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>狗狗主梁</li>
         <li>杨键杨键</li>
       </ul>
     </div>

     <div class="container_right" ref="wrap_ref2">
       <div class="list_name">
         <div class="name_all">
           <div class="name_all_innerbox">
             狗狗主粮
             <img src="../images/cate_right_img.png" alt="more">
           </div>
         </div>

         <div class="list_name_container">
           <ul>
             <li>
               <img src="../images/f38b8a4245c34c33061d04ad1e8009dd.jpg" alt="pic">
               <p>进口狗粮</p>
             </li>
             <li>
               <img src="../images/f38b8a4245c34c33061d04ad1e8009dd.jpg" alt="pic">
               <p>进口狗粮</p>
             </li>
             <li>
               <img src="../images/f38b8a4245c34c33061d04ad1e8009dd.jpg" alt="pic">
               <p>进口狗粮</p>
             </li>
             <li>
               <img src="../images/f38b8a4245c34c33061d04ad1e8009dd.jpg" alt="pic">
               <p>进口狗粮</p>
             </li>


           </ul>

         </div>
       </div>

       <div class="list_brand">
         <div class="brand_innerbox">
           <div class="brand_name">热门品牌</div>
           <div class="brand_cotainer">
             <ul>
               <li>
                 <a href="javascript:;">
                   <div class="brand_img">
                   <img src="../images/ec41f0dc6478fd51ffe733c6cba49592.jpg" alt="img">
                   </div>
                   <p>纽萃宝NUTRIPE</p>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <div class="brand_img">
                   <img src="../images/ec41f0dc6478fd51ffe733c6cba49592.jpg" alt="img">
                   </div>
                   <p>纽萃宝NUTRIPE</p>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <div class="brand_img">
                   <img src="../images/ec41f0dc6478fd51ffe733c6cba49592.jpg" alt="img">
                   </div>
                   <p>纽萃宝NUTRIPE</p>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <div class="brand_img">
                   <img src="../images/ec41f0dc6478fd51ffe733c6cba49592.jpg" alt="img">
                   </div>
                   <p>纽萃宝NUTRIPE</p>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <div class="brand_img">
                   <img src="../images/ec41f0dc6478fd51ffe733c6cba49592.jpg" alt="img">
                   </div>
                   <p>纽萃宝NUTRIPE</p>
                 </a>
               </li>
               <li>
                 <a href="javascript:;">
                   <div class="brand_img">
                   <img src="../images/ec41f0dc6478fd51ffe733c6cba49592.jpg" alt="img">
                   </div>
                   <p>纽萃宝NUTRIPE</p>
                 </a>
               </li>

             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
 import Bscroll from 'better-scroll'

  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrap_ref1, {})
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .container
    background #f3f4f5
    width: 100%
    height 100%
    display flex
    .container_left
      width: 20%
      height: 100%
      ul
        background: #fff
        width: 93%
        li
          box-sizing border-box
          width: 100%
          font-size 13px
          height: 50px
          line-height 50px
          text-align center
          border-bottom  1px solid #f3f4f5;

    .container_right
      padding-top 5px
      width: 80%
      height: 100%
      overflow scroll
      .list_name
        width: 100%
        height 308px
        background #ffffff
        .name_all
          width: 100%
          height: 29px
          margin-left 10px
          .name_all_innerbox
            padding-top 17px
            width: 100%
            height: 12px
            color #999
            font-size 12px
            img
              display block
              height 10px
              float right
              padding-right 15px
        .list_name_container
          margin 10px auto
          width: 97%
          height: 250px
          ul
            width: 100%
            li
              width: 33%
              float left
              height: 116px
              img
                width: 100%
              p
                height 20px
                line-height 20px
                width: 100%
                text-align center





      .list_brand
        width: 100%
        height: 308px
        .brand_innerbox
          width: 96%
          margin 0 auto
          .brand_name
            width: 100%
            height 30px
            line-height 20px
            display table-cell
            vertical-align bottom
            color #999

          .brand_cotainer
            ul
              width: 100%
              li
                padding-top 5px
                width: 50%
                float left
                a
                  display block
                  width: 100%
                  height: 80px
                  .brand_img
                    box-sizing border-box
                    padding-top  5px
                    margin 0 auto
                    width: 100%
                    height: 55px
                    border 1px solid #f5f5f5
                    img
                      display block
                      margin 0 auto
                      width: 90px
                      height: 45px
                  p
                    text-align center
                    height: 25px
                    line-height 25px
</style>
