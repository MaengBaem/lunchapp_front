import React, { Component } from "react"
import styled from "styled-components";
import TodayList from "../components/todo/daymodal/TodayList";
import GetFunc from "../api/GetFunc";

const TodoLayOut = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content:center;
    background-color:black;
`;

export default class ToDoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectList: [{ key: 0, value: "None" }],
        }
    }
    componentDidMount() {
        GetFunc.getProjects().then(res => {
            if (res.data.result) {
                console.log(res.data.data)
                let projects = [...this.state.projectList, ...res.data.data]
                this.setState({ projectList: projects })
            } else {
                alert(res.data.result);
            }
        })
    }
    render() {
        return (
            <TodoLayOut>
                <TodayList projectList={this.state.projectList} />
            </TodoLayOut>
        )
    }
}
