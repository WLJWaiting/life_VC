<template>
<div class="wrap">
  <div class="item-header">
    <span></span>
    <p>商品详情</p>
  </div>
  <div class="swipe">
    <mt-swipe :auto="1000">
      <mt-swipe-item>
        <img src="./swipe/swipe-01.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./swipe/swipe-02.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./swipe/swipe-03.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./swipe/swipe-04.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./swipe/swipe-05.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./swipe/swipe-06.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./swipe/swipe-07.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./swipe/swipe-08.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <div class="item-price">
    <div class="title">不粘无油烟炒锅</div>
    <p>一口好锅，不沾无油烟</p>
    <div class="price">
      <span>￥</span>
      <span>139</span>
    </div>
  </div>
  <div class="line"></div>
  <a class="promo"><span class="tag-promo bgred">优惠</span>
    <span class="m-txt red">登录查看你的积分和优惠券</span>
  </a>
  <div class="line"></div>
  <div class="attrs">
    <div class="wrap-spec">
      <tr>
        <td>
          <div>尺寸：</div>
          <div class="spec-text">
            <span>30cm(适合3-4人家庭)</span>
          </div>
        </td>
      </tr>
    </div>
  </div>
  <div class="attrs">
    <div class="wrap-spec">
      <span class="num-tt">数量：</span>
      <span class="wrap-num">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </span>
    </div>
  </div>
  <div class="general-info ser-promise">
    <div class="huodongcenter">
      <img src="http://i.lifevccdn.com/upload/combinationchart/8790d2e3fe9b4440afaeff14ca3a2a45.jpg" usemap="#planetmap0">
      <map name="planetmap0" id="planetmap0">
        <area shape="rect" coords="0,2,375,101"></map>
    </div>
    <div class="huodongcenter">
      <img src="http://i.lifevccdn.com/upload/combinationchart/dc678db46c3b45b184a07930bb294647.jpg" usemap="#planetmap1">
      <map name="planetmap1" id="planetmap1">
        <area shape="rect" coords="0,0,375,190"></map>
    </div>
  </div>
  <div class="page-navbar">
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">商品介绍</mt-tab-item>
      <mt-tab-item id="2">规格参数</mt-tab-item>
      <mt-tab-item id="3">评价</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div><img src="./swipe/swipe-08.jpg" alt=""></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div  title="规格参数" class="Detailsdiv" style="border-top: 0.2rem solid rgb(242, 242, 242);">
          <div data-v-3520427c="" class="font-medium Specifications">
            容量：16L中号容量
          </div>
          <div class="font-medium Specifications">
            品名：上开式可叠加收纳箱
          </div>
          <div class="font-medium Specifications">
            材质：PP
          </div>
          <div class="font-medium Specifications">
            颜色：蓝色/咖色
          </div>
          <div class="font-medium Specifications">
            规格：16L/32L
          </div>
          <div class="font-medium Specifications">
            包装方式：防尘袋
          </div>
          <div class="font-medium Specifications app-red" style="border-top: 0.2rem solid rgb(242, 242, 242);">
            <div style="line-height: 0.5rem;">客户经理提醒:</div>
            <div style="line-height: 0.5rem;">1、清水冲洗，请勿接触带有腐蚀性液体或化学性液体；
            </div>
            <div style="line-height: 0.5rem;">2、远离火源、热源。</div>
            <div data-v-3520427c="" style="line-height: 0.5rem;">3、避免暴晒。
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</div>
</template>
<script>
  import Vue from 'vue'
  import {Swipe, SwipeItem, Navbar, TabItem} from 'mint-ui';
  import {TabContainer, TabContainerItem} from 'mint-ui';

  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
  export default {
    name: 'page-navbar',
    data() {
      return {
        selected: '1'
      };
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap
  .swipe
    margin-top 40px
  .item-header
    position fixed
    z-index 999
    top:0
    width 100%
    height 40px
    background: #89be48
    .swipe
      margin-top: 40px;
    p
      margin: 0 auto;
      line-height: 40px;
      font-size: 20px;
      text-align: center;
      color: #fff;
      width: 80%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  .item-price
    padding: 15px 0 12px
    text-align: center;
    .title
      font-size 24px
      color #000
    p
      display:inline-block
      margin-top 5px
      color: #999
    .price
      margin-top 10px
      font-size 24px
  .line
    border-top: 1px solid #ddd;
    padding: .1rem 0;
    margin-left: .14rem;
  .promo
    display inline-block
    padding 5px
    font-size 12px
    text-align left
    .bgred
      background: #ff0000
      color white
    .red
      color red
  .general-info
    width 375px
    img
      width 100%
  .attrs
    margin-left 10px
    margin-top 15px
  .wrap-spec
    .span
      display inline-block
    .wrap-num
      line-height 24px
      button
        margin 0
        display: inline-block;
        border: 1px solid #ccc;
        text-align: center;
        box-sizing: border-box;
        width: 24px;
        height: 24px
        line-height: 24px
      span
        margin 0
        display inline-block
        border 1px solid #ccc
        width 36px
        height 24px
        text-align center
    .spec-text
      margin 10px 0
      float left
      width auto
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      border 2px solid #ccc
      color #ccc
      span
        display inline-block
        margin 0 5px 0
    .spec-text:hover
      border 2px solid #83b842
      color #83b842
    .page-navbar
      width 100%
      .mt-tab-container
        .mt-tab-container-item
          img
            display inline-block
            height 375px
            width 375px
      .font-medium
        color: #6b6b6b;
        font-size: 13px;
        border-top: 1px solid #ccc;
        padding-left: 10px
        background-color: #fff;
        line-height: 13px;
        display block
</style>
