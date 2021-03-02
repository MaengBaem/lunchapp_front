import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import { ALL } from "../common/AuthRole";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isAuthCheck(ALL);
        return (
            <header style={{ borderBottom: '1px solid red', marginBottom: '10px', padding: '10px' }}>
                <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="navbar-title"><h1>Lunch app</h1></div>
                    <ul className="navbar-nav">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent