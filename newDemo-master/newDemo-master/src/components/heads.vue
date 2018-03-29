<template>
    <div class="heads">
      <div class="header-null"></div>
      <div class="header-content">
        <div class="logo" @click="load"></div>
        <div class="head-option" @mouseover="optionBottom" @mouseout="optionTop">
          <div class="head-option-title" ref="box">
            <div>分类</div>
            <img src="static/image/尖括号-粗大-下.png"  ref="image">
          </div>
          <div class="head-option-content" v-show="optionShow">
              <div class="head-classify">
                <div class="head-classify-left">
                  <div>首页</div>
                  <div>热门</div>
                  <div>良心购</div>
                </div>
                <div class="head-classify-right">
                  <div>
                    <div>家居生活</div>
                    <div>美食菜谱</div>
                    <div>手工DIY</div>
                  </div>
                  <div>
                    <div>时尚搭配</div>
                    <div>美妆造型</div>
                    <div>婚纱婚礼</div>
                  </div>
                  <div>
                    <div>设计</div>
                    <div>古风</div>
                    <div>插画绘画</div>
                  </div>
                  <div>
                    <div>壁纸</div>
                    <div>头像</div>
                    <div>文字句子</div>
                  </div>
                  <div>
                    <div>旅行</div>
                    <div>摄影</div>
                    <div>人文艺术</div>
                  </div>
                  <div>
                    <div>影音书</div>
                    <div>人物明星</div>
                    <div>动画漫画</div>
                  </div>
                  <div>
                    <div>植物多肉</div>
                    <div>生活百科</div>
                    <div>搞笑萌宠</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="head-search">
          <input type="text" placeholder="搜索感兴趣的内容">
          <img src="static/image/搜索.png">
        </div>
        <div class="head-home">
          <div>堆糖生活家</div>
          <div>new</div>
        </div>
        <div class="register">注册</div>
        <div class="login">登录</div>
        <div class="heads-erweima" @mouseover="erweimaBottom" @mouseout="erweimaTop">
          <img src="static/image/手机.png">
          <span>手机版</span>
          <img src="static/image/尖括号-粗大-下.png" class="heads-erweima-img" ref="imageErweima">
          <div class="heads-erweima-image" v-show="erweimaShow">
            <img src="https://b-ssl.duitang.com/uploads/people/201605/23/20160523143146_uFtYs.png">
            <div>扫一扫下载手机客户端</div>
          </div>
        </div>
      </div>
      <div class="header-null"></div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        optionShow: false,     //默认隐藏选项栏
        erweimaShow: false,    //默认隐藏二维码
      }
    },
    mounted() {

    },
    methods: {
      load() {
        location.reload();
      },
      optionBottom() {
        this.optionShow = true
        this.$refs.box.style.height = '39px'
        this.$refs.box.style.borderBottom = '1px solid #fff'
        this.$refs.image.style.transition = 'all .5s'
        this.$refs.image.style.transform = 'rotate(-180deg)'
      },
      optionTop() {
        this.optionShow =false
        this.$refs.box.style.height = '28px'
        this.$refs.box.style.borderBottom = '1px solid #000'
        this.$refs.image.style.transition = 'all .5s'
        this.$refs.image.style.transform = 'rotate(0)'
      },
      erweimaBottom() {
        this.erweimaShow = true;
        this.$refs.imageErweima.style.transition = 'all .5s'
        this.$refs.imageErweima.style.transform = 'rotate(-180deg)'
      },
      erweimaTop() {
        this.erweimaShow = false
        this.$refs.imageErweima.style.transition = 'all .5s'
        this.$refs.imageErweima.style.transform = 'rotate(0deg)'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  .head-classify>.head-classify-left>div:hover,
  .head-classify>.head-classify-right>div>div:hover {
    text-decoration:underline;
    cursor:pointer;
  }
  .heads {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 64px;
    font-size: 16px;
    background: #fff;
    display: flex;
    .header-null {
      width: 150px;
      height: 100%;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .logo {
        width: 80px;
        height: 64px;
        background: url(https://b-ssl.duitang.com/uploads/files/201312/24/20131224171644_TXGCC.png) 0 12px no-repeat;
      }
      .head-option {
        width: 70px;
        height: 28px;
        margin-left: 35px;
        position: absolute;
        left: 100px;
        top: 18px;
        .head-option-title {
          width: 100%;
          position: absolute;
          border: 1px solid #000;
          z-index: 10;
          font-size: 16px;
          height: 100%;
          color: #000;
          display: flex;
          justify-content: space-around;
          img {
            display: block;
            margin-top: 7px;
            width: 15px;
            height: 10px;
          }
        }
        .head-option-content {
          width: 500px;
          height: 300px;
          background: #ffffff;
          position: absolute;
          top: 38px;
          left: 0;
          z-index: 2;
          .head-classify {
            width: 500px;
            height: 300px;
            border: 1px solid #000;
            font-size: 16px;
            display: flex;
            .head-classify-left {
              width: 20%;
              height: 235px;
              margin-top: 50px;
              text-align: center;
              border-right: 1px solid #eee;
              div {
                height: 50px;
              };
            }
            .head-classify-right {
              margin-top: 50px;
              margin-left: 10px;
              width: 60%;
              >div {
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 35px;
                border-bottom: 1px dashed #000;
                >div {
                  padding-right: 20px;
                  border-right: 1px solid #000;
                  &:last-child {
                    border-right: none;
                  }
                }
                &:last-child {
                  border-bottom: none;
                }
              }
            }
          }
        }
      }
      .head-search {
        width: 300px;
        height: 25px;
        padding: 15px;
        padding-left: 5px;
        border: 1px solid #000;
        margin-left: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        input {
          width: 280px;
          height: 25px;
          outline:none;
        }
      }
      .head-home {
        display: flex;
        justify-content: space-around;
        margin-left: 120px;
        width: 150px;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        div {
          &:nth-child(2) {
            background: #f46;
            font-size: 12px;
            border-radius: 3px;
            height: 20px;
            line-height: 20px;
            padding-left: 2px;
            padding-right: 2px;
            color: #fff;
          }
        }
      }
      .register {
        width: 50px;
        height: 25px;
        color: #ffffff;
        text-align: center;
        line-height: 25px;
        background: #f46;
        border-radius: 5px ;
        margin-left: 15px;
        margin-right: 15px;
      }
      .login {
        width: 80px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
      }
      .heads-erweima {
        width: 100px;
        margin-left: 20px;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .heads-erweima-image {
          background: #ffffff;
          padding: 10px;
          position: absolute;
          top: 42px;
          left: -100px;
          div {
            text-align: center;
          }
        }
      }
    }
  }

</style>
