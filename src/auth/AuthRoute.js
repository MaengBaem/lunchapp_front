import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from "./AuthService";

class AuthRoute extends Component {
    render() {
        if (AuthService.isAuthCheck(this.props.role)) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default AuthRoute