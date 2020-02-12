import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    turn: 0,
    grade: 0,
    info: {
      openid: '',
      nickname: '',
      headimgurl: ''
    }
  },
  mutations: {
    turnMusic(state) {
      state.isMusicOn = !state.isMusicOn
    },
    reduceTurn(state) {
      state.turn--
    },
    addTurn(state) {
      state.turn++
    },
    tiJiao(state, corrects) {
      corrects.every((item, index, arr) => {
        if (item) {
          state.grade++;
        }
      })
    }
  }
})

export default store