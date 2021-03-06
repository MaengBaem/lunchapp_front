import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import AuthenticationService from '../../auth/AuthenticationService.js'
import { ADMIN } from "../../auth/AuthRole";

const Menu = styled.div`
    margin-left:40px;
    display:flex;
`;

const LinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
}

const buttonStyle = {
    fontSize: '22px',
}

export default class Menus extends Component {
    render() {
        const userRole = AuthenticationService.getLoggedInUserRole();
        return (
            <Menu>
                {userRole === ADMIN
                    ? <>
                        <Link style={LinkStyle} to="/lunch-manage"><Button style={buttonStyle}>TABLE</Button></Link>
                        <Link style={LinkStyle} to="todo-list"><Button style={buttonStyle}>TODO</Button></Link>
                    </>
                    : <>
                        <Link style={LinkStyle} to="todo-list"><Button style={buttonStyle}>TODO</Button></Link>
                    </>
                }
            </Menu>
        )
    }
}
