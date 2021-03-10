import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import LoginRoute from "../auth/LoginRoute";
import AuthRoute from '../auth/AuthRoute.js'
import HeaderComponent from './header/HeaderComponent';
import LoginComponent from "./LoginComponent";
import WelcomeComponent from './WelcomeComponent.js';
import LunchChart from "../pages/LunchChart";
import LunchManage from "../pages/LunchManage";
import ToDoPage from "../pages/ToDoPage";
import { USER, ADMIN } from "../auth/AuthRole";
import SideComponent from './sidebar/SideComponent.js';


const Main = styled.div`
    display:flex;
    min-height: 100vh;
    `;

const MainComponent = styled.div`
    width:85%;
`;

class LunchApp extends Component {
    render() {
        const HeaderWithRouter = withRouter(HeaderComponent);
        const SideithRouter = withRouter(SideComponent);
        return (
            <Router>
                <HeaderWithRouter />
                <Main>
                    <SideithRouter />
                    <MainComponent>
                        <Switch>
                            <AuthRoute exact path="/" component={LunchChart} role={USER} />
                            <LoginRoute exact path="/login" component={LoginComponent} />
                            <AuthRoute exact path="/lunch-manage" component={LunchManage} role={ADMIN} />
                            <AuthRoute exact path="/todo-list" component={ToDoPage} role={USER} />
                            <AuthRoute exact path="/welcome/:name" component={WelcomeComponent} role={USER} />
                            {/* <Route component={ErrorComponent} /> */}
                        </Switch>
                    </MainComponent>
                </Main>
            </Router>
        )
    }
}

export default LunchApp