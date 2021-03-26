import React, { Component } from 'react'
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const selectStyle = {
    margin: 'theme.spacing(1)',
    minWidth: '230px',
    marginBottom: "30px"
}

const Form = styled.form`
    display:flex;
    flex-direction : column;
`;

const common = {
    marginBottom: "30px"
}

export default class CreateProject extends Component {
    render() {
        let prevInfo = this.props.prevInfo;
        return (
            <Form>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="프로젝트명"
                    fullWidth
                    onChange={this.props.onHandleChange}
                    value={prevInfo && prevInfo.title}
                    style={common}
                />
                <TextField
                    margin="dense"
                    variant="outlined"
                    id="desc"
                    fullWidth
                    multiline
                    rows={4}
                    label="설명"
                    onChange={this.props.onHandleChange}
                    value={prevInfo && prevInfo.desc}
                    style={common}
                />
                <TextField
                    margin="dense"
                    id="startDate"
                    label="시작일"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={prevInfo && prevInfo.startDate}
                    onChange={this.props.onHandleChange}
                    style={common}
                />
                <TextField
                    margin="dense"
                    id="endDate"
                    label="종료일"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={prevInfo && prevInfo.endDate}
                    onChange={this.props.onHandleChange}
                    style={common}
                />
                <FormControl style={selectStyle}>
                    <NativeSelect
                        id="companyId"
                        onChange={this.props.onHandleChange}
                        defaultValue={prevInfo && prevInfo.companyId}
                    >
                        {this.props.companyList.map(company => <option key={company.id} value={company.id}>{company.value} </option>)}
                    </NativeSelect>
                </FormControl>
                <FormControl style={selectStyle}>
                    <NativeSelect
                        id="statusId"
                        onChange={this.props.onHandleChange}
                        defaultValue={prevInfo && prevInfo.statusId}
                    >
                        {this.props.statusList.map(status => <option key={status.id} value={status.id}>{status.value} </option>)}
                    </NativeSelect>
                </FormControl>
            </Form>
        )
    }
}
