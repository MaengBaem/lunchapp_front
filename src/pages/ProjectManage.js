import React, { Component } from 'react'
import styled from "styled-components";
import GetFunc from '../api/GetFunc';
import CompanyMangement from '../components/project/company/CompanyMangement';
import DialogModal from '../components/project/modal/DialogModal';
import ProjectComponent from '../components/project/project/ProjectManagement'

const ProjectLayOut = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content:center;
    background-color:black;
`;

export default class ProjectManage extends Component {
    constructor() {
        super();
        this.state = {
            projectList: [],
            companyList: [],
            open: false,
            modalType: "",
            modalTitle: "",
            companyName: "",
        }

    }

    componentDidMount() {
        GetFunc.allProject().then(res => {
            if (res.data.result) {
                this.setState({ projectList: res.data.data })
            } else {
                alert(res.data.result);
            }
        })
    }


    createProejct() {
        // PostFunc.createCompany(this.state.companyName).then(res => {
        //     if (res.data.result) {
        //         this.setState({ companyList: res.data.data })
        //     } else {
        //         alert(res.data.result);
        //     }
        // })
    }


    render() {
        return (
            <ProjectLayOut>
                <DialogModal open={this.state.open} close={this.close} modalTitle={this.state.modalTitle} handleOk={this.handleOk}>
                    {/* {this.state.modalType === "company" ? <CreateCompany onCompanyChange={this.onCompanyChange} /> : <CreateProject />} */}
                    {this.renderModal}
                </DialogModal>
                <ProjectComponent projectList={this.projectList} />
                <CompanyMangement />
            </ProjectLayOut>
        )
    }
}
