<template>
    <div class="home">
      <heads></heads>
      <!-- 轮播图与社会热点 -->
      <div class="home-box">
        <div>
          <div class="swiper-container home-swiper" @mouseover="swiperIn" @mouseout="swiperOut">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in swiperList">
                <img :src="item.imgUrl">
              </div>
            </div>
            <div class="swiper-button-prev" v-show="btnShow"></div>
            <div class="swiper-button-next" v-show="btnShow"></div>
            <div>
              <div class="swiper-slide-title">
                <div>{{ title }}</div>
                <div class="swiper-slide-title-size">{{ writes }}</div>
                <div class="swiper-pagination swiper-slide-title-right"></div>
              </div>
            </div>

          </div>
        </div>
        <div class="home-box-content">
          <div class="home-box-option">
            <div class="option-title">社区热点</div>
            <div class="option-content">
              <span>阴阳师</span>
              <span>简笔画</span>
              <span>折纸</span>
              <span>初装装扮</span>
              <span>当你沉睡时</span>
              <span>观影手帐</span>
              <span>拼豆</span>
              <span>古风</span>
              <span>水彩</span>
            </div>
            <div class="option-box">
              <span>研究同好会</span>
              <span class="option-box-size">·</span>
              <span>追求形体之美</span>
              <span class="option-box-pink">精选</span>
            </div>
            <div>
              <span>收图小助手：</span>
              <span> 堆糖收集工具</span>
            </div>
          </div>
          <div class="home-box-image"></div>
        </div>
      </div>
      <!-- 专辑精选 -->
      <div class="home-handpick">
        <div>专辑精选</div>
        <div class="home-handpick-btn">往期回顾></div>
      </div>
      <handpick></handpick>
      <div class="home-handpick">
        <div>大家都在逛</div>
      </div>
      <pinterest></pinterest>
    </div>
</template>

<script>
  import heads from '../../components/heads'
  import handpick from '../handpick/handpick'
  import pinterest  from '../pinterest/pinterest'

  export default {
    data() {
      return {
        btnShow: false,     //默认隐藏按钮
        swiperList: [{
          imgUrl: 'https://b-ssl.duitang.com/uploads/item/201712/01/20171201142621_yXAuK.thumb.710_443_c.jpeg',
          title: '精致到手腕的每一天～',
          writes: 'by 熊丸子'
        },
          {
            imgUrl: 'https://b-ssl.duitang.com/uploads/item/201712/01/20171201182815_ajz8e.thumb.710_443_c.jpeg',
            title: '冬季穿搭秘籍～',
            writes: 'by 占秋'
          },
          {
            imgUrl: 'https://b-ssl.duitang.com/uploads/item/201711/29/20171129160620_NHUrv.thumb.710_443_c.jpeg',
            title: '冬季穿搭秘籍～',
            writes: 'by Miss天然卷'
          },
          {
            imgUrl: 'https://b-ssl.duitang.com/uploads/item/201711/29/20171129140631_k2sQA.thumb.710_443_c.jpeg',
            title: '答应我，你们的文具也要时髦在线。',
            writes: 'by 李大象在哪里'
          },
          {
            imgUrl: 'https://b-ssl.duitang.com/uploads/item/201711/28/20171128142436_uScLk.thumb.710_443_c.jpeg',
            title: '如何购买一件你明年还想穿的大衣？',
            writes: 'by 王三三的猫'
          },
        ],
        title: 'swiperList[0].title',          //轮播图的标题
        writes: 'swiperList[0].writes',         //轮播图的内容
      }
    },
    mounted() {
      let me = this
      setTimeout(() => {
        var mySwiper = new Swiper('.home-swiper', {
          autoplay: 2000,//可选选项，自动滑动
          pagination : '.swiper-pagination',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          onSlideChangeStart: function(swiper){
            me.title = me.swiperList[swiper.activeIndex].title
            me.writes = me.swiperList[swiper.activeIndex].writes
          }
        })
      },0)
    },
    methods: {
      swiperIn() {
        this.btnShow = true;
      },
      swiperOut() {
        this.btnShow = false
      }
    },
    components: {
      heads,
      handpick,
      pinterest
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home {
    width: 100%;
    .home-box {
      width: 80%;
      margin: 0 auto;
      margin-top: 110px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .home-swiper {
        width: 712px;
        height: 445px;
        z-index: 1;
        .swiper-slide {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .swiper-slide-title {
          width: 632px;
          position: absolute;
          left: 40px;
          bottom: 40px;
          z-index: 5;
          background: rgba(0,0,0,.2);
          border-radius: 10px;
          font-size: 26px;
          padding: 10px;
          padding-left: 20px;
          display: flex;
          div {
            color: #ffffff;
          }
          .swiper-slide-title-size {
            line-height: 36px;
            font-size: 16px;
            z-index: 3;
          }
          .swiper-slide-title-right {
            width: 100px;
            height: 40px;
            position: absolute;
            right: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            z-index: 2;
          }
        }
      }
      .home-box-content {
        width: 468px;
        height: 445px;
        display: flex;
        align-content: space-around;
        flex-wrap: wrap;
        .home-box-option {
          width: 468px;
          height: 293px;
          padding-left: 30px;
          padding-right: 30px;
          background: #ffffff;
          font-size: 16px;
          .option-title {
            width: 100%;
            height: 70px;
            line-height: 70px;
            border-bottom: 1px solid #000;
          }
          .option-content {
            width: 100%;
            height: 100px;
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: 1px dashed #000;
            span {
              display: inline-block;
              padding-right: 15px;
              border-right: 1px solid #000;
              margin-top: 5px;
            }
          }
          .option-box {
            width: 100%;
            height: 60px;
            padding-top: 15px;
            padding-bottom: 15px;
            margin-bottom: 20px;
            border-bottom: 1px solid #000;
            display: flex;
            span {
              display: inline-block;
              height: 18px;
              margin-right: 10px;
            }
            .option-box-size{
              display: inline-block;
              transform: scale(5,5) translate(0,-2px);
            }
            .option-box-pink {
              background: #f46;
              color: #fff;
              font-size: 12px;
              padding: 3px;
              border-radius: 5px;
              line-height: 12px;
              margin-top: 2px;
            }
          }
        }
        .home-box-image {
          width: 468px;
          height: 132px;
          background-image: -webkit-image-set(url(https://b-ssl.duitang.com/uploads/people/201606/29/20160629173907_AyjmB.jpeg) 1x, url(https://b-ssl.duitang.com/uploads/people/201606/29/20160629173920_dNxUz.jpeg) 2x);;
        }
      }
    }
    .home-handpick {
      margin: 0 auto;
      margin-top: 30px;
      padding-top: 30px;
      padding-bottom: 30px;
      width: 80%;
      height:100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #000;
      font-size: 20px;
      .home-handpick-btn {
        background: #22b4f6;
        padding: 5px;
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
</style>
