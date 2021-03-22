import axios from 'axios'
import { PROJECT_ALL, COMPANY_ALL } from "./GetUrl";

const URL = "http://localhost:8080";

class GetFunc {
    allProject() {
        return axios.get(URL + PROJECT_ALL);
    }
    allCompany() {
        return axios.get(URL + COMPANY_ALL);
    }
}

export default new GetFunc();
