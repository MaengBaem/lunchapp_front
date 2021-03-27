import Axios from "./Axios";
import {
    LOGIN, LOGOUT,
    COMPANY_CREATE, COMPANY_MODIFY, COMPANY_DELETE,
    PROJECT_CREATE, PROJECT_MODIFY, PROJECT_DELETE,
    MEMBER_DELETE, MEMBER_CREATE, MEMBER_MODIFY
} from "./PostUrl";


const POST = "post";

export default {
    login(username, password) {
        let data = { username, password };
        return Axios({ url: LOGIN, method: POST, data: data });
    },
    logout(userId) {
        let data = { userId }
        return Axios({ url: LOGOUT, method: POST, data: data });
    },
    createCompany(companyName) {
        let data = { companyName };
        return Axios({ url: COMPANY_CREATE, method: POST, data: data });
    },
    modifyCompany(id, companyName) {
        let data = { id, companyName }
        return Axios({ url: COMPANY_MODIFY, method: POST, data: data });
    },
    deleteCompany(id) {
        let data = { id }
        return Axios({ url: COMPANY_DELETE, method: POST, data: data });
    },
    createProject(info) {
        return Axios({ url: PROJECT_CREATE, method: POST, data: info });
    },
    modifyProject(info) {
        return Axios({ url: PROJECT_MODIFY, method: POST, data: info });
    },
    deleteProject(id) {
        let data = { id }
        return Axios({ url: PROJECT_DELETE, method: POST, data: data });
    },
    createMember(info) {
        return Axios({ url: MEMBER_CREATE, method: POST, data: info });
    },

    modifyMember(info) {
        return Axios({ url: MEMBER_MODIFY, method: POST, data: info });
    },
    deleteMember(id) {
        let data = { id }
        return Axios({ url: MEMBER_DELETE, method: POST, data: data });
    }
}
