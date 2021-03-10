import React, { Component } from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import ProjectSelect from "./ProjectSelect";

const PreCompo = styled.div`
    width:500px;
    margin-bottom:20px;
`;

const CreateDate = styled.div`
    border-radius:3px;
    padding:5px;
    margin-top:30px;
    width:180px;
`;

export default class PreComponent extends Component {
    render() {
        return (
            <PreCompo>
                <ProjectSelect handleChange={this.props.handleChange} projectList={this.props.projectList} isDisable={this.props.isDisable} selectToggle={this.props.selectToggle} />
                <CreateDate>2021-03-10 22:54:30</CreateDate>
                <TextField id="standard-basic" name="title" label="Title" inputProps={{ style: { fontSize: 30 } }} onChange={this.props.handleChange} />
            </PreCompo>
        )
    }
}
