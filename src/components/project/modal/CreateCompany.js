import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default class CreateCompany extends Component {
    render() {
        return (
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Company Name"
                type="text"
                fullWidth
                onChange={this.props.onCompanyChange}
                value={this.props.prevInfo && this.props.prevInfo}
            />
        )
    }
}
