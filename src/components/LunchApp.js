import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.js'
import LoginComponent from './LoginComponent.js'
import HeaderComponent from './HeaderComponent.js'
import LogoutComponent from './LogoutComponent.js'
import WelcomeComponent from './WelcomeComponent.js'
import { withRouter } from 'react-router'
import { USER, ADMIN, ALL } from "../common/AuthRole";

class LunchApp extends Component {
    render() {
        const HeaderWithRouter = withRouter(HeaderComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <div>
                        <HeaderWithRouter />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} role={USER} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            {/* <Route component={ErrorComponent} /> */}
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default LunchApp