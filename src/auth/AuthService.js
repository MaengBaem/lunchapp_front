import axios from 'axios'
import { withCookies, Cookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import { ADMIN } from "./AuthRole";

class AuthService {
    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        })
    }

    executeHelloService() {
        return axios.get('http://localhost:8080/hello');
    }

    registerSuccessfulLoginForJwt(token) {
        localStorage.setItem('token', token);
        this.setupAxiosInterceptors();
    }

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

    logout() {
        localStorage.removeItem("token");
    }

    isLogin() {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        } else return false;
    }

    isAuthCheck(role) {
        const token = localStorage.getItem("token");
        // 1. 토큰 존재해야 하고,
        if (token) {
            var jwt = jwt_decode(token);
            // 2. 사용자 롤이 컴포넌트 롤과 같거나, 롤이 어드민인 경우
            if (jwt.role === role || jwt.role === ADMIN)
                return true;
            else return false;
        } else {
            // 토큰이 시간지나서 사라지면 axios로 다시 받아오기??
            return false;
        }
    }

    getLoggedInUserRole() {
        let token = localStorage.getItem('token');
        if (token) {
            var jwt = jwt_decode(token);
            return jwt.role;
        }
    }

    getLoggedInUserName() {
        let token = localStorage.getItem('token');
        var jwt = jwt_decode(token);
        return jwt.name;
    }
}

export default new AuthService();
