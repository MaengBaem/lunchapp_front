import React, { Component } from 'react'
import styled from 'styled-components'
import AuthenticationService from '../../auth/AuthenticationService.js'
import { ADMIN } from "../../auth/AuthRole";
import AdminSide from './AdminSide.js';
import UserSide from './UserSide.js';

const Side = styled.header`
    width:10%;
    padding-left: 10px;
    `;

export default class SideComponent extends Component {

    render() {
        const userRole = AuthenticationService.getLoggedInUserRole();
        return (
            <Side>
                {/* ADMIN : TABLE, TODO, USERMANAGE */}
                {userRole === ADMIN
                    ? <AdminSide />
                    : <UserSide />}

            </Side>
        )
    }
}
