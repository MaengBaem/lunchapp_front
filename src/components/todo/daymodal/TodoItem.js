import React, { Component } from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckIcon from '@material-ui/icons/Check';

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
    &:active {
        transform: scale(0.9);
      }
`;


export default class TodoItem extends Component {
    render() {
        const textStyle = {
            width: '100%',
            textDecoration: this.props.item.isComplete ? 'line-through' : 'none'
        }
        const key = this.props.item.key;
        return (
            <>
                <ItemCompo>
                    <TextField label="To do..." name="desc" style={TextStyle} multiline rowsMax={3}
                        style={textStyle}
                        onChange={(e) => { this.props.setUpdate(e.target.value, key) }} value={this.props.item.text} />
                    <ItemButton style={{ height: '40px' }} onClick={() => { this.props.deleteItem(key) }}>
                        <DeleteOutlineIcon fontSize="large" />
                    </ItemButton>
                    <ItemButton style={{ height: '40px' }} onClick={() => this.props.checkItem(key)}>
                        <CheckIcon fontSize="large" />
                    </ItemButton>
                </ItemCompo>
            </>
        )
    }
}
