const mutations = {
  change (state) {
    state.name = 'zhanghao123'
    console.log(state.name)
  },
  addAttr (state, index) {
    setTimeout(() => {
      state.name = 'zhanghao123' + index
      console.log(state.name)
    }, 2000)
    console.log(state.name)
  },
  newAddAttr (state, index) {
      state.name = 'zhanghao123' + index
      console.log(state.name)
  }
}
export default mutations