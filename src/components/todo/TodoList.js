import React, { Component } from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';

const ListComponent = styled.div`
    position:static;
    margin-right : 10px;
    margin-bottom : 10px;
    background-color:lightgreen;
`;

export default class TodoList extends Component {
    render() {
        return (
            <ListComponent>
                <TodoItem />
            </ListComponent>
        )
    }
}
