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
      let num = 0;
      for(let i = 0; i < corrects.length; i ++) {
        if(corrects[i] === true){
          num ++;
        }
      }
      state.grade = num
    },
    infoUpdate(state, resInfo) {
      state.info.openid = resInfo.openid
      state.info.nickname = resInfo.nickname
      state.info.headimgurl =resInfo.headimgurl
    },
    updateGrade(state, gradeUpdata) {
      state.grade = gradeUpdata / 10
    }
  }
})

export default store