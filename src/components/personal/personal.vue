<!--<template>
  <div>
    <header id="topbar" class="header" style="top: 0;">
      <div class="header-content"> &lt;!&ndash;&ndash;&gt;
        <p class="header-title">账户中心</p>
        <router-link to="/setting">
          <label data-v-75c9c97a="" data-v-350514bc=""
                 class="editcart">设置
        </label>
        </router-link>
      </div>
      <router-view></router-view>
    </header>
    <div class="login">
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>

  </div>

</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .editcart
    font-size: 18px;
    color: #fff;
    line-height: 48px;
    margin-right: 2%;
    position: absolute;
    right: 2%;
    top: 0;
    z-index: 9;
.login
  margin-top 148px
  font-size 20px
  text-align center
</style>-->


<template>
  <div class="tap">

    <header class="user-header" style="top: 0px;">
      <div  class="header-content">
        <p class="header-title">账户中心</p>
        <router-link to="setting">
          <div class="edit-cart">设置</div>
        </router-link>
      </div>
    </header>

    <div class="header-copy"></div>

    <div class="login">
      <div class="login-text">
        <span class="login-text-top">您还未登录</span>
        <div class="login-text-bottom">
          <router-link to="/login"><span>登陆</span></router-link>
          <span>丨</span>
          <router-link to="/register"><span>注册</span></router-link>

        </div>
      </div>
    </div>

    <div class="logistics-state">
      <ul class="state-ul">
        <li class="state-unit">
          <span class="state-ico-01 state-ico"></span>
          <span class="state-txt">待支付</span>
          <span class="bar-bar"></span>
        </li>
        <li class="state-unit">
          <span class="state-ico-02 state-ico"></span>
          <span class="state-txt">待发货</span>
          <span class="bar-bar"></span>
        </li>
        <li class="state-unit">
          <span class="state-ico-03 state-ico"></span>
          <span class="state-txt">待收货</span>
        </li>
      </ul>

      <ul class="state-ul">
        <li class="state-unit">
          <span class="state-ico-04 state-ico"></span>
          <span class="state-txt">待评价</span>
          <span class="bar-bar"></span>
        </li>
        <li class="state-unit">
          <span class="state-ico-05 state-ico"></span>
          <span class="state-txt"> &nbsp;&nbsp;回复&nbsp;&nbsp;</span>
          <span class="bar-bar"></span>
        </li>
        <li class="state-unit">
          <span class="state-ico-06 state-ico"></span>
          <span class="state-txt">退换货</span>
        </li>

      </ul>
    </div>

    <div class="user-content">
      <ul class="content-master">
        <li class="content-master-li">
          <span class="user-content-master-ico user-content-master-ico-01"></span>
          <span class="user-content-master-text">我的订单</span>
          <span class="user-content-icon"></span>
        </li>

        <li class="master-margin"></li>

        <li class="content-master-li ">
          <span class="user-content-master-ico user-content-master-ico-02"></span>
          <span class="user-content-master-text">我的优惠券</span>
          <span class="user-content-icon"></span>
        </li>
        <li class="content-master-li">
          <span class="user-content-master-ico user-content-master-ico-03"></span>
          <span class="user-content-master-text">现金礼包</span>
          <span class="user-content-icon"></span>
        </li>
        <li class="content-master-li">
          <span class="user-content-master-ico user-content-master-ico-04"></span>
          <span class="user-content-master-text ">关于发票</span>
          <span class="user-content-icon"></span>
        </li>

        <li class="master-margin"></li>

        <li class="content-master-li">
          <span class="user-content-master-ico user-content-master-ico-05"></span>
          <span class="user-content-master-text">密码和登陆信息</span>
          <span class="user-content-icon"></span>
        </li>
        <li class="content-master-li">
          <span class="user-content-master-ico user-content-master-ico-06"></span>
          <span class="user-content-master-text">老会员建议</span>
          <span class="user-content-icon"></span>
        </li>
        <li class="content-master-li">
          <span class="user-content-master-ico user-content-master-ico-07"></span>
          <span class="user-content-master-text">客户服务</span>
          <span class="user-content-icon"></span>
        </li>
        <li class="content-master-li">
          <span class="user-content-master-ico user-content-master-ico-08"></span>
          <span class="user-content-master-text">地址服务</span>
          <span class="user-content-icon"></span>
        </li>
        <li class="content-master-li">
          <span class="user-content-master-ico user-content-master-ico-09"></span>
          <span class="user-content-master-text">手机验证</span>
          <span class="user-content-icon"></span>
        </li>
        <div class="user-content-foot"></div>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-copy
    width 100%
    height 48px
  .user-header
    .header-content
      position fixed
      width: 100%
      background-color #89BE48
      margin: 0 auto
      height 48px
      .header-title
        font-size 20px
        line-height 48px
        text-align center
        color white
    .edit-cart
      font-size 18px
      position absolute
      right 7.5px
      top 13px
      margin-right 7px
      color white
  .login
    overflow hidden
    display block
    padding-top 5px
    width 100%
    height 105px
    background-image url("user-images/background.png")
    background-size 100%
    .login-text
      .login-text-top
        text-align center
        font-size 16px
        display block
        line-height 36px
        color #222
      .login-text-bottom
        text-align center
        margin 6px auto 0
        width 137px
        font-size 16px
        line-height 36px
        height: 36px;
        border: 1px solid #009c42;
        border-radius: 15px;
        color #009c42
        background: hsla(0,0%,100%,.4);
  .logistics-state
    background-color white
    .state-ul
      border-bottom: 1px solid #eee;
      width 100%
      display flex
      li
        float left
        height 61px
        flex 1
        text-align center
        color: #585858;
        text-decoration: none;
        padding: 0;
        display block
        .state-txt
          font-size 12px
          line-height 61px
        .bar-bar
          display: inline-block
          border-right: 1px solid #dedede;
          height 30px
          width 2.5px
          vertical-align middle
          margin-left 10px
        .state-ico
          display inline-block
          height 36px
          width 42px
          vertical-align middle
          background-repeat: no-repeat;
          background-size: 99% 100%;
        .state-ico-01
          background-image url("user-images/header-ico-01.png")
        .state-ico-02
          background-image url("user-images/header-ico-02.png")
        .state-ico-03
          background-image url("user-images/header-ico-03.png")
        .state-ico-04
          background-image url("user-images/header-ico-04.png")
        .state-ico-05
          background-image url("user-images/header-ico-05.png")
        .state-ico-06
          background-image url("user-images/header-ico-06.png")
  .user-content
    background #fff
    .content-master
      .master-margin
        height 12px
        width 100%
        background-color #F2F2F2
      .user-content-foot
        height 60px
        width 100%
        float left
        display inline-block
      .content-master-li
        text-decoration: none;
        color: #333;
        width 100%
        height 60px
        display block
        border-bottom: 1px solid #eee;
        .user-content-master-text
          float left
          font-size 14px
          line-height 60px
        .user-content-icon
          width 10px
          height 10px
          display inline-block
          float right
          border-right 2px solid #bbb
          border-top 2px solid #bbb
          margin 25px 10px 0 0
          transform rotate(45deg)
        .user-content-master-ico
          width 30px
          height 30px
          vertical-align middle
          margin: 16px 13px 0
          overflow hidden
          display inline-block
          float left
          background-size 100%
        .user-content-master-ico-01
          background-image url("user-images/content-ico-01.png")
        .user-content-master-ico-02
          background-image url("user-images/content-ico-02.png")
        .user-content-master-ico-03
          background-image url("user-images/content-ico-03.png")
        .user-content-master-ico-04
          background-image url("user-images/content-ico-04.png")
        .user-content-master-ico-05
          background-image url("user-images/content-ico-05.png")
        .user-content-master-ico-06
          background-image url("user-images/content-ico-06.png")
        .user-content-master-ico-07
          background-image url("user-images/content-ico-07.png")
        .user-content-master-ico-08
          background-image url("user-images/content-ico-08.png")
        .user-content-master-ico-09
          background-image url("user-images/content-ico-09.png")

</style>
