<template>
  <div class="footer">
    <Back-top :bottom="65" :right="30"></Back-top>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home">
          <span class="home_ico ico_all"></span>
          <span class="text">首页</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/allproducts">
          <span class="product_ico ico_all"></span>
          <span class="text">全部产品</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/stroll">
          <span class="stroll_ico ico_all"></span>
          <span class="text">闲逛</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopcart">
          <span class="cart_ico ico_all"></span>
          <span class="text">购物车</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/personal">
          <span class="user_ico ico_all"></span>
          <span class="text">账户中心</span>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="logo-down" @click="show" v-show="isShow">
      <div class="logo-down-top">
        <img src="./icon/downloadTop.png">
      </div>
      <div class="logo-down-bottom">
        <img src="./icon/downloadBottom.png">
      </div>
    </div>
  </div>
</template>

<script>
  import BackTop from 'iview/src/components/back-top';
  export default {
    data(){
       return{
           isShow:true
       }
    } ,
    methods: {
        show () {
            this.isShow = !this.isShow
        }
    },
    components: {
      'Back-top': BackTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .ivu-back-top
    .ivu-back-top-inner
      width 45px
      height 45px
      border-radius 50%
  .tab
    z-index 1000
    position fixed
    bottom 0
    width 100%
    height 55px
    background #f8f8f8
    display: flex
    .tab-item
      position relative
      flex 1
      text-align center
      line-height 55px
      margin-top 12px
      .active
        color:#009c42
        .home_ico
          background-image url("./icon/home_page_open.png")
        .cart_ico
          background-image url("./icon/cart_open.png")
        .product_ico
          background-image url("./icon/product_open.png")
        .stroll_ico
          background-image url("./icon/stroll_open.png")
        .user_ico
          background-image url("./icon/user_open.png")
  .ico_all
        position absolute
        left 27.5px
        display inline-block
        background-repeat no-repeat
        background-position: 50%;
        background-size: 100%;
        height 22px
        width 22px
      .text
        display inline-block
        margin-top 5px
        font-size 12px
      .home_ico
        background-image url("./icon/home_page_close.png")
      .cart_ico
        background-image url("./icon/cart_close.png")
      .product_ico
        background-image url("./icon/product_close.png")
      .stroll_ico
        background-image url("./icon/stroll_close.png")
      .user_ico
        background-image url("./icon/user_close.png")
  .logo-down
    z-index 999
    position fixed
    bottom 50px
    width 100%
  .logo-down-bottom
    width 100%
    img
      width 100%
  .logo-down-top
    position: absolute;
    left 4.8%
    bottom 100%
    width 15.5%
    img
      width 100%
</style>

