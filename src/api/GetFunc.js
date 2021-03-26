import axios from 'axios'
import { PROJECT_ALL, COMPANY_ALL, PROJECT_PRV, MEMBER_ALL, MEMBER_PRV } from "./GetUrl";

const URL = "http://localhost:8080";

class GetFunc {

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    allProject() {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.get(URL + PROJECT_ALL, config);
    }

    allCompany() {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.get(URL + COMPANY_ALL, config);
    }

    allProjectMaterial() {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.get(URL + PROJECT_PRV, config);
    }

    allMember() {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.get(URL + MEMBER_ALL, config);
    }

    getRoleList() {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.get(URL + MEMBER_PRV, config);
    }
}

export default new GetFunc();
