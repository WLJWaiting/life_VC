<template>
  <div class="tap">
    <header class="header" style="top: 0px;">
      <div  class="header-content">
        <p class="header-title">家务</p>
        <router-link to="/allproducts">
          <span class="household-ico"></span>
        </router-link>
      </div>
      <div class="household-header-bottom">
        <ul>
          <li><a href="###">新品</a></li>
          <li><a href="###">畅销</a></li>
          <li><a href="###">价格</a></li>
        </ul>
      </div>
    </header>

    <div class="household-content">
      <div class="household-content-wrap">
        <div class="household-content-wrap-img">
          <img src="./household-img.jpg">
        </div>
        <div class="household-content-wrap-text">
          <div class="household-content-wrap-text-top">不伤手强力去污刷</div>
          <div class="household-content-wrap-text-bottom">

            <div class="household-content-wrap-text-bottom-left">
              <span>￥</span>
              <span>7</span>
            </div>
            <div class="household-content-wrap-text-bottom-right">
              <span>评论：</span>
              <span>50244</span>
            </div>
          </div>
        </div>
      </div>
      <div class="household-content-wrap">
        <div class="household-content-wrap-img">
          <img src="./household-img.jpg">
        </div>
        <div class="household-content-wrap-text">
          <div class="household-content-wrap-text-top">不伤手强力去污刷</div>
          <div class="household-content-wrap-text-bottom">
            <div class="household-content-wrap-text-bottom-left">
              <span>￥</span>
              <span>7</span>
            </div>
            <div class="household-content-wrap-text-bottom-right">
              <span>评论：</span>
              <span>50244</span>
            </div>

          </div>
        </div>
      </div>
      <div class="household-content-wrap">
        <div class="household-content-wrap-img">
          <img src="./household-img.jpg">
        </div>
        <div class="household-content-wrap-text">
          <div class="household-content-wrap-text-top">不伤手强力去污刷</div>
          <div class="household-content-wrap-text-bottom">

            <div class="household-content-wrap-text-bottom-left">
              <span>￥</span>
              <span>7</span>
            </div>
            <div class="household-content-wrap-text-bottom-right">
              <span>评论：</span>
              <span>50244</span>
            </div>
          </div>
        </div>
      </div>
      <div class="household-content-wrap">
        <div class="household-content-wrap-img">
          <img src="./household-img.jpg">
        </div>
        <div class="household-content-wrap-text">
          <div class="household-content-wrap-text-top">不伤手强力去污刷</div>
          <div class="household-content-wrap-text-bottom">

            <div class="household-content-wrap-text-bottom-left">
              <span>￥</span>
              <span>7</span>
            </div>
            <div class="household-content-wrap-text-bottom-right">
              <span>评论：</span>
              <span>50244</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    .header-content
      .household-ico
        width 12px
        height 32px
        display inline-block
        background-image url("./household.png")
        background-repeat no-repeat
        font-size 18px
        position absolute
        left  10px
        top 7px
    .household-header-bottom
      ul
        display flex
        padding 4px 2%
        border-bottom 1px solid #f2f2f2
        background-color white
        li
          flex 1
          background-color white
          height 36px
          font-size 13.5px
          color: #666
          a
            display inline-block
            width 100%
            height 17px
            line-height 17px
            margin-top 10px
            text-align center
            border-right: 1px solid #f2f2f2
  .household-content
    margin: 94px auto 48px;
    width: 100%;
    border: 1px solid #ddd;
    background #f2f2f2
    .household-content-wrap
      margin 30px auto 0
      background-color #f2f2f2
      .household-content-wrap-img
        width 96%
        margin 0 auto
        img
          width 100%
      .household-content-wrap-text
        width 100%
        background-color white
        color #333
        padding-bottom 3px
        .household-content-wrap-text-top
          width: 94%
          overflow hidden
          margin 0 auto
          text-align left
          font-size 13.5px
          color: #333
          line-height 30px
          text-overflow ellipsis
          white-space nowrap
          padding-top 6px
        .household-content-wrap-text-bottom
          width 94%
          overflow hidden
          margin 0 auto
          .household-content-wrap-text-bottom-left
            min-width: 68%;
            overflow: hidden;
            float: left;
            line-height: 20px;
            margin-top: 3px;
            span
              font-size 1.35px
          .household-content-wrap-text-bottom-right
            float: right;
            text-align: right;
            color: #999;
            line-height: 30px;
            span
              font-size: 13.5px;
</style>
