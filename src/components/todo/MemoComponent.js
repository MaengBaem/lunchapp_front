import React, { Component } from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const MemoCompo = styled.div`
   position: relative;
    bottom:0;
`;

export default class MemoComponent extends Component {
    render() {
        return (
            <MemoCompo>
                <TextField
                    id="outlined-multiline-static"
                    name="memo"
                    label="Memo"
                    multiline
                    rows={8}
                    variant="outlined"
                    fullWidth={true}
                    onChange={this.props.handleChange}
                />
            </MemoCompo>
        )
    }
}
