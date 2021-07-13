import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    carList: []
  },
  mutations: {

  },
  actions: {
    addCarList(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = context.state.carList.find(item => item.iid === payload.iid)
        if (oldProduct) {
          oldProduct.count = oldProduct.count + 1
          resolve("当前商品数量加一")
        } else {
          payload.checked = true
          payload.count = 1
          context.state.carList.push(payload)
          reject("添加了新的商品")
        }
      })
    }
  },
  modules: {}
})
