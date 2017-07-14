<template>
  <div>
    <header id="topbar" style="top: 0;">
      <div class="header-content-cart">
        <router-link to="personal"></router-link>
        <p class="header-title">购物车</p>
      </div>
    </header>

    <div class="header-login-wrap">
      <div class="header-login">
        <a class="btn-login">登录</a>
        <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
      </div>
    </div>

    <div class="header-exchange-wrap">
      <div class="header-exchange">
        <a href="javascript:;" id="hideAclick" style="display: none;"></a>
        <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
        <input type="button" value="兑换" class="exch-btn">
      </div>
    </div>

    <div id="wrap-nodata">
      <div id="carts-img">
        <img src="./cart.png" alt="购物车" style="vertical-align: middle; max-width: 160px;">
      </div>
      <div id="carts-text font-medium"
           style="text-align: center; font-size: 18px; color: rgb(102, 102, 102); line-height: 36px;">
        <p>您的购物车还是空荡荡的</p>
      </div>
      <div id="carts-link font-medium" style="text-align: center;">
        <router-link to="/home" style="border: 1px solid rgb(137, 190, 72);
                      padding: 6px 18px; display: inline-block;
                      border-radius: 6px; font-size: 15px; letter-spacing: 1px;
                       margin-top: 6px; color: rgb(137, 190, 72);">
          赶紧去逛逛
        </router-link>
      </div>
      <div data-v-5cc9f28f="" class="wrap-cart-assem cart-empty-recom">
        <div data-v-5cc9f28f="" class="cart-assem-title">
          <p data-v-5cc9f28f="">Rico.S为你精心推荐</p>
        </div>
        <div data-v-5cc9f28f="" class="cart-assem-list">
          <ul data-v-5cc9f28f="" style="width: 2120px; max-width: 2120px">
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/15553"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1508061652144511_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">水槽沥水置物架</p>
                <p data-v-5cc9f28f="" class="price">￥9</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25231"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1706021747237547_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">舒适轻便家居拖鞋</p>
                <p data-v-5cc9f28f="" class="price">￥19</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/17865"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1610221728205420_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title"> 甲醛清除剂(3盒装)</p>
                <p data-v-5cc9f28f="" class="price">￥29</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/21451"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1705041710023028_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">加拿大原生木浆卷纸（8卷）</p>
                <p data-v-5cc9f28f="" class="price">￥19</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/22830"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1611042139369284_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">活氧除水垢片(6片装)</p>
                <p data-v-5cc9f28f="" class="price">￥9</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/23166"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1611121539012128_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">加厚食品保鲜袋</p>
                <p data-v-5cc9f28f="" class="price">￥9</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/20493"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1608171045162381_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">双球无死角清洁马桶刷</p>
                <p data-v-5cc9f28f="" class="price">￥19</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/16414"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1510201743507674_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">懒人清洁拖把(不脏手型Ⅱ代)</p>
                <p data-v-5cc9f28f="" class="price">￥49</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/24024"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1704181709142278_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">可挂式防尘防潮收纳袋</p>
                <p data-v-5cc9f28f="" class="price">￥19</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/25264"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1707051627145658_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">席梦思保护套(梦幻系列)</p>
                <p data-v-5cc9f28f="" class="price">￥109</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/24735"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1706301536006353_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">柔纱布敏感肌肤毛巾</p>
                <p data-v-5cc9f28f="" class="price">￥15</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/22632"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1611171952413457_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">时尚储物凳</p>
                <p data-v-5cc9f28f="" class="price">￥69</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/23582"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1611161133342386_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">防毛发防堵过滤网</p>
                <p data-v-5cc9f28f="" class="price">￥9</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/10292"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D170615151903237_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">不粘少油烟炒锅(日本大金)</p>
                <p data-v-5cc9f28f="" class="price">￥139</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/23539"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1612031601433129_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">时尚防油污餐垫(2片装)</p>
                <p data-v-5cc9f28f="" class="price">￥9</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/24093"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1702241415015696_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">防尘防潮内衣整理盒</p>
                <p data-v-5cc9f28f="" class="price">￥29</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/24085"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1612302250008504_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">随心拼毛毡地垫（8片装）</p>
                <p data-v-5cc9f28f="" class="price">￥35</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/24896"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1707071715578307_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">麦饭石不粘锅</p>
                <p data-v-5cc9f28f="" class="price">￥199</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/23511"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1612310116162873_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">马桶除菌去污剂（省心型）</p>
                <p data-v-5cc9f28f="" class="price">￥19</p></div>
            </li>
            <li data-v-5cc9f28f="">
              <div data-v-5cc9f28f="" class="cart-assem-item"><a data-v-5cc9f28f="" href="#/item/19191"><img
                data-v-5cc9f28f="" src="http://i.lifevccdn.com/upload/goods/D1601121539343815_d230x230.jpg"></a>
                <p data-v-5cc9f28f="" class="title">酵素衣物顽渍净(超强洁净)</p>
                <p data-v-5cc9f28f="" class="price">￥15</p></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    margin: auto;
    .header-content-cart
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

  .header-login-wrap
    width: 100%;
    height: 52px;
    background-color: #f0fae6;
    margin-top 48px
    padding: 9.6px 0 6px;
    .header-login
      width: 355px;
      min-height: 33.6px;
      display: table;
      overflow: hidden;
      margin: 0 auto;
      padding: 0 0 0 21%;
      position: relative;
      .btn-login
        width: 18%;
        height: 32px;
        display: block;
        background: #fff;
        border: 1px solid #8bc146;
        text-align: center;
        font-size: 15px;
        color: #88c13e;
        line-height: 30px;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
      .login-tip
        width: 100%;
        display: table-cell;
        text-align: left;
        vertical-align: middle;
        font-size: 14px
        color: #333;
        line-height: 18px;

  .header-exchange-wrap
    width: 100%;
    height: 53px;
    background-color: #fff;
    margin: 0;
    padding: 7px 6px;
    border-bottom: 1px solid #f2f2f2;
    .header-exchange
      width: 93%;
      height: 36px
      overflow: hidden;
      margin: 1.2px auto 0;
      padding: 0;
      position: relative;
      .exch-ipt
        padding-left: 10px;
        width: 80%;
        height: 34px;
        line-height: 34px;
        display: inline-block;
        border-radius: 0;
        border: 1px solid #e7e7e7;
        background: #fff;
        text-align: left;
        font-size: 14px;
      .exch-btn
        width: 20%;
        height: 36px;
        line-height: 36px;
        display: inline-block;
        border-radius: 0;
        background: #fff;
        text-align: center;
        font-size: 16px;
        color: #6fbd00;
        letter-spacing: 1.2px;
        text-indent: 2.4px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        border: 1px solid #6fbd00;
  #wrap-nodata
    margin: 0 auto;
    background #F2F2F2
    height 260px
    #carts-img
      margin: 0 auto;
      text-align: center;
      padding-left: 24px;
      padding-top: 10px;
      box-sizing: border-box;
    .wrap-cart-assem
      position: fixed;
      bottom: 55px;
      height 205px
    .wrap-cart-assem
      width: 100%;
      min-width: 320px;
      max-width: 640px;
      overflow: hidden;
      background-color: #fff;
      border-bottom: 1px solid #f2f2f2;
      margin: 12px auto 0;
      .cart-assem-list,.cart-assem-title
        width: 94%;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        text-align: left;
        font-size: 16px;
        color: #333;
        line-height: 24px;
        margin: 0 auto;
        padding: 9.6px 3%;
      .cart-assem-list
        width: 100%;
        max-height: 165px;
        overflow-y: hidden;
        overflow-x: scroll;
        margin: 0 auto;
        padding: 15.6px 0;
        ul
          overflow: hidden;
          height: 144px;
          li
            width: 96px;
            overflow: hidden;
            display: inline-block;
            vertical-align: top;
            text-align: left;
          li[data-v-5cc9f28f]
            margin: 0 5px;
            .cart-assem-item[data-v-5cc9f28f] {
               width: 100%;
               margin: 0;
             }
            .cart-assem-item
              width: 80%;
              overflow: hidden;
              margin: 0 auto;
              img
                width: 100%;
                overflow: hidden;
                display: block;
              .title
                width: 100%;
                overflow: hidden;
                display: block;
                text-align: left;
                font-size: 12px;
                color: #333;
                line-height: 24px;
                font-weight: 400;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: keep-all;
              .price
                width: 100%;
                overflow: hidden;
                display: block;
                text-align: left;
                font-size: 12px;
                color: #333;
                line-height: 24px;
                font-weight: 400;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: keep-all;

</style>
