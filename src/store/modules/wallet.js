import { useToast } from "vue-toastification";

export default {
  state: {
    toast: useToast(),
    balance: 1000,
    stocks: [],
  },
  mutations: {
    setStockWallet(state, order) {
        if(state.balance > ((order.data.close).toFixed(2) * order.quantity)){
            let exists = state.stocks.findIndex(element => element.stock === order.data.stock)
            console.log(exists)
            if(exists !== -1) {
                state.stocks[exists].quantity += order.quantity;
            } else {
                order.data.quantity = order.quantity;
                state.stocks.push(order.data)
            }
            state.balance -= ((order.data.close).toFixed(2) * order.quantity);
        } else {
            state.toast.error(`Você não possui saldo suficiente para realizar a compra. Adicione ${((order.data.close).toFixed(2) * order.quantity)} em sua carteira e tente novamente.`)
        }
    },
  },
  actions: {
    buyStock({ commit }, order) {
        commit('setStockWallet', order)
    },
  },
};
