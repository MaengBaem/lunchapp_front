import axios from "axios";
import { COMPANY_CREATE, COMPANY_MODIFY, COMPANY_DELETE, PROJECT_CREATE, PROJECT_MODIFY, PROJECT_DELETE, MEMBER_DELETE, MEMBER_CREATE, MEMBER_MODIFY } from "./PostUrl";

const URL = "http://localhost:8080";

class PostFunc {
    createCompany(companyName) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + COMPANY_CREATE, {
            companyName: companyName,
        }, config)
    }

    modifyCompany(id, companyName) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + COMPANY_MODIFY, {
            id: id,
            companyName: companyName,
        }, config)
    }

    deleteCompany(id) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + COMPANY_DELETE, {
            id: id,
        }, config)
    }

    createProject(info) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + PROJECT_CREATE,
            info
            , config)
    }

    modifyProject(info) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + PROJECT_MODIFY,
            info
            , config)
    }

    deleteProject(id) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + PROJECT_DELETE, {
            id: id,
        }, config)
    }

    createMember(info) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + MEMBER_CREATE,
            info
            , config)
    }

    modifyMember(info) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + MEMBER_MODIFY,
            info
            , config)
    }

    deleteMember(id) {
        const token = localStorage.getItem('token');
        let config = {
            headers: { Authorization: 'Bearer ' + token }
        }
        return axios.post(URL + MEMBER_DELETE, {
            id: id,
        }, config)
    }
}

export default new PostFunc();
