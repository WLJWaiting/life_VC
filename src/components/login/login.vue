<template>
  <div id="login">
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
            <h1 data-v-4e187200="">老用户登录</h1>
            <div data-v-4e187200="" id="wrap">
              <div data-v-4e187200="" style="display: none;">
                <form data-v-4e187200="" id="reset-form">
                  <ul data-v-4e187200="" class="fm_list">
                    <li data-v-4e187200="" class="multi">
                      <input data-v-4e187200="" required="required" type="tel"
                             maxlength="11" placeholder="请输入手机号" class="field_ipt">
                      <a data-v-4e187200="" class="fidld_skip">获取验证码</a>
                    </li>
                    <li data-v-4e187200="">
                      <input data-v-4e187200="" required="required" type="text" maxlength="10"
                             id="loginVerifyCode" placeholder="请输入手机验证码" class="field_ipt">
                    </li>
                  </ul>
                  <div data-v-4e187200="" class="set_link">
                    <p data-v-4e187200="" class="problem_contact_service">遇到问题？请
                      <a data-v-4e187200="" href="tel:400-609-2288">联系客服</a>
                    </p>
                    <a data-v-4e187200="">
                      <b data-v-4e187200=""></b>
                      <span data-v-4e187200="">账号密码登录</span>
                    </a>
                  </div>
                </form>
              </div>
              <div data-v-4e187200="">
                <form data-v-4e187200="" id="login-form">
                  <ul data-v-4e187200="" class="fm_list">
                    <li data-v-4e187200="">
                      <input data-v-4e187200="" type="tel" maxlength="11" placeholder="请输入手机号" required="required" class="field_ipt">
                    </li>
                    <li data-v-4e187200="" class="multi">
                      <input data-v-4e187200="" type="password" maxlength="20"
                             placeholder="请输入登录密码" required="required" class="field_ipt">
                      <a data-v-4e187200="" class="fidld_skip">忘记密码</a>
                    </li>
                  </ul>
                  <div data-v-4e187200="" id="setting" class="set_link">
                    <a data-v-4e187200="" href="javascript:;">
                      <span data-v-4e187200="">手机号快捷登录</span>
                      <b data-v-4e187200=""></b>
                    </a>
                  </div>
                </form>
              </div>
              <input data-v-4e187200="" type="button" value="登录" class="btn_login">
              <router-link to="register">
                <input data-v-4e187200="" type="button" value="注册" class="btn_regisiter">
              </router-link>
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
#login
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
    background-color: rgba(0,0,0,.6);
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
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        -o-transform-origin: 50% 50%;
        animation: rotate 1s infinite linear;
        -webkit-animation: rotate 1s infinite linear;
        -moz-animation: rotate 1s infinite linear;
        -ms-animation: rotate 1s infinite linear;
        -o-animation: rotate 1s infinite linear;
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
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);

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
          height 84px
          text-align: center;
          color: #037049;
          font-size: 20px;
          line-height: 72px;
          box-sizing: border-box;
        #wrap
          #login-form
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
            .set_link[data-v-4e187200]
              padding: 9px 0 20px;
              text-align: right;
              height: 50px
              width: 90%;
              margin: 0 auto;
              font-size: 16px;
              box-sizing: border-box;
              position: relative;
              a
                color: #3aad36;
                letter-spacing: 1px;
                font-size: 15px;
                margin: 0 0 40px;
                span
                  float: right;
                  line-height: 20px;
                  margin-right: 7px;
                b
                  width: 8px;
                  height: 8px;
                  display: block;
                  position: absolute;
                  right: 0;
                  top: 14px;
                  border-top: 1px solid;
                  border-right: 1px solid;
                  transform: rotate(45deg);



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
