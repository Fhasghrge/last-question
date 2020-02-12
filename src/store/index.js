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
      console.log(corrects)
      let num = 0;
      for(let i = 0; i < corrects.length; i ++) {
        if(corrects[i] === true){
          num ++;
        }
      }
      state.grade = num
    }
  }
})

export default store