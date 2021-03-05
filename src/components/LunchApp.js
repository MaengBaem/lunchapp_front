import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthenticatedRoute from '../auth/AuthenticatedRoute.js'
import LoginComponent from './LoginComponent.js'
import HeaderComponent from './HeaderComponent.js'
import LogoutComponent from './LogoutComponent.js'
import WelcomeComponent from './WelcomeComponent.js'
import User from "./User";
import AdminComponent from "./AdminComponent";
import { USER, ADMIN } from "../auth/AuthRole";

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
                            <Route path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} role={USER} />
                            <AuthenticatedRoute path="/admin/" component={AdminComponent} role={ADMIN} />
                            <AuthenticatedRoute path="/user/" component={User} role={USER} />
                            {/* <Route component={ErrorComponent} /> */}
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default LunchApp