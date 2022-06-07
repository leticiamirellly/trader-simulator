import axios from 'axios';

const defaultConfigs = {
    apiAddress: {
        baseURL: process.env.VUE_APP_BASE_URL
    }
}

const api = axios.create({
    baseURL: `${defaultConfigs.apiAddress.baseURL}/`,
    timeout: 3000 
});

export default api;