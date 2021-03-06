import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthenticatedRoute from '../auth/AuthenticatedRoute.js'
import LoginComponent from './LoginComponent.js'
import HeaderComponent from './header/HeaderComponent.js'
import LogoutComponent from './LogoutComponent.js'
import WelcomeComponent from './WelcomeComponent.js';
import LunchChart from "../pages/LunchChart";
import LunchManage from "../pages/LunchManage";
import ToDoList from "../pages/ToDoList";
import { USER, ADMIN } from "../auth/AuthRole";


class LunchApp extends Component {
    render() {
        const HeaderWithRouter = withRouter(HeaderComponent);
        return (
            <Router>
                <HeaderWithRouter />
                <Switch>
                    <Route path="/" exact component={LunchChart} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/logout" component={LogoutComponent} />
                    <AuthenticatedRoute path="/lunch-manage" component={LunchManage} role={ADMIN} />
                    <AuthenticatedRoute path="/todo-list" component={ToDoList} role={USER} />
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} role={USER} />
                    {/* <Route component={ErrorComponent} /> */}
                </Switch>
            </Router>
        )
    }
}

export default LunchApp