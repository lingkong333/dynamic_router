import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is:false,
    routerArr:[]//存储静态、动态路由
  },
  mutations: {
    // 登录退出
    CHANGESTATE(state,bool){
      state.is = bool
    },
    // 存放路由
    HEARDRE(state,data){
      state.routerArr = data
    }
  },
  actions: {
    updateStateChange(context,state){
      context.commit('CHANGESTATE',state)
    },
    Nav(context,state){
      context.commit("HEARDRE",state)
    }
  },
  getters:{
    updateStore(){
      return state.is;
    },
    updateNav(){
      return state.routerArr
    }
  }
})
