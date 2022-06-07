import { createStore } from "vuex";

import stocks from "./modules/stocks";
import wallet from './modules/wallet'

export default createStore({
  modules: {
    stocks,
    wallet
  },
});
