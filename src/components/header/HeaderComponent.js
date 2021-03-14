import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import AuthenticationService from '../../auth/AuthService.js'
import UserConfig from './UserConfig.js';

const Header = styled.header`
    border-bottom:1px solid red;
    padding : 10px 30px 10px 30px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    display: ${(props) => (props.isUserLoggedIn ? 'auto' : 'none')};
    `;

const Side = styled.div`
    display:flex;
`;

const Logo = styled.div`
    font-size:24px;
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

class HeaderComponent extends Component {
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
            <>
                <Header isUserLoggedIn={isUserLoggedIn}>
                    <Side>
                        <Logo><Link to="/" style={LinkStyle}>Lunch App</Link></Logo>
                    </Side>
                    <Side>
                        {isUserLoggedIn
                            ? <UserConfig />
                            : window.location.href !== "http://localhost:3000/login"
                                ? <Link to="/login" style={LinkStyle}><Button style={loginStyle}>로그인</Button></Link>
                                : null}
                    </Side>
                </Header >
            </>
        )
    }
}
export default withRouter(HeaderComponent);