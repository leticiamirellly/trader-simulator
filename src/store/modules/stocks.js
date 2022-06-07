import _stocks from "../../http/stocks";

export default {
  state: {
    stocks: [],
    currentsStocks: []
  },
  mutations: {
    setStocks (state, stocks) {
      state.stocks = stocks;
    },
    setCurrentsStocks (state, currentsStocks) {
      state.currentsStocks = currentsStocks;
    }
  },
  actions: {
    async getStocks({commit}, _searchData) {
      const response = await _stocks.getStocks(_searchData);
      commit('setStocks', response.data);
      commit('setCurrentsStocks', response.data.stocks.slice(0,8));
      return response.data;
    },
  },
  getters: {
    getStocks: (state) => state.stocks,
    getCurrentsStocks: (state) => state.currentsStocks,
  }
};
