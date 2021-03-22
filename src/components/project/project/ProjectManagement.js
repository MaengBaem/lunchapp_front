import React, { Component } from 'react'
import GetFunc from '../../../api/GetFunc';
import DialogModal from '../modal/DialogModal';
import ProjectComponent from './ProjectComponent';
import { CREATE, MODIFY, DELETE, SUCCESS } from "../../../common/Constants";
import CreateProject from '../modal/CreateProject';

export default class ProjectManagement extends Component {
    constructor() {
        super();
        this.state = {
            projectList: [],
            open: false,
            modalType: "",
            modalTitle: "",
            companyName: "",
            select: "",
        }
        this.close = this.close.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        // this.createCompany = this.createCompany.bind(this);
        // this.create = this.create.bind(this);
        // this.renderModal = this.renderModal.bind(this);
        // this.modifyCompany = this.modifyCompany.bind(this);
        // this.resultAction = this.resultAction.bind(this);
        // this.deleteCompany = this.deleteCompany.bind(this);
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

    onHandleChange(e) {
        this.setState({ [e.target.id]: e.target.value })
    }

    close() {
        this.setState({ open: false, modalType: "", modalTitle: "" })
    }

    handleOk() {
        let type = this.state.modalType;
        if (type === CREATE) {
            this.create();
        } else if (type === MODIFY) {
            this.modify();
        } else if (type === DELETE) {
            this.delete();
        }
    }

    renderModal() {
        let type = this.state.modalType;
        if (type === CREATE) {
            return <CreateProject onHandleChange={this.onHandleChange} />
        } else if (type === MODIFY) {
            return <CreateProject onHandleChange={this.onHandleChange} prevInfo={this.state.companyName} />
        } else if (type === DELETE) {
            return <p> 삭제 하시겠습니까? </p>
        }
    }

    resultAction(res) {
        if (res.data.result === SUCCESS) {
            this.setState({ projectList: res.data.data, open: false, modalType: "", select: "" });
        } else {
            alert(res.data.result);
        }
    }

    render() {
        return (
            <>
                <DialogModal open={this.state.open} close={this.close} modalTitle={this.state.modalTitle} handleOk={this.handleOk}>
                    {this.renderModal()}
                </DialogModal>
                <ProjectComponent projectList={this.state.projectList} createProejct={this.createProejct} modifyProject={this.modifyProject} deleteProject={this.deleteProject} />
            </>
        )
    }
}
