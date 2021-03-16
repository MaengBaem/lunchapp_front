import axios from 'axios'
import { ITEM_LIST, ITEM_ADD, GET_PROJECTS } from "./Url";

const URL = "http://localhost:8080";

class GetFunc {
    getTodayList() {
        return axios.get(URL + ITEM_LIST);
    }
    getProjects() {
        return axios.get(URL + GET_PROJECTS);
    }

    // setupAxiosInterceptors() {
    //     axios.interceptors.request.use(
    //         config => {
    //             const token = localStorage.getItem('token');
    //             if (token) {
    //                 config.headers['Authorization'] = 'Bearer ' + token;
    //             }
    //             return config;
    //         },
    //         error => {
    //             Promise.reject(error)
    //         });
    // }
}

export default new GetFunc();
