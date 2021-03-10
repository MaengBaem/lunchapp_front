import React, { Component } from 'react'
import styled from 'styled-components';
import TodayList from "../components/todo/TodayList"

const TodoLayOut = styled.div`
    display: flex;
    min-height: 100vh;
    background-color:lightblue;
    justify-content:center;
`;

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectList: ["None", "A 프로젝트", "개인 프로젝트", "CC 프로젝트"],
        }
    }
    render() {
        return (
            <TodoLayOut>
                <TodayList projectList={this.state.projectList} />
            </TodoLayOut>
        )
    }
}
