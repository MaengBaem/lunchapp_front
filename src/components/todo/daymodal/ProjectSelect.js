import React, { Component } from 'react'
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';

const SelectStyle = {
    margin: 'theme.spacing(1)',
    minWidth: '230px',
}

const SelectCompo = styled.div`
    display:flex;
    align-items:flex-end;
    margin-bottom:30px;
`;

const ButtonStyle = { marginLeft: '10px' }

export default class ProjectSelect extends Component {
    render() {
        return (
            <SelectCompo>
                <FormControl style={SelectStyle}>
                    <InputLabel id="demo-simple-select-label">Project</InputLabel>
                    <NativeSelect
                        id="demo-simple-select"
                        name="project"
                        onChange={this.props.handleChange}
                        disabled={this.props.isDisable}
                    >
                        {this.props.projectList.map(project => <option key={project.id} value={project.id}>{project.title} </option>)}
                    </NativeSelect>
                </FormControl>
                <Button variant="outlined" color="primary" size="small" style={ButtonStyle} onClick={this.props.selectToggle} >
                    변경
                </Button>
            </SelectCompo>
        )
    }
}
