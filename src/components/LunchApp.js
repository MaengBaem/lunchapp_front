import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import AuthenticatedRoute from '../auth/AuthenticatedRoute.js'
import HeaderComponent from './header/HeaderComponent';
import LoginComponent from "./LoginComponent";
import LogoutComponent from './LogoutComponent.js'
import WelcomeComponent from './WelcomeComponent.js';
import LunchChart from "../pages/LunchChart";
import LunchManage from "../pages/LunchManage";
import ToDoList from "../pages/ToDoList";
import { USER, ADMIN } from "../auth/AuthRole";
import SideComponent from './sidebar/SideComponent.js';


const Main = styled.div`
    display:flex;
    min-height: 100vh;
    `;

const MainComponent = styled.div`
    width:100%;
`;

class LunchApp extends Component {
    render() {
        const HeaderWithRouter = withRouter(HeaderComponent);
        return (
            <Router>
                <HeaderWithRouter />
                <Main>
                    <SideComponent />
                    <MainComponent>
                        <Switch>
                            <Route path="/" exact component={LunchChart} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/lunch-manage" component={LunchManage} role={ADMIN} />
                            <AuthenticatedRoute path="/todo-list" component={ToDoList} role={USER} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} role={USER} />
                            {/* <Route component={ErrorComponent} /> */}
                        </Switch>
                    </MainComponent>
                </Main>
            </Router>
        )
    }
}

export default LunchApp