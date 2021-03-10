import React, { Component } from 'react'
import styled from 'styled-components';
import MemoComponent from './MemoComponent';
import TodoHeader from './TodoHeader';
import PreComponent from './PreComponent';
import List from "./List"

const TodoLayOut = styled.div`
    position:static;
    background-color:#fff;
    padding:10px 5px 25px 25px;
    width:800px;
    height:800px;
    overflow-y:scroll;
`;

export default class TodayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisable: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.selectToggle = this.selectToggle.bind(this)
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

    selectToggle = (e) => {
        this.setState(
            { isDisable: !this.state.isDisable }
        )
    }

    render() {
        return (
            <TodoLayOut>
                <TodoHeader saveTime="2021-03-10 22:02:25" />
                <PreComponent handleChange={this.handleChange} projectList={this.props.projectList} isDisable={this.state.isDisable} selectToggle={this.selectToggle} />
                <List />
                <MemoComponent handleChange={this.handleChange} />
            </TodoLayOut>
        )
    }
}
