import _http from './http';
import {useToast} from 'vue-toastification';

class _stocks {
    async getStockByTicker(_ticker) {
        return new Promise((resolve, reject) => {
            _http.get(`api/quote/${_ticker}`).then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
    async getStocks() {
        return new Promise((resolve, reject) => {
            _http.get(`api/quote/list`).then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}


export default new _stocks();