<template>

  <div class="home">
    <life-header></life-header>

    <div class="br"></div>
    <!--轮播图-->
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="./swipe/swipe-01.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./swipe/swipe-02.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./swipe/swipe-03.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./swipe/swipe-04.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./swipe/swipe-05.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./swipe/swipe-06.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./swipe/swipe-07.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./swipe/swipe-08.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <!--限时特惠-->
    <div class="item-combo">
      <div title="组合图活动">
        <div class="combo-title"></div>
        <div class="img-wrap" style="height: 90px;">
          <img usemap="#planetmap0"
               src="http://i.lifevccdn.com/upload/combinationchart/b6b9a0221e3b47b7a92b36201272f9e6_d1242x0.jpg"
               lazy="loaded" style="width: 100%; height: 90px;">
          <map name="planetmap0" id="planetmap0">
            <area shape="rect" coords="0,9,123,88" href="/#/channel/2001">
            <area shape="rect" coords="123,9,251,90" href="/#/channel/2101">
            <area shape="rect" coords="251,9,375,89" href="/#/channel/2201">
          </map>
        </div>
      </div>
    </div>
    <!--暑假旅行开始了-->
    <div data-v-60df7298="" class="item-combo">
      <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
        <div data-v-46782024="" class="combo-title"></div>
        <div data-v-46782024="" class="img-wrap" style="height: 150px;">
          <img data-v-46782024="" usemap="#planetmap1"
               src="http://i.lifevccdn.com/upload/combinationchart/9518bc17021a40d28bffa8eb521f6878_d1242x0.jpg"
               lazy="loaded" style="width: 100%; height: 150px;">
          <map data-v-46782024="" name="planetmap1" id="planetmap1">
            <area data-v-46782024="" shape="rect" coords="0,1,375,148">
          </map>
        </div>
      </div>
    </div>
    <!--新品首发-->
    <div data-v-60df7298="" class="item-combo">
      <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
        <div data-v-46782024="" class="combo-title"></div>
        <div data-v-46782024="" class="img-wrap" style="height: 925px;">
          <img data-v-46782024="" usemap="#planetmap2"
               src="http://i.lifevccdn.com/upload/combinationchart/c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg"
               lazy="loaded" style="width: 100%; height: 925px;">
          <map data-v-46782024="" name="planetmap2" id="planetmap2">
            <area data-v-46782024="" shape="rect" coords="0,64,375,231">
            <area data-v-46782024="" shape="rect" coords="0,240,375,407">
            <area data-v-46782024="" shape="rect" coords="0,407,375,573">
            <area data-v-46782024="" shape="rect" coords="0,573,123,749">
            <area data-v-46782024="" shape="rect" coords="123,573,251,749">
            <area data-v-46782024="" shape="rect" coords="251,573,375,749">
            <area data-v-46782024="" shape="rect" coords="0,749,123,925">
            <area data-v-46782024="" shape="rect" coords="123,749,251,925">
            <area data-v-46782024="" shape="rect" coords="251,749,375,925">
          </map>
        </div>
      </div>
    </div>
    <!--积分特价换购-->
    <div data-v-60df7298="" class="item-combo">
      <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
        <div data-v-46782024="" class="combo-title"></div>
        <div data-v-46782024="" class="img-wrap" style="height: 238px;">
          <img data-v-46782024="" usemap="#planetmap3"
               style="width: 100%; height: 238px;"
               src="http://i.lifevccdn.com/upload/combinationchart/7d75b0fe2e8244bdbad79f4b39f8b62f_d1242x0.jpg"
               lazy="loaded">
          <map data-v-46782024="" name="planetmap3" id="planetmap3">
            <area data-v-46782024="" shape="rect" coords="0,26,371,235">
          </map>
        </div>
      </div>
    </div>
    <!--老会员补货区 -->
    <div data-v-60df7298="" class="item-combo">
      <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
        <div data-v-46782024="" class="combo-title"></div>
        <div data-v-46782024="" class="img-wrap" style="height: 310px;">
          <img data-v-46782024="" usemap="#planetmap4"
               style="width: 100%; height: 310px;"
               src="http://i.lifevccdn.com/upload/combinationchart/3cea975b99f9458198e9ed706af9b391_d1242x0.jpg"
               lazy="loaded">
          <map data-v-46782024="" name="planetmap4" id="planetmap4">
            <area data-v-46782024="" shape="rect" coords="3,46,86,158">
            <area data-v-46782024="" shape="rect" coords="93,46,191,164">
            <area data-v-46782024="" shape="rect" coords="191,46,281,164">
            <area data-v-46782024="" shape="rect" coords="285,46,371,164">
            <area data-v-46782024="" shape="rect" coords="3,170,90,294">
            <area data-v-46782024="" shape="rect" coords="93,170,183,294">
            <area data-v-46782024="" shape="rect" coords="187,170,281,294">
            <area data-v-46782024="" shape="rect" coords="281,170,375,294">
          </map>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  import {Swipe, SwipeItem} from 'mint-ui'
  import header from '../header/header.vue'
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
      components: {
        "life-header": header,
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.br
  height 96px
.swipe
  height 250px
  width 100%
  img
    width 100%
.item-combo
  margin-bottom 12px
</style>
