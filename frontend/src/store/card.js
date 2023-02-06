export default {
    state: {
        cardProduct: []
    },
    getters: {
        getAllPhotos(state) {
            return state.cardProduct
        }
    },
    mutations: {
        setCarProduct(state, payload) {
            state.cardProduct = payload
        }
    },
    actions: {
    },
}
