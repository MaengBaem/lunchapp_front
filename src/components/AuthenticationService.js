import axios from 'axios'
import jwt_decode from "jwt-decode";

class AuthenticationService {
    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        })
    }

    executeHelloService() {
        return axios.get('http://localhost:8080/hello');
    }

    registerSuccessfulLoginForJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', username);
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
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    isAuthCheck(role) {
        const token = localStorage.getItem('token');
        if (token) {
            var decoded = jwt_decode(token);
            return true;
        }
        return false;
    }

    isAuthCheck(role) {
        const token = localStorage.getItem('token');
        if (token) {
            var jwt = jwt_decode(token);
            if (jwt.role === role)
                return true;
        }
        return false;
    }

    getLoggedInUserName() {
        let user = localStorage.getItem('authenticatedUser');
        if (user === null) return '';
        return user;
    }
}

export default new AuthenticationService();
