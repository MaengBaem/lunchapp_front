import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class LoginRoute extends Component {
    constructor(props) {
        super(props)
        this.isLogin = this.isLogin.bind(this)
    }
    isLogin() {
        // 토큰 있는데 로그인 하려고 하면 메인으로
        const token = localStorage.getItem("token");
        if (token) {
            return false;
        } else
            return true;
    }

    render() {
        if (this.isLogin()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/" />
        }
    }
}
