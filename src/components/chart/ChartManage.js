import React, { Component } from 'react'
import styled from "styled-components";
import TodayList from '../todo/daymodal/TodayList';

const TodoLayOut = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content:center;
    background-color:black;
`;

export default class ChartManage extends Component {
    render() {
        return (
            <TodoLayOut>
                <TodayList />

            </TodoLayOut>
        )
    }
}
