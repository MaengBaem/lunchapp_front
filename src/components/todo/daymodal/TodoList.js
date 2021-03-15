import React, { Component } from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';
import AddItem from "./AddItem";

const ListComponent = styled.div`
    position:static;
    margin-right : 10px;
    margin-bottom : 10px;
`;

export default class TodoList extends Component {
    render() {
        const todoList = this.props.todoList;
        return (
            <ListComponent>
                {todoList && todoList.map((item, index) =>
                    <TodoItem key={index} item={item} setUpdate={this.props.setUpdate}
                        addSubItem={this.props.addSubItem} deleteItem={this.props.deleteItem} checkItem={this.props.checkItem}
                    />)}
                <AddItem item={this.props.newItem} addItem={this.props.addItem} setNewItem={this.props.setNewItem} />
            </ListComponent>
        )
    }
}
