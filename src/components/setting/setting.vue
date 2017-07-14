<template>
<div>
  <header id="topbar" class="header" style="top: 0;">
    <div class="header-content-setting">
      <router-link to="personal"></router-link><!---->
      <p class="header-title">设置</p>
    </div>
  </header>
  <h2>设置页面</h2>
</div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    margin: auto;
    .header-content-setting
      width: 100%;
      margin: 0 auto;
      position: relative;
      a
        width 13px
        height 20px
        display inline-block
        position absolute
        top 15px
        left 12px
        background-image url("icon-right.png")
        background-repeat no-repeat
        background-size 13px 20px
      .header-title
        margin: 0 auto;
        line-height: 48px;
        font-size: 20px;
        text-align: center;
        color: #fff;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
  h2
    margin-top 52px
    font-size 16px
    text-align center

</style>
