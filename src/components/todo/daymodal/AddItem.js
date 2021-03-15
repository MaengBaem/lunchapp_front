import React, { Component } from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const TextStyle = {
    minWidth: '90%',
    marginRight: '30px'
}

const ItemCompo = styled.div`
    display : flex;
    align-items:flex-end;
    margin-bottom:20px;
`;

const ItemButton = styled.div`
    cursor: pointer;
    &:hover{
        opacity:0.7;
    }
    &:active {
        transform: scale(0.9);
      }
`;
export default class AddItem extends Component {
    render() {
        return (
            <>
                <ItemCompo>
                    <TextField label="To do..." name="desc" style={TextStyle} multiline rowsMax={3} onChange={this.props.setNewItem} value={this.props.item.text} />
                    <ItemButton style={{ height: '40px' }} onClick={this.props.addItem}><AddCircleOutlineIcon fontSize="large" /></ItemButton>
                </ItemCompo>
            </>
        )
    }
}
