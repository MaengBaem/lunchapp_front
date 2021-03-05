import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from '../auth/AuthenticationService.js'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isLogin();
        return (
            <header style={{ borderBottom: '1px solid red', marginBottom: '30px', padding: '10px' }}>
                <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="navbar-title"><h1>Lunch app</h1></div>
                    <div className="navbar-title"><h2>{isUserLoggedIn && AuthenticationService.getLoggedInUserName() + "님 환영합니다"}</h2></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/user">사용자용</Link></li>
                        <li><Link className="nav-link" to="/admin">관리자용</Link></li>
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent