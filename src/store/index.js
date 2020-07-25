import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {},
    myObj: {}
  },
  mutations: {
    updateData(state, myData) {
      state.data = myData
    },
    updateMyObj(state, myObj) {
      state.myObj = myObj
    }
  },
  actions: {
    fetchData({ commit }, myParams) {
      return axios('url').then(data => {
        commit('updateData', data)
      })
    }
  },
  modules: {
  }
})
