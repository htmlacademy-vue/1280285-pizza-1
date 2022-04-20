export default {
    state: {
        isAuthorized: false
    },
    getters: {
        isAuthorizedUser(state) {
            return state.isAuthorized
        }
    }
  }
  