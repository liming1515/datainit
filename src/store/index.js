import Vue from 'Vue'
import Vuex from 'Vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  getters: {
    add (state) {
      return state.name + '123'
    }
  },
  actions,
  // actions: {
  //   addAttr (mutations) {
  //     console.log(mutations)
  //     setTimeout(() => {
  //       mutations.commit('newAddAttr')
  //     }, 2000)
  //   }
  // }
})

export default store