import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import styled from 'styled-components'
import AuthenticationService from '../../auth/AuthService.js'
import { ADMIN } from "../../auth/AuthRole";
import AdminSide from './AdminSide.js';
import UserSide from './UserSide.js';

const Side = styled.div`
    width:10%;
    padding-left: 10px;
    `;

class SideComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const isUserLoggedIn = AuthenticationService.isLogin();
        const userRole = AuthenticationService.getLoggedInUserRole();
        return (
            <Side>
                {/* ADMIN : TABLE, TODO, USERMANAGE */}
                {!isUserLoggedIn ? null
                    : userRole === ADMIN
                        ? <AdminSide />
                        : <UserSide />}
            </Side>
        )
    }
}
export default withRouter(SideComponent);