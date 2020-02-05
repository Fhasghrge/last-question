import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    turn: 0,
    grade: 0,
    isMusicOn: false
  },
  mutations: {
    turnMusic (state) {
      state.isMusicOn = ! state.isMusicOn
    }
  }
})

export default store