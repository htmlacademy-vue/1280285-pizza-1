/* eslint-disable */

export default {
  
  state: {
    cartObj: [],
    pizzaIndex: null,
    // totalPrice: 0,
    currentPizza: {
      namePizza: '',
      dought: '',
      sauce: '',
      ing: {},
      ingPrice: 0,
      doughtPrice: 0,
      saucePrice: 0,
      totalPrice: 0,
      multiplier: 0,
      nameIng: '',
      doughtDesc: '',
      sizeDesc: '',
      sauceDesc: ''
    }

  },
  getters: {
    getCartOrders(state) {
      return state.cartObj;
    },
    // getPrice(state) {
    //   return state.totalPrice;
    // },
    getDoughtSelector(state) {
      return state.currentPizza.dought
    },
    getSauceSelector(state) {
      return state.currentPizza.sauce
    },
    getIngSelector(state) {
      //return state.currentPizza.ing
      return state.pizzaIndex !== null ? state.cartObj[pizzaIndex] :  state.currentPizza.ing;
    },
    getIngPrice(state) {
      return state.currentPizza.ingPrice
    },
    getDoughtPrice(state) {
      return state.currentPizza.doughtPrice
    },
    getSaucePrice(state) {
      return state.currentPizza.saucePrice
    },
    getTotalPrice(state) {
      return state.currentPizza.totalPrice
    },
    getMultiplier(state) {
      return state.currentPizza.multiplier
    },
    getNameIng(state) {
      return state.currentPizza.nameIng
    },
    getDoughtDesc(state) {
      return state.currentPizza.doughtDesc
    },
    getSizeDesc(state) {
      return state.currentPizza.sizeDesc
    },
    getSauceDesc(state) {
      return state.currentPizza.sauceDesc
    },
    getNamePizza(state) {
      return state.currentPizza.namePizza
    }
  },
  mutations: {
    // setCurrentObj(state, value) {
    //   state.currentPizza = value
    // },
    setDoughtDesc(state,value) {
      state.currentPizza.doughtDesc = value
    },
    setSauceDesc(state, value) {
      state.currentPizza.sauceDesc = value
    },
    setSizeDesc(state,value) {
      state.currentPizza.sizeDesc = value
    },
    setIngNames(state,value) {
      state.currentPizza.nameIng = value
    },
    setCurrentPriceIng(state, value) {
      state.currentPizza.ingPrice = value
    },
    setCurrentDougthPrice(state, value) {
      state.currentPizza.doughtPrice = value
    },
    setCurrentSaucePrice(state, value) {
      state.currentPizza.saucePrice = value
    },
    setDoughtSelector(state, value) {
      state.currentPizza.dought = value
    },
    setSauceSelector(state, value) {
      state.currentPizza.sauce = value
    },
    setIngSelector(state, value) {
      state.currentPizza.ing = {... value};
    },
    setTotalPrice(state, price) {
      state.currentPizza.totalPrice = price;
    },
    setSizeMultiplier(state, value) {
      state.currentPizza.multiplier = value;
    },
    setCurrentName(state, value) {
      state.currentPizza.namePizza = value;
    },
    pushToCart(state, obj) {
      let newObj = {... obj}
      state.cartObj.push(newObj)
    },
    setEditingPizza(state, index) {
      state.pizzaIndex = index;
    }
  },
  actions: {},
}
