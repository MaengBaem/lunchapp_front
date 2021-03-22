import React, { Component } from 'react'
import { Link } from "react-router-dom"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TableChartIcon from '@material-ui/icons/TableChart';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const LinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
}

export default class AdminSide extends Component {
    render() {
        return (
            <>
                <List component="nav">
                    <Link style={LinkStyle} to="/todo-list">
                        <ListItem button>
                            <ListItemIcon>
                                <ListAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="개발 일지" />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <EqualizerIcon />
                        </ListItemIcon>
                        <ListItemText primary="차트 관리" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <TableChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="차트" />
                    </ListItem>
                </List>
                <Divider />
                <Link style={LinkStyle} to="/project-manage">
                    <ListItem button>
                        <ListItemIcon>
                            <AccountTreeIcon />
                        </ListItemIcon>
                        <ListItemText primary="프로젝트 관리" />
                    </ListItem>
                </Link>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="계정 관리" />
                    </ListItem>
                </List>
            </>
        )
    }
}
