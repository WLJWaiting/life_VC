<template>
  <div class="tap">
    <header id="topbar" class="header" style="top: 0;">
      <div class="header-content-setting">
        <router-link to="/home"></router-link><!---->
        <p class="header-title">了解</p>
      </div>
    </header>

    <div class="know-content">
      <section class="sect">
        <h3>0.3%</h3>
        <h4>我们质量瑕疵退货率：0.3%</h4>
        <div class="cont">
          <p>我们的委托生产供应商，给欧美客户的外贸家居订单，产品质量瑕疵率标准，通常在1.5%左右，但我们对委托生产商的质量要求，是0.5%！而在过去一年的时间里，我们的产品，因为质量瑕疵的退货率，低至0.3% —— 即每售出100件商品，只有0.3件产品，会因为质量瑕疵而退货。我们像捍卫我们生命一样，在捍卫我们的产品质量。</p>
        </div>
      </section>
      <section class="sect">
        <h3>第1个</h3>
        <h4>每一件产品，我都是第一个试用者。</h4>
        <div class="cont">
          <p>真的， 每一件新产品，我都是第一个试用者，当然，除了我以外，我们还有一个产品体验官部门，她们专门负责新品试用工作。“这件产品，我会用么？我会买么？我会满意么？”这三个问题，是我问的最多的问题。每一件新产品，我们既是设计者，也必须是第一个使用者，只有通过亲身试用，我们才能发现产品还不够完美的地方，并持续改进。对消费者负责，总归是对的！</p>
        </div>
      </section>
      <section class="sect">
        <h3>4级质检</h3>
        <h4>我们努力确保每一件产品0瑕疵</h4>
        <div class="cont">
          <p>每天，我们将近100人的质量团队，会对正在销售的产品，进行4轮严格的质量检查：原材料质检、生产GB/QB质检、产品入库全检，以及包裹出库AQZ质检，努力确保你拿到的每件产品，都没有任何瑕疵。在中国，我们把大部分的精力，都投在了产品研发和质量控制中，因为我们相信，好产品，就是最好的广告。</p>
        </div>
      </section>
      <section class="sect">
        <h3>0时限</h3>
        <h4>质量原因退换货，永不设时限</h4>
        <div class="cont">
          <p>“LifeVC，陪你生活一辈子”，这是我们的品牌梦想，也是我们的承诺：如果产品在使用过程中出现质量瑕疵，哪怕这件产品，你已经使用了一年、三年、五年，我们都会免费为你更换或者退货。陪你生活一辈子，就是承诺：对产品品质负责一辈子。</p>
          <p>曾经有朋友问我：“你们承诺质量原因退换货，永不设时限，难道不怕有恶意的消费者钻空子？”我们问过自己，会有多少这样的消费者？0.1%？0.01%？可能有，但我们绝对不会因为这0.01%的消费者，而放弃对99.99%的消费者，提供更好服务的初衷。</p>
        </div>
      </section>
      <section class="sect">
        <h3>8小时</h3>
        <h4>8小时快速退款</h4>
        <div class="cont">
          <p>我也经常会在网上购物，我有着和你一样的想法：退货省心么？所以在中国，我们推出了“8小时退款”承诺：如果你对收到的产品不满意，只需一个电话：4006092288，超便捷快速退货，包裹退仓后，8小时之内快速退款。</p>
        </div>
      </section>
      <section class="sect">
        <h3>15天</h3>
        <h4>15天促销差价补偿</h4>
        <div class="cont">
          <p>错过促销，总让人觉得不开心。所以，我们还推出了15天促销保护服务：在你今天下单起的15天内，如果你购买的产品降价促销，你只需去“个人账户-促销差价补偿”版块，即可自助获得促销差价补偿，这个服务很受大家的欢迎。</p>
        </div>
      </section>
      <section class="sect">
        <h3>30天</h3>
        <h4>30天无理由退换货</h4>
        <div class="cont">
          <p>是的，国家《消法》规定是7天无理由退换货，但为什么就不能给用户，更长一点思考时间呢？所以，我们把无理由退换货时间，定在了30天：自你包裹签收之日起30天内，你都可以无理由退换货。我们始终相信，只要产品过硬、用户满意，7天还是30天无理由退货期，没什么区别。</p>
        </div>
      </section>
    </div>
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
        background-image url("know.png")
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
  .know-content
    background-color white
    margin-top 48px
    .sect
      font-size: 100%;
      color: #333;
      width: 92%;
      text-align: left;
      border-bottom: 1px solid #d9d9d9;
      margin: 0 auto;
      padding: 24px 0 0;
      h3
        display: block;
        text-align: left;
        font-size: 24px;
        color: #333333;
        line-height: 24px;
        font-weight: normal;
        margin: 0;
        padding: 0;
      h4
        display: block;
        text-align: left;
        font-size: 19.2px;
        color: #666666;
        line-height: 30px;
        font-weight: bold;
        margin: 0;
        padding: 0 0 0.2em;
      .cont
        width: 100%;
        overflow: hidden;
        color: #666666;
        line-height: 27px;
        text-align left
        p
          font-size: 16px;
          display: block;
          overflow: hidden;
          padding-bottom: 24px;
          padding-right: 10px;
</style>

