const action = {
  addAttr (mutations) {
    console.log(mutations)
    setTimeout(() => {
      mutations.commit('newAddAttr')
    }, 2000)
  }
}
export default action