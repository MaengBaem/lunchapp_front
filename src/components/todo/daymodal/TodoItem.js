import React, { Component } from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AdjustIcon from '@material-ui/icons/Adjust';

const ItemCompo = styled.div`
    display : flex;
    align-items:flex-end;
    margin-bottom:20px;
    `;

const TextStyle = {
    minWidth: '90%',
    marginLeft: '120px',
    marginRight: '30px'
}


const ItemButton = styled.div`
    cursor: pointer;
    &:hover{
        opacity:0.7;
    }
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
        const item = this.props.item;
        return (
            <div style={{ marginLeft: this.props.sub ? '30px' : 0, }}>
                <ItemCompo>
                    {this.props.sub ? <ChevronRightIcon /> : <AdjustIcon />}
                    <TextField label="To do..." name="desc" style={TextStyle} multiline rowsMax={3}
                        style={textStyle}
                        onChange={(e) => { this.props.setUpdate(e.target.value, key) }} value={item.text} />
                    <ItemButton style={{ height: '40px' }} onClick={() => { this.props.addSubItem(key) }}>
                        <AddIcon fontSize="large" />
                    </ItemButton>
                    <ItemButton style={{ height: '40px' }} onClick={() => { this.props.deleteItem(key) }}>
                        <DeleteOutlineIcon fontSize="large" />
                    </ItemButton>
                    <ItemButton style={{ height: '40px' }} onClick={() => this.props.checkItem(key)}>
                        <CheckIcon fontSize="large" />
                    </ItemButton>
                </ItemCompo>
                {item.children && item.children.length > 0 &&
                    item.children.map((item, index) => <TodoItem key={index} item={item} setUpdate={this.props.setUpdate}
                        addSubItem={this.props.addSubItem} deleteItem={this.props.deleteItem} checkItem={this.props.checkItem} sub={true} />)}
            </div>
        )
    }
}
