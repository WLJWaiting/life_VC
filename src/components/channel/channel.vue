<template>
  <div>
    <life-header></life-header>

    <div class="channel-content">
      <div class="fill2"></div>
      <ul class="life-goodsUl clearFix life-child-thank">
        <li>
          <router-link to="/channelsub/2010/201001">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </router-link>
        </li>
        <li>
          <a href="#/channelsub/2860/2877">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </a>
        </li>
        <li>
          <a href="#/channelsub/2860/2877">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </a>
        </li>
        <li>
          <a href="#/channelsub/2860/2877">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </a>
        </li>
        <li>
          <a href="#/channelsub/2860/2877">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </a>
        </li>
        <li>
          <a href="#/channelsub/2860/2877">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </a>
        </li>
        <li>
          <a href="#/channelsub/2860/2877">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </a>
        </li>
        <li>
          <a href="#/channelsub/2860/2877">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </a>
        </li>
        <li>
          <a href="#/channelsub/2860/2877">
            <img src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg">
            <dl>家务工具</dl>
          </a>
        </li>
      </ul>
      <div id="category-banner" class="category-banner">
        <img class="item-pic" src="http://i.lifevccdn.com/upload/DesignerMessageImg/9203af2fbef145daa142dd97bb84fae3.jpg">
      </div>
      <div id="ceoRecommend" class="wrap-shelf">
        <div class="subcat-title">Rico.S的精心推荐：</div>
        <div class="shelf-item" style="position: relative;">
          <a class="item-pic-bx">
            <img class="item-pic" src="http://i.lifevccdn.com/upload/AppItemInfoImage/ad5bea9a90a4406ba540382f4d24e2ae_d1242x0.jpg">
            <div class="item-status-empty" style="display: none;">
              热卖脱销
            </div>
          </a>
          <div class="item-panel">
            <div class="title clearFix">
              上开式可叠加收纳箱
            </div>
            <div class="item-price">
              <div class="price-cont">
                <span class="act-tag" style="display: none;"></span>
                <span>￥</span> <span>39</span>&nbsp;
                <span class="original-price"></span>
                <span class="promo-lable">新</span>
              </div>
              <div class="item-comment">评论：0</div>
            </div>
          </div>
          <div></div>
        </div>
        <div class="shelf-item" style="position: relative;">
          <a>
            <img class="item-pic" src="http://i.lifevccdn.com/upload/AppItemInfoImage/5f4e0a73d2254e4dbca3517b59466cbd_d1242x0.jpg"> &lt;!&ndash;&ndash;&gt;
          <div class="item-status-empty" style="display: none;">
            热卖脱销
          </div>
          </a>
          <div class="item-panel">
            <div class="title clearFix">
              铝合金门后挂钩
            </div>
            <div class="item-price">
              <div class="price-cont">
                <span class="act-tag" style="display: none;"></span>
                <span>￥</span>
                <span>35</span>&nbsp;
                <span class="original-price"></span>
                <span class="promo-lable">新</span>
              </div>
              <div class="item-comment">评论：0</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="fill3"></div>
    </div>

  </div>


</template>

<script>
  import header from '../header/header.vue'
    export default {
      components: {
          "life-header": header
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fill3
    width: 100%;
    height: 55px;
    float: left
  .fill2
    width: 100%;
    height: 96px;
    background: #eee;
    padding-bottom: 6px
  .life-goodsUl
    width: 100%;
    background: #fff
    li
      float: left;
      list-style: none;
      width: 25%;
      height: 99px;
      margin: 12px 0;
      text-align: center;
      a
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
        img
          width: 80%;
          margin: auto;
          vertical-align: middle;
        dl
           font-size: 13px;
           height: 24px;
           line-height: 24px;
  .category-banner
    width: 100%;
    height: 150px;
    float: left;
    border-top: 18px solid #eee;
    img
      width: 100%;
      display: block;
      vertical-align: top;
  .wrap-shelf
    width: 100%;
    float: left;
    .subcat-title
      width: 100%;
      font-size: 20px;
      color: #000;
      height: 48px;
      line-height: 72px;
      background-color: #eee;
      text-align: center;
    .shelf-item
      width: 100%;
      border: 1px solid #ddd;
      margin: 0 auto 0;
      background-color: #eee;
      border-top: 23px solid #eee;
      .item-pic-bx
        width: 100%;
        overflow: hidden;
        display: block;
        position: relative;
        text-decoration: none;
        color: #333;
      .item-pic
        width: 96%;
        display: block;
        vertical-align: top;
        margin: 0 auto;
        position: static;
      .item-panel
        width: 100%;
        background: #fff;
        color: #333;
        padding-bottom: .3rem;
        .title
          width: 94%;
          overflow: hidden;
          margin: 0 auto;
          text-align: left;
          font-size: 14px;
          color: #333;
          line-height: 26px;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-top: .5rem;

        .item-price
          width: 94%;
          overflow: hidden;
          margin: 0 auto;
          font-size: 14px;
          .price-cont
            min-width: 68%;
            overflow: hidden;
            float: left;
            line-height: 26px;
            margin-top: .2rem;
            .promo-lable
              background-color: #c00;
              color: #fff;
              padding: 2px 2px;
          .item-comment
            float: right;
            text-align: right;
            color: #999;
            padding-top: 10px;

</style>
