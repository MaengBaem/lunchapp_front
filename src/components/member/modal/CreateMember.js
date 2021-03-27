import React, { Component } from 'react'
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect'

const selectStyle = {
    margin: 'theme.spacing(1)',
    minWidth: '230px',
    marginBottom: "30px"
}
const common = {
    marginBottom: "30px"
}

const Form = styled.form`
    display:flex;
    flex-direction : column;
`;

export default class CreateMember extends Component {
    render() {
        let prevInfo = this.props.prevInfo;
        return (
            <Form>
                <TextField
                    autoFocus
                    margin="dense"
                    id="userName"
                    label="Name"
                    type="text"
                    fullWidth
                    onChange={this.props.onHandleChange}
                    value={prevInfo && prevInfo.userName}
                    style={common}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    onChange={this.props.onHandleChange}
                    value={prevInfo && prevInfo.email}
                    style={common}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="4자 이상"
                    fullWidth
                    onChange={this.props.onHandleChange}
                    style={common}
                />
                <FormControl style={selectStyle}>
                    <NativeSelect
                        id="roleId"
                        onChange={this.props.onHandleChange}
                        defaultValue={prevInfo && prevInfo.roleId}
                    >
                        {this.props.roleList.map(role => <option key={role.id} value={role.id}>{role.value} </option>)}
                    </NativeSelect>
                </FormControl>
            </Form>
        )
    }
}
