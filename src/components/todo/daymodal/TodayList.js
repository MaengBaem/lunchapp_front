import React, { Component } from 'react'
import styled from 'styled-components';
import MemoComponent from './MemoComponent';
import TodoHeader from './TodoHeader';
import PreComponent from './PreComponent';
import TodoList from "./TodoList"

const TodoLayOut = styled.div`
    position:static;
    background-color:#fff;
    padding:10px 5px 25px 25px;
    width:800px;
    max-height:800px;
    overflow-y:scroll;
`;

export default class TodayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisable: false,
            todoList: [{ key: 1, text: "첫번째 메모", isComplete: false, }, { key: 2, text: "두번째 메모", isComplete: true, }],
            newItem: { key: "", text: "", isComplete: false }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.selectToggle = this.selectToggle.bind(this);
        this.addItem = this.addItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setNewItem = this.setNewItem.bind(this);
    }

    handleChange(event) {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }

    handleKeyPress = (e) => {
        if (e.altKey && e.key === "Enter") {
            console.log('저장!');
        }
    };

    selectToggle = () => {
        this.setState(
            { isDisable: !this.state.isDisable }
        )
    }

    setUpdate = (text, key) => {
        const todoList = this.state.todoList;
        todoList.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        });
        this.setState({
            todoList: todoList
        })
    }

    addItem = () => {
        if (this.state.newItem.text !== "") {
            const newItem = { ...this.state.newItem, key: Math.random() }
            const newTodoList = [...this.state.todoList, newItem];
            this.setState({
                todoList: newTodoList,
                newItem: { key: "", text: "", isComplete: false }
            })
        }
    }

    setNewItem = (e) => {
        const newItem = { ...this.state.newItem, text: e.target.value }
        this.setState({
            newItem: newItem
        })
    }

    deleteItem = (key) => {
        const filterList = this.state.todoList.filter(item => item.key !== key);
        this.setState({
            todoList: filterList
        })
    }

    checkItem = (key) => {
        const todoList = this.state.todoList;
        todoList.map(item => {
            if (item.key === key) {
                item.isComplete = !item.isComplete;
            }
        });
        this.setState({
            todoList: todoList
        })
    }

    render() {
        return (
            <TodoLayOut>
                <TodoHeader saveTime="2021-03-10 22:02:25" />
                <PreComponent handleChange={this.handleChange} projectList={this.props.projectList}
                    isDisable={this.state.isDisable} selectToggle={this.selectToggle} />
                <TodoList todoList={this.state.todoList} setUpdate={this.setUpdate} addItem={this.addItem}
                    deleteItem={this.deleteItem} setNewItem={this.setNewItem} newItem={this.state.newItem} checkItem={this.checkItem} />
                <MemoComponent handleChange={this.handleChange} />
            </TodoLayOut>
        )
    }
}
