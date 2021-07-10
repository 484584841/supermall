import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    carList: []
  },
  mutations: {
    addCarList(state, payload) {
      // state.carList.push(payload)
      let oldProduct = state.carList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        oldProduct.count = oldProduct.count + 1
      } else {
        payload.count = 1
        state.carList.push(payload)
        // console.log(payload);
      }
    }
  },
  actions: {},
  modules: {}
})
