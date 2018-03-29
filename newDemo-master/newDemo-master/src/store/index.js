import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 仓库，相当于一个全局变量，存储着整个网站的数据
const store = new Vuex.Store({
	// 原始数据
  0: {
    count: 0,
    todos: [
      { id: 1, text: 'aaa', done: true },
      { id: 2, text: 'bbb', done: false }
    ]
  },

  // 同步动作,只支持同步操作,通过store.commit('increment')触发
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },

  // Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
  // 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
  // 且只有当它的依赖值发生了改变才会被重新计算。
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
	    return getters.doneTodos.length
	  }
  }
})

export default store
