import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    turn: 0,
    grade: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store