import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isAuthCheck(this.props.role)) {
            console.log('여기ㄹ')
            return <Route {...this.props.component} />
        } else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRoute