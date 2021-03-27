import Axios from "./Axios";
import { PROJECT_ALL, COMPANY_ALL, PROJECT_PRV, MEMBER_ALL, MEMBER_PRV } from "./GetUrl";

const GET = "get";

export default {
    allProject() {
        return Axios({ url: PROJECT_ALL, method: GET });
    },
    allCompany() {
        return Axios({ url: COMPANY_ALL, method: GET });
    },
    allProjectMaterial() {
        return Axios({ url: PROJECT_PRV, method: GET });
    },
    allMember() {
        return Axios({ url: MEMBER_ALL, method: GET });
    },
    getRoleList() {
        return Axios({ url: MEMBER_PRV, method: GET });
    }
}