<template>
  <div class="tap">
    <header class="header" style="top: 0px;">
      <div  class="header-content">
        <p class="header-title">家务</p>
        <router-link to="product">
          <span class="household-ico"></span>
        </router-link>
      </div>
      <div class="household-header-bottom">
        <ul>
          <li>新品</li>
          <li>畅销</li>
          <li>价格</li>
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
        font-size 1.8rem
        position absolute
        left  10px
        top 0.7rem
    .household-header-bottom
      ul
        display flex
        padding .4rem 2%
        border-bottom 1px solid #f2f2f2
        background-color white
        li
          border-right: 1px solid #f2f2f2
          flex 1
          text-align center
          background-color white
          height 3rem
          line-height 3rem
          font-size 1.35rem
          color: #666
  .household-content
    width: 96%;
    border: 1px solid #ddd;
    background-color #f2f2f2
    .household-content-wrap
      margin: 2rem auto 0;
      .household-content-wrap-img
        width 100%
        img
          width 100%
      .household-content-wrap-text
        width 100%
        background-color white
        color #333
        padding-bottom .3rem
        .household-content-wrap-text-top
          width: 94%
          overflow hidden
          margin 0 auto
          text-align left
          font-size 1.35rem
          color: #333
          line-height 2.6rem
          text-overflow ellipsis
          white-space nowrap
          padding-top .5rem
        .household-content-wrap-text-bottom
          width 94%
          overflow hidden
          margin 0 auto
          .household-content-wrap-text-bottom-left
            min-width: 68%;
            overflow: hidden;
            float: left;
            line-height: 1.8rem;
            margin-top: .2rem;
            span
              font-size 1.35rem
          .household-content-wrap-text-bottom-right
            float: right;
            text-align: right;
            color: #999;
            line-height: 2.6rem;
            span
              font-size: 1.35rem;
</style>

