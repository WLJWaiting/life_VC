<template>
  <div class="header">
    <!--背景图片-->
    <div class="header-wrapper">
      <div class="header-bg"></div>
      <router-link to="/allproducts">
        <span class="header-icon"></span>
      </router-link>
    </div>
    <!--导航-->
    <div class="tab-top-wrapper">
      <div class="tab-top">
        <div class="tab-top-item">
          <router-link to="/home">首页</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/new">新品</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/channel/2001">家务</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/channel/2101">下厨</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/channel/2201">家具服</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/channel/2301">生活</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/channel/2001">软装</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/channel/2301">床品</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/channel/2201">工作和旅行</router-link>
        </div>
        <div class="tab-top-item">
          <router-link to="/know">了解LifeVc</router-link>
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
    width 100%
    position fixed
    z-index 1
    .header-wrapper
      position relative
      width 100%
      height 48px
      background #88C13E
      .header-bg
        height 48px
        background-image url("./header-bg.png")
        background-size 50%
        background-position 50%
        background-repeat no-repeat
      .header-icon
        position absolute
        top 0
        right 0
        display inline-block
        width 43px
        height 43px
        background-image url("./header-icon.png")
        background-size 50%
        background-position 50%
        background-repeat no-repeat
    .tab-top-wrapper
      overflow-y hidden
      overflow-x:visible
      &::webkit-scrollbar
        width 0
      .tab-top
        max-width 800px
        width 800px
        height 50px
        box-sizing: border-box
        background #fff
        overflow hidden
        .tab-top-item
          flex 1
          width 80px
          line-height 48px
          text-align center
          float: left
          font-size 13px
          a
            display inline-block
            width 100%
            height 100%
          .active
            width 100%
            height 100%
            border-bottom: 2px solid #80b532;
            color #80b532

</style>
