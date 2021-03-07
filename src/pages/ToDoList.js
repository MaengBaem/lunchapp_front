import React, { Component } from 'react'


const todoStyle = {
    fontSize: '18px',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
}

export default class ToDoList extends Component {
    render() {
        return (
            <div style={todoStyle}>
                todoList
            </div>
        )
    }
}
