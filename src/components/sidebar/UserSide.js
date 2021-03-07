import React, { Component } from 'react'
import { Link } from "react-router-dom"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TableChartIcon from '@material-ui/icons/TableChart';

const LinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
}

export default class UserSide extends Component {
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
                            <TableChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="차트" />
                    </ListItem>
                </List>
            </>
        )
    }
}
