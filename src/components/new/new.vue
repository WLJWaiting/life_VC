<template>
  <div class="new">
    <life-header></life-header>

    <div class="patch_patch"></div>

    <div class="household-content">

      <div class="household-content-head">最近一周新品</div>

      <div class="household-content-wrap">
        <div class="household-content-wrap-img">
          <img src="./new_nts_ico_01.jpg">
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
          <img src="./new_nts_ico_01.jpg">
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
          <img src="./new_nts_ico_01.jpg">
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
          <img src="./new_nts_ico_01.jpg">
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
  import header from '../header/header.vue'
  export default {
    components: {
      'life-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.new
  background #f2f2f2
  .patch_patch
    height 105px
  .household-content
    width: 96%;
    margin 0 auto
    .household-content-head
      font-size 19PX
      line-height 38PX
      text-align center
      height 38PX
      margin-bottom -22.8PX
    .household-content-wrap
      border: 1px solid #ddd;
      margin: 24px auto 0;
      .household-content-wrap-img
        width 100%
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
          line-height 33px
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
            line-height: 23px;
            margin-top: 2.4px;
            span
              font-size 13.5px
          .household-content-wrap-text-bottom-right
            float: right;
            text-align: right;
            color: #999;
            line-height: 20px;
            span
              font-size: 13.5px;
</style>
