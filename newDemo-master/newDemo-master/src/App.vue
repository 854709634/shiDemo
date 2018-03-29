<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './style/common';
  body {
    font-size: 36px;
  }
  .alertStyle {
    width: 3.75rem;
    height: .9rem;
    line-height: .7rem;
    border-radius: .1rem;
    text-align: center;
    background: rgba(0,0,0,.8);
    span {
      color: #ffffff;
      font-size: 36px;
    }
  }
  /*mint-ui*/
</style>
