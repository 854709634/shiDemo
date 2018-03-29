<template>
    <div class="pinterest">
      <div class="grid" ref="heightBox">
        <div class="grid-item" v-for="(item,index) in list" :key="index" @mouseenter="toShow(index)" @mouseleave="removeHidden(index)"  ref="showBox">
          <div class="grid-item-show" v-show="titleShow == index" ref="fixedTop">
            <div class="grid-item-show-pink">
              <img src="static/image/星标.png">
              <span>收集</span>
              <span>{{item.favorite_count}}</span>
            </div>
            <div class="grid-item-show-star"><img src="static/image/点赞.png"></div>
            <div class="grid-item-show-message"><img src="static/image/信息.png"></div>
          </div>
          <img :src="item.photo.path" class="grid-item-image">
          <div class="grid-item-title">{{ item.msg }}</div>
          <div class="grid-item-ionc">
            <div v-show="item.favorite_count">
              <img src="static/image/星.png">
              <span>{{ item.favorite_count }}</span>
            </div>
            <div v-show="item.like_count">
              <img src="static/image/点赞.png">
              <span>{{ item.like_count }}</span>
            </div>
            <div v-show="item.reply_count">
              <img src="static/image/信息.png">
              <span>{{ item.reply_count }}</span>
            </div>
            <div v-show="item.item.price" class="grid-item-ionc-price">
              <span>￥{{ item.item.price }}</span>
            </div>
          </div>
          <div class="grid-item-gather">
            <div class="grid-item-gather-left">
              <img :src="item.sender.avatar">
            </div>
            <div class="grid-item-gather-right">
              <div class="grid-item-gather-right-name">{{ item.sender.username }}</div>
              <div class="grid-item-gather-right-content">收集到{{ item.album.name }}</div>
            </div>
          </div>
          <div v-show="item.top_comments.object_list" v-for="userComment in item.top_comments.object_list"  class="grid-item-gather">
            <div class="grid-item-gather-left">
              <img :src="userComment.sender.avatar">
            </div>
            <div  class="grid-item-gather-right">
              <div  class="grid-item-gather-right-name">{{ userComment.sender.username }}</div>
              <div  class="grid-item-gather-right-content">收集到{{ userComment.content }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import {everyOne} from '../../service/getData'

  export default {
    data() {
      return {
        list: [],       //瀑布流数据
        titleShow: -1,  //默认隐藏标题
        scrTop: 0,      //获取浏览器的卷起了的高度
        scrollHandle: null
      }
    },
    async mounted() {
      let res = await everyOne()
      res.data.object_list.map((item) => {
        if(!item.item){
          item.item = {
            price: ''
          }
        }
      })
      this.list = res.data.object_list;

    },
    updated() {
      this.initData()
    },
    methods: {
      initData() {
        setTimeout(()=>{
          $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 10,
            gutter: 20
          });8
        },20)
      },
      toShow(index){
        //显示对应的元素
        this.titleShow = index;
        //鼠标刚刚移入的时候，判断他的状态
        let topHeight =  this.$refs.showBox[index].offsetTop + this.$refs.heightBox.offsetTop - $(window).scrollTop()
        if(topHeight <= 68) {
          this.$refs.fixedTop[index].style.position = 'fixed';
          this.$refs.fixedTop[index].style.top = '68px';
          this.$refs.fixedTop[index].style.left = this.$refs.showBox[index].offsetLeft + this.$refs.heightBox.offsetLeft + 8 + 'px';
        }
        //鼠标开始滚动的时候监听
        $(document).scroll(() => {
          this.scrTop = this.$refs.showBox[index]
          let topHeight =  this.$refs.showBox[index].offsetTop + this.$refs.heightBox.offsetTop - $(window).scrollTop()
          //判断他是否达到顶部的位置，将元素设置成固定定位
          if(topHeight <= 68) {
            this.$refs.fixedTop[index].style.position = 'fixed';
            this.$refs.fixedTop[index].style.top = '68px';
            this.$refs.fixedTop[index].style.left = this.$refs.showBox[index].offsetLeft + this.$refs.heightBox.offsetLeft + 8 + 'px';
          }else { //元素没有达到顶部，重新定位到原本的位置
            this.$refs.fixedTop[index].style.position = 'absolute';
            this.$refs.fixedTop[index].style.top = '8px';
            this.$refs.fixedTop[index].style.left = '8px';
          }
        })
      },
      removeHidden(index) {
        //鼠标移出将元素隐藏
        this.titleShow = -1;
        //鼠标移出解除滚动事件
        $(document).unbind('scroll');
        //将元素定位到原来的位置
        this.$refs.fixedTop[index].style.position = 'absolute';
        this.$refs.fixedTop[index].style.top = '8px';
        this.$refs.fixedTop[index].style.left = '8px';
      }
    },
    watch: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  * { box-sizing: border-box; }

  body { font-family: sans-serif; }
  /* ---- grid 瀑布流 ---- */
  .grid {
    width: 1200px;
    margin: 0 auto;
  }
  /* clearfix */
  .grid:after {
    content: '';
    display: block;
    clear: both;
  }
  /* ---- grid-item ---- */
  .grid-item {
    width: 224px;
    float: left;
    background: #fff;
    margin-bottom: 20px;
    .grid-item-show {
      width: 208px;
      height: 50px;
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 999;
      display: flex;
      .grid-item-show-pink {
        width: 77px;
        height: 30px;
        background: #f46;
        border-radius: 3px;
        font-size: 16px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          transform: scale(.8,.8)
        }
        span {
          color: #ffffff;
        }
      }
      .grid-item-show-star {
        width: 26px;
        height: 30px;
        background: #ffffff;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 60px;
        border-radius: 5px;
      }
      .grid-item-show-message {
        width: 26px;
        height: 30px;
        background: #ffffff;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        border-radius: 5px;
      }
    }
    .grid-item-image {
      width: 224px;
    }
    .grid-item-title {
      font-size: 16px;
    }
    .grid-item-ionc {
      height: 25px;
      font-size: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      div {
        width: 40px;
        margin-right: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .grid-item-ionc-price {
        position: absolute;
        right: 5px;
        bottom: 5px;
        span {
          color: #f14382 !important;
        }
      }
    }
    .grid-item-gather {
        width: 100%;
        padding: 10px;
        border-top: 1px solid #eee;
        display: flex;
        align-items: center;
        .grid-item-gather-left {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          font-size: 12px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .grid-item-gather-right {
          width: 150px;
          .grid-item-gather-right-name {
            font-size: 16px;
          }
          .grid-item-gather-right-content {
            font-size: 12px;
          }
        }
      }
  }


</style>
