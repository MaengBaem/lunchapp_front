import React, { Component } from 'react'
import styled from "styled-components";
import CompanyContainer from '../components/project/company/CompanyContainer';
import ProjectContainer from '../components/project/project/ProjectContainer';

const ProjectLayOut = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction : column;
    justify-content:center;
    background-color:black;
`;

export default class ProjectManage extends Component {
    render() {
        return (
            <ProjectLayOut>
                <ProjectContainer />
                <CompanyContainer />
            </ProjectLayOut>
        )
    }
}
