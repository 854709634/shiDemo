<template>
    <div class="handpick">
      <div v-for="item in list" class="handpick-option">
        <img :src="item.img">
        <div class="handpick-option-title">{{ item.title }}</div>
        <div class="handpick-option-content">{{item.img_count}}张图片·{{item.collect_count}}人收藏</div>
        <div class="handpick-option-content" v-show="item.username">{{ item.username }}</div>
      </div>
    </div>
</template>

<script>
  import {zhuanji} from '../../service/getData'
  export default {
    data() {
      return {
        list: [],    //数据
      }
    },
    async mounted() {
      this.list = await zhuanji()
    },
    methods: {

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .handpick {
    width: 80%;
    height: 328px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .handpick-option {
      width: 224px;
      height: 328px;
      font-size: 16px;
      img {
        width: 224px;
        height: 224px;
      }
      .handpick-option-title {
        padding: 10px;
      }
      .handpick-option-content {
        padding-left: 10px;
        font-size: 12px;
        color: #808080;
      }
    }
  }
</style>
