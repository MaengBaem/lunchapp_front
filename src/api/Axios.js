
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
});

instance.interceptors.request.use(
    function (config) {
        config.headers["Content-Type"] = "application/json; charset=utf-8";
        const token = localStorage.getItem('token');
        if (token)
            config.headers["Authorization"] = 'Bearer ' + token;
        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);

export default instance;