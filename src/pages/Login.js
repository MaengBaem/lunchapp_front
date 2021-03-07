import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default class Login extends Component {
    render() {
        return (
            <div style={{ flex: '1', justifyContent: 'center', alignItems: 'center' }}>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>
            </div>
        )
    }
}
