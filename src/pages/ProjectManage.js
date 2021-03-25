import React, { Component } from 'react'
import styled from "styled-components";
import CompanyMangement from '../components/project/company/CompanyMangement';
import ProjectManagement from '../components/project/project/ProjectManagement';

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
                <ProjectManagement />
                <CompanyMangement />
            </ProjectLayOut>
        )
    }
}
