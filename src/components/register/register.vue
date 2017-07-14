<template>
  <div id="register">
    <div data-v-4e187200="">

      <div data-v-786a8677="" data-v-4e187200="">
        <div data-v-786a8677="" class="lfmasklayer" style="display: none;"></div>
        <div data-v-786a8677="" class="lf-loading" style="display: none;">
          <i data-v-786a8677="" class="lf-circles"></i>
          <i data-v-786a8677="" class="iconfont icon-loading-logo fontSize"></i>
        </div> <!---->
      </div>

      <article data-v-4e187200="" id="loginBg" class="acct-wrap"
               style="margin-top: 0px; overflow: hidden; height: 667px;">
        <div data-v-4e187200="" class="old_user_login">
          <router-link to="personal">
            <label data-v-4e187200="" class="acct_top_back"></label>
          </router-link>
          <img data-v-4e187200="" src="./life-login.png" class="acct_top_show">
        </div>
        <div data-v-4e187200="" class="bg-wrap" style="height: 526px;">
          <div data-v-4e187200="" class="login_content">
            <h1 data-v-4e187200="">新用户注册</h1>
            <div data-v-4e187200="" id="wrap">
              <form data-v-4e187200="" id="register-form">
                <ul data-v-4e187200="" class="fm_list register_distance">
                  <li data-v-4e187200="">
                    <input data-v-4e187200="" id="txtMobile" type="tel" maxlength="11" placeholder="请输入手机号"
                           required="required" class="field_ipt">
                  </li>
                  <li data-v-4e187200="">
                    <input data-v-4e187200="" type="text" maxlength="20" placeholder="请设置6-20位密码,包含字母、数字或符号"
                           id="regPwd" required="required" class="field_ipt">
                  </li>
                  <li data-v-4e187200="">
                    <input data-v-4e187200="" required="required" type="text" maxlength="10"
                           id="regCaptcha" placeholder="请输入图形验证码" class="field_ipt" style="width: 70%;">
                    <div data-v-4e187200="" class="verifycode_img">
                      <img src="http://account.lifevc.com/Account/NewVerifyCode?t=1499768411325"
                      style="width: 20%; border-left: 0px solid silver;">
                      <img src="./download.png" style="width: 5%;margin-left: 5px">
                    </div>
                  </li>
                  <li data-v-4e187200="">
                    <input data-v-4e187200="" type="text" placeholder="请输入手机验证码" maxlength="10"
                           id="regSmsCaptcha" required="required" class="field_ipt">
                    <a data-v-4e187200="" class="fidld_skip">获取验证码</a>
                  </li>
                </ul>
                <p data-v-4e187200="">遇到问题？请
                  <a data-v-4e187200="" href="tel:400-609-2288">联系客服</a>
                </p>
                <input data-v-4e187200="" type="button" value="注册" class="btn_login space m-top">
                <router-link to="login">
                  <input data-v-4e187200="" type="button" value="登录" class="btn_regisiter space m-top">
                </router-link>
              </form>
            </div>
          </div>
        </div>
      </article>

      <div data-v-4e187200="" style="background: rgb(255, 255, 255); overflow: hidden; display: none; height: 667px;">
        <p data-v-4e187200="" class="problem_service">遇到问题 ? 请
          <a data-v-4e187200="" href="tel:400-609-2288">联系客服</a>
        </p>
      </div>

      <div data-v-4e187200="" class="publick_mask"></div>

      <div data-v-4e187200="" class="pwd_err">
        <p data-v-4e187200="">密码连续错误3次</p>
        <p data-v-4e187200="">请重新
          <a data-v-4e187200="">验证手机号</a>
        </p>
      </div>

      <div data-v-4e187200="" class="new_user_register">
        <dl data-v-4e187200="">
          <dt data-v-4e187200="">
          <p data-v-4e187200="">
            <span data-v-4e187200=""></span>手机号已被注册
            </p>
          </dt>
          <dd data-v-4e187200="">
            <span data-v-4e187200="">立即登录</span>
            <span data-v-4e187200="">找回密码</span>
          </dd>
        </dl>
      </div>

    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#register
  height 667px
  overflow hidden
  position relative
  z-index 10000
  .lfmasklayer[data-v-786a8677]
    z-index: 9998;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    .lf-loading[data-v-786a8677]
      width: 100%;
      margin-top: -39px;
      position: fixed;
      top: 50%;
      text-align: center;
      color: #999;
      z-index: 9999;
      .lf-circles[data-v-786a8677]
        width: 60px;
        height: 60px;
        margin: auto;
        content: "";
        display: inline-block;
        position: relative;
        top: 0;
        border-radius: 60px;
        border: 2px solid #009c42;
        border-top-color: #e4e4e4;
        transform-origin: 50% 50%;
        animation: rotate 1s infinite linear;
      .icon-loading-logo[data-v-786a8677]
        width: 64px;
        height: 64px;
        line-height: 64px;
        margin: auto;
        display: inline-block;
        color: #009c42;
        font-size: 44px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

  #loginBg[data-v-4e187200]
    width: 100%;
    height: 100%;
    padding: 0;

  .acct-wrap
    margin-top: 40px;
    margin-bottom: 0;
    .old_user_login[data-v-4e187200]
      width: 100%;
      height: 141px;
      background: #fff;
      position: relative;
      .acct_top_back[data-v-4e187200]
        width: 26px;
        height: 26px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 46px;
        border: 1px solid #3aad36;
        &:after
          content: "";
          width: 14px;
          height: 14px;
          display: block;
          border-left: 1px solid #3aad36;
          border-top: 1px solid #3aad36;
          position: absolute;
          left: 10px;
          top: 5px;
          transform: rotate(-45deg);
      .acct_top_show[data-v-4e187200]
        width: 120px;
        overflow: hidden;
        display: block;
        position: absolute;
        top: 30%;
        left: 50%;
        margin-left: -60px;
    .bg-wrap[data-v-4e187200]
      background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
      background-size: 100% 100%;
      background-position: bottom;
      .login_content[data-v-4e187200]
        width: 100%;
        height: 6.5rem;
        box-sizing: border-box;
        h1
          width: 100%;
          height 52px
          text-align: center;
          color: #037049;
          font-size: 20px;
          line-height: 72px;
          box-sizing: border-box;
        #wrap
          #register-form
            .fm_list
              li[data-v-4e187200]
                width: 90%;
                margin: 0 auto;
                height: 50px;
                border-bottom: 1px solid #dbdbdb;
                position: relative;

                .field_ipt[data-v-4e187200]
                  font-size: 16px;
                  width: 100%;
                  background: transparent;
                  position: absolute;
                  left: 0;
                  top: 0;
                  height: 50px;
                  box-sizing: border-box;
                  outline none
                .fidld_skip[data-v-4e187200]
                  display: inline-block;
                  height 34px
                  float: right;
                  font-size: 16px;
                  color: #3aad36;
                  text-decoration: none;
                  border: 1px solid #3aad36;
                  border-radius: 4px;
                  padding: 4px 15px;
                  text-align: center;
                  position: absolute;
                  right: 0;
                  top: 10px;
                .verifycode_img[data-v-4e187200]
                  position: absolute;
                  right: -70%;
                  width: 100%;
                  top: 14px;
                  height 66px
            p[data-v-4e187200]
              line-height 21px
              font-size: 14px;
              color: #666;
              width: 100%;
              text-align: center;
              margin-bottom: 5px;
              a
                color: #3ea438;
                text-decoration: underline;
            .register_distance
              box-sizing: border-box;
              margin-bottom: 10px;
          .btn_login[data-v-4e187200], .btn_regisiter[data-v-4e187200]
            width: 80%;
            overflow: hidden;
            display: block;
            outline: none;
            text-align: center;
            font-size: 19px;
            color: #fff;
            line-height: 36px;
            letter-spacing: 20px;
            text-indent: 20px;
            box-sizing: border-box;
          .btn_login[data-v-4e187200]
            margin: 0 auto 15px;
            background-color: #3aad36;
            border: 1px solid #3aad36;
            border-radius: 5px;
          .btn_regisiter[data-v-4e187200]
            margin: 10px auto 0;
            background-color: #8a8a8a;
            border: 1px solid #8a8a8a;
            border-radius: 5px;
            opacity: .5;
</style>
