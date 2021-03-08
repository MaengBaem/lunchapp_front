import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Menu, MenuItem } from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthenticationService from '../../auth/AuthService.js'

class UserConfig extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.logout = this.logout.bind(this)
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    logout = () => {
        AuthenticationService.logout();
        this.props.history.push('/login');
    }
    render() {
        return (
            <>
                <Button onClick={this.handleClick}>
                    {AuthenticationService.getLoggedInUserName() + '님'}
                </Button>
                <Menu
                    elevation={0}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    id="customized-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.logout}>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="LogOut" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <PermIdentityIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="내정보" />
                    </MenuItem>
                </Menu>
            </>
        )
    }
}
export default withRouter(UserConfig);
