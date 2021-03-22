import axios from "axios";
import { COMPANY_CREATE, COMPANY_MODIFY, COMPANY_DELETE } from "./PostUrl";

const URL = "http://localhost:8080";

class PostFunc {
    createCompany(companyName) {
        return axios.post(URL + COMPANY_CREATE, {
            companyName: companyName,
        })
    }

    modifyCompany(id, companyName) {
        return axios.post(URL + COMPANY_MODIFY, {
            id: id,
            companyName: companyName,
        })
    }

    deleteCompany(id) {
        return axios.post(URL + COMPANY_DELETE, {
            id: id,
        })
    }

}

export default new PostFunc();
