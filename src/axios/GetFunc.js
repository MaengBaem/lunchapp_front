import axios from 'axios'
import { ITEM_LIST } from "./Url";

const URL = "http://localhost:8080";

class GetFunc {
    getTodayList() {
        return axios.get(URL + ITEM_LIST);
    }
}

export default new GetFunc();
