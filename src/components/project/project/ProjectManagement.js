import React, { Component } from 'react'
import GetFunc from '../../../api/GetFunc';
import DialogModal from '../modal/DialogModal';
import ProjectComponent from './ProjectComponent';
import { CREATE, MODIFY, DELETE, SUCCESS } from "../../../common/Constants";
import CreateProject from '../modal/CreateProject';
import PostFunc from '../../../api/PostFunc';

export default class ProjectManagement extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            modalType: "",
            modalTitle: "",
            select: "",
            info: { id: "", title: "", desc: "", companyId: null, status: "", statusId: null, startDate: null, endDate: null },
            companyList: [],
            projectList: [],
            statusList: [],
        }
        this.close = this.close.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.createProject = this.createProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
        this.delete = this.delete.bind(this);
        this.create = this.create.bind(this);
        this.modify = this.modify.bind(this);
        this.modifyProject = this.modifyProject.bind(this);
        this.resultAction = this.resultAction.bind(this);
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
        this.setState({ info: { ...this.state.info, [e.target.id]: e.target.value } })
    }

    close() {
        this.setState({ open: false, modalType: "", modalTitle: "", companyList: [], statusList: [] })
    }

    createProject() {
        GetFunc.allProjectMaterial().then(res => {
            if (res.data.result) {
                console.log(res.data)
                let noneCompany = [{ id: "0", companyName: "" }];
                let companys = [...noneCompany, ...res.data.data.companyList]
                this.setState({
                    companyList: companys, statusList: res.data.data.statusList, open: true, modalType: CREATE, modalTitle: "등록",
                    info: { companyId: res.data.data.companyList[0].id, statusId: res.data.data.statusList[0].id }
                })
            } else {
                alert(res.data.result);
            }
        })
    }

    modifyProject(row) {
        GetFunc.allProjectMaterial().then(res => {
            if (res.data.result) {
                this.setState({
                    companyList: res.data.data.companyList, statusList: res.data.data.statusList, open: true, modalType: MODIFY, modalTitle: "수정",
                    info: { id: row.id, companyId: row.companyId, desc: row.desc, endDate: row.endDate, startDate: row.startDate, status: row.status, statusId: row.statusId, title: row.title }
                })
            } else {
                alert(res.data.result);
            }
        })
    }

    deleteProject(id) { this.setState({ open: true, modalType: DELETE, modalTitle: "삭제", select: id }) }


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

    create() {
        PostFunc.createProject(this.state.info).then(res => this.resultAction(res));
    }
    modify() {
        PostFunc.modifyProject(this.state.info).then(res => this.resultAction(res));
    }
    delete() {
        PostFunc.deleteProject(this.state.select).then(res => this.resultAction(res));
    }

    renderModal() {
        let type = this.state.modalType;
        if (type === CREATE) {
            return <CreateProject onHandleChange={this.onHandleChange} companyList={this.state.companyList} statusList={this.state.statusList} />
        } else if (type === MODIFY) {
            return <CreateProject onHandleChange={this.onHandleChange} companyList={this.state.companyList} statusList={this.state.statusList} prevInfo={this.state.info} />
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
                <ProjectComponent projectList={this.state.projectList} createProject={this.createProject} modifyProject={this.modifyProject} deleteProject={this.deleteProject} />
            </>
        )
    }
}
