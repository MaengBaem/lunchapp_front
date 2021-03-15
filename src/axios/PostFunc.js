import axios from 'axios'
import { ITEM_ADD, ITEM_LIST } from "./Url";

const URL = "http://localhost:8080";

class PostFunc {
    addItem(username, password) {
        return axios.post(URL + ITEM_ADD, {
            username,
            password
        })
    }
    getTodayList() {
        return axios.post(URL + ITEM_LIST);
    }
}

export default new PostFunc();
