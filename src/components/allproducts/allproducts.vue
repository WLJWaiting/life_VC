<template>
  <div>

    <header id="topbar" class="header" style="top: 0;">
      <div class="header-content"> <!---->
        <p class="header-title">全部产品</p>
      </div>
      <div data-v-e8e06e10="" data-v-350514bc="" id="wrap" class="search-panel">
        <div id="search-bar">
          <form action="">
            <input type="search" placeholder="搜索商品" class="searchinput">
            <input id="btnCancel" type="button" value="取消" class="sch-cancel">
          </form>
        </div>
      </div>
    </header>

    <div data-v-e8e06e10="" id="content-wrap">
      <div data-v-e8e06e10="" class="life-module">
        <div data-v-e8e06e10="" class="life-goodsAll">
          <div data-v-e8e06e10="" class="life-goodsBox"  v-for="product in products"><!---->
            <div data-v-e8e06e10="" class="life-goodsTip">
              <dl data-v-e8e06e10="" class="life-goodsMark">{{product.name}}</dl> <!----></div>
            <ul data-v-e8e06e10="" class="life-goodsUl clearFix onlyStyle">
              <router-link to="/channelsub">
                <li class="" style="height: 138px;" v-for="good in product.goods">
                  <img :src="good.image"
                       lazy="loaded">
                  <dl>{{good.title}}</dl>
                </li>
              </router-link>

            </ul>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['products']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    margin: auto;
    .header-content
      width: 100%;
      margin: 0 auto;
      position: relative;
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
    .search-panel
      background-color: #f2f2f2;
      padding: 6px 0;
      #search-bar
        width: 94%;
        height: 36px;
        overflow: hidden;
        border-radius: 6px;
        margin: 0 auto;
        padding: 0;
        position: relative;
        .searchinput
          outline none
          width: 100%;
          height: 36px;
          background-color: #fff;
          background-image: url('./search.png');
          background-repeat: no-repeat;
          background-position: 38% 6px;
          background-size: auto 70%;
          border: 0;
          border-radius: 6px;
          text-align: center;
          font-size: 16px;
          color: #1f5350;
          font-family: Microsoft YaHei;
          margin: 0;
          padding-left: 36px;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 5;
        .sch-cancel
          width: 15%;
          height: 16px;
          display: block;
          float: right;
          background: none;
          background-color: transparent;
          border: 0;
          text-align: right;
          font-size: 14px;
          color: #83b842;
          line-height: 36px;
        .changeStyle[data-v-e8e06e10]
          width: 88% !important;
          background-position: .4rem .5rem !important;
          text-align: left !important;

  #content-wrap
    position: absolute;
    width: 100%;
    top: 96px;
    height: 516px;
    overflow-y: scroll;
    .life-module[data-v-e8e06e10]
      background #f2f2f2
      overflow: hidden;
      .life-goodsAll
        .life-goodsBox
          margin-top: 24px;
          .life-goodsTip
            width: 120px;
            margin: auto;
            text-align: center;
            dl:last-child
              line-height: 36px
            .life-goodsMark
              font-size: 16px;
              letter-spacing: 3px;
              position: relative;
            dl
              height: 36px;
              line-height: 36px;
              font-size: 22px;
          .life-goodsUl
            background: #fff;
          .onlyStyle
            overflow hidden
            li
              float: left;
              width: 33%;
              text-align: center;
              border: 1px solid #f1f1f1;
              margin: 0 0 -1px -1px;
              img
                width: 60% !important;
                margin: auto;
                padding-top: 12px;
                vertical-align middle
              dl
                height: 24px;
                line-height: 24px;
                padding-bottom: 12px;
                padding-top: 6px;
                font-size: 13px;

</style>
