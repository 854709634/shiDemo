// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//引入阿里的移动端自适应开发方案
// import rem from '@/config/rem/rem'

//模拟接口数据
import data from './config/mock';

//引入饿了么pc框架 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


//引入better-scroll滚动插件
import BScroll from 'better-scroll'

//引入字体图标
// import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
