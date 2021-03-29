import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import styled from 'styled-components'
import AuthenticationService from '../../auth/AuthService.js'
import { ADMIN } from "../../auth/AuthRole";
import AdminSide from './AdminSide.js';
import UserSide from './UserSide.js';

const Side = styled.div`
    width: 200px;
    min-width: 200px;
    padding-left: 10px;
    display: ${(props) => (props.isUserLoggedIn ? 'auto' : 'none')};
    `;

class SideComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const isUserLoggedIn = AuthenticationService.isLogin();
        const userRole = AuthenticationService.getLoggedInUserRole();
        return (
            <>
                <Side isUserLoggedIn={isUserLoggedIn}>
                    {userRole === ADMIN
                        ? <AdminSide />
                        : <UserSide />}
                </Side>
            </>
        )
    }
}
export default withRouter(SideComponent);