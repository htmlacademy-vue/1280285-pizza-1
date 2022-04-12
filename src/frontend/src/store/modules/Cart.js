export default {
  state: {
    // additionalItems: [],
    additionalItem: {
      
    },
    additionaPrice: 0,
    adress: {
      adressHome: '',
      house: '',
      flat: '',
      getOrder: '',
      phone: ''
    }
  },
  getters: {
    getAdressOrder(state) {
      return state.adress
    },
    getAdditionalItem(state) {
      return state.additionalItem;
    },
    getAdditionalPrice(state) {
      return state.additionaPrice
    },
    getOrderAdress(state) {
      return state.adress.adressHome
    },
    getOrderHouse(state) {
      return state.adress.house
    },
    getOrderFlat(state) {
      return state.adress.flat
    },
    getOrderTake(state) {
      return state.adress.getOrder
    },
    getPhoneNumber(state) {
      return state.adress.phone
    }
  },
  mutations: {
    updateAdditionalObj(state, newObj) {
      state.additionalItem = newObj
    },
    setAdditionalPrice(state, value) {
        state.additionaPrice = value
    }
  }
}
