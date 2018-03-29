import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import zxc from '@/page/1/1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/zxc',
      component: zxc,
    }
  ]
})
