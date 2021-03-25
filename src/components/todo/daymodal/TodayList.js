import React, { Component } from "react";
import styled from "styled-components";
import MemoComponent from "./MemoComponent";
import TodoHeader from "./TodoHeader";
import PreComponent from "./PreComponent";
import TodoList from "./TodoList";
import GetFunc from "../../../api/GetFunc";

const TodoLayOut = styled.div`
    position:static;
    background-color:#fff;
    margin-top:15px;
    padding:10px 5px 25px 25px;
    width:800px;
    max-height:800px;
    border-radius : 5px;
    overflow-y:scroll;
`;


export default class TodayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectList: [{ id: "0", title: "None" }],
            isDisable: false,
            todoList: [{ key: 1, text: "첫번째 메모", isComplete: false, children: [] },
            {
                key: 2, text: "두번째 메모", isComplete: true,
                children: [{ key: 3, text: "첫번째 메모-1", isComplete: false, children: [] },
                { key: 4, text: "첫번째 메모-2", isComplete: false, children: [{ key: 5, text: "첫번째 메모-2-1", isComplete: false, children: [] }] }]
            }],
            newItem: { key: "", text: "", isComplete: false }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.selectToggle = this.selectToggle.bind(this);
        this.addItem = this.addItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setNewItem = this.setNewItem.bind(this);
        this.addSubItem = this.addSubItem.bind(this);
        this.test = this.test.bind(this);
        this.saveMaster = this.saveMaster.bind(this);
        this.deleteMaster = this.deleteMaster.bind(this);
        this.copyMaster = this.copyMaster.bind(this);
        this.close = this.close.bind(this);

    }
    componentDidMount() {
        GetFunc.allProject().then(res => {
            if (res.data.result) {
                let projects = [...this.state.projectList, ...res.data.data]
                this.setState({ projectList: projects })
            } else {
                alert(res.data.result);
            }
        })
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
            } else if (item.children) {
                item.children.map(child => {
                    if (child.key === key) {
                        child.text = text;
                    }
                })
            }
        });
        this.setState({
            todoList: todoList
        })
    }

    // 3단계 까지만
    addSubItem = (key) => {
        const newChild = { key: Math.random(), text: "", isComplete: false, children: [] };
        const todoList = this.state.todoList;
        todoList.map((item) => {
            if (item.key === key) {
                item.children = [...item.children, newChild];
            } else if (item.children) {
                item.children.map(child => {
                    if (child.key === key) {
                        child.children = [...child.children, newChild]
                    }
                })
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
        // const filterList = this.state.todoList.filter(item => {item.key !== key);
        const filterList = [];
        this.state.todoList.map(item => {
            if (item.key !== key) {
                const filterChildList = item.children.filter(child => child.key !== key);
                item.children = filterChildList;
                filterList.push(item);
            }
        })
        this.setState({
            todoList: filterList
        })
    }

    test = (item, key) => {
        const result = true;
        for (let i = 0; i < item.children; i++) {
            if (item.children[i].key === key)
                result = false;
        }
        return result;
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

    saveMaster = () => {

    }

    deleteMaster = () => {

    }

    copyMaster = () => {

    }

    close = () => {

    }

    render() {
        return (
            <TodoLayOut>
                <TodoHeader saveTime="2021-03-10 22:02:25" saveMaster={this.saveMaster} deleteMaster={this.deleteMaster} copyMaster={this.copyMaster} close={this.close} />
                <PreComponent handleChange={this.handleChange} projectList={this.state.projectList}
                    isDisable={this.state.isDisable} selectToggle={this.selectToggle} />
                <TodoList todoList={this.state.todoList} setUpdate={this.setUpdate} addItem={this.addItem} addSubItem={this.addSubItem}
                    deleteItem={this.deleteItem} setNewItem={this.setNewItem} newItem={this.state.newItem} checkItem={this.checkItem} />
                <MemoComponent handleChange={this.handleChange} />
            </TodoLayOut>
        )
    }
}
