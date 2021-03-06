import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import AuthenticationService from '../../auth/AuthenticationService.js'
import UserConfig from './UserConfig.js';
import Menus from './Menus.js';

const Header = styled.header`
    border-bottom:1px solid red;
    padding : 15px 30px 20px 30px;
    margin-bottom: 20px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    `;

const Side = styled.div`
    display:flex;
`;

const Logo = styled.div`
    font-size:30px;
    font-weight:800;
    display: flex;
    align-items: center;
`;

const LinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
}

const loginStyle = {
    fontSize: '18px',
}

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const isUserLoggedIn = AuthenticationService.isLogin();
        return (
            <Header>
                <Side>
                    <Logo><Link to="/" style={LinkStyle}>Lunch App</Link></Logo>
                    {isUserLoggedIn && <Menus />}
                </Side>
                <Side>
                    {isUserLoggedIn ? <UserConfig /> : <Link to="/login" style={LinkStyle}><Button style={loginStyle}>로그인</Button></Link>}
                </Side>
            </Header >
        )
    }
}