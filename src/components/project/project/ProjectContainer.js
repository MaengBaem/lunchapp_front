import React, { Component } from 'react'
import GetFunc from '../../../api/GetFunc';
import DialogModal from '../../common/DialogModal';
import ProjectComponent from './ProjectComponent';
import { CREATE, MODIFY, DELETE, SUCCESS, MODIFY_KR, CREATE_KR, DELETE_KR } from "../../../common/Constants";
import CreateProject from '../modal/CreateProject';
import PostFunc from '../../../api/PostFunc';

export default class ProjectManagement extends Component {
    state = {
        open: false,
        modalType: "",
        modalTitle: "",
        select: "",
        info: { id: "", title: "", desc: "", companyId: null, status: "", statusId: null, startDate: null, endDate: null },
        companyList: [],
        projectList: [],
        statusList: [],
    }

    componentDidMount() {
        GetFunc.allProject().then(res => {
            this.setState({ projectList: res.data })
        }).catch(err => alert(err.response.data))
    }

    onHandleChange = (e) => {
        this.setState({ info: { ...this.state.info, [e.target.id]: e.target.value } })
    }

    close = () => {
        this.setState({ open: false, modalType: "", modalTitle: "", companyList: [], statusList: [] })
    }

    createProject = () => {
        GetFunc.allProjectMaterial().then(res => {
            let noneCompany = [{ id: "0", companyName: "" }];
            let companys = [...noneCompany, ...res.data.data.companyList]
            this.setState({
                companyList: companys, statusList: res.data.statusList, open: true, modalType: CREATE, modalTitle: CREATE_KR,
                info: { companyId: res.data.companyList[0].id, statusId: res.data.statusList[0].id }
            })

        }).catch(err => alert(err.response.data))
    }

    modifyProject = (row) => {
        GetFunc.allProjectMaterial().then(res => {
            this.setState({
                companyList: res.data.companyList, statusList: res.data.statusList, open: true, modalType: MODIFY, modalTitle: MODIFY_KR,
                info: { id: row.id, companyId: row.companyId, desc: row.desc, endDate: row.endDate, startDate: row.startDate, status: row.status, statusId: row.statusId, title: row.title }
            })
        }).catch(err => alert(err.response.data))
    }

    deleteProject = (id) => { this.setState({ open: true, modalType: DELETE, modalTitle: DELETE_KR, select: id }) }


    handleOk = () => {
        let type = this.state.modalType;
        if (type === CREATE) {
            this.create();
        } else if (type === MODIFY) {
            this.modify();
        } else if (type === DELETE) {
            this.delete();
        }
    }

    create = () => {
        PostFunc.createProject(this.state.info).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
    }
    modify = () => {
        PostFunc.modifyProject(this.state.info).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
    }
    delete = () => {
        PostFunc.deleteProject(this.state.select).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
    }

    renderModal = () => {
        let type = this.state.modalType;
        if (type === CREATE) {
            return <CreateProject onHandleChange={this.onHandleChange} companyList={this.state.companyList} statusList={this.state.statusList} />
        } else if (type === MODIFY) {
            return <CreateProject onHandleChange={this.onHandleChange} companyList={this.state.companyList} statusList={this.state.statusList} prevInfo={this.state.info} />
        } else if (type === DELETE) {
            return <p> 삭제 하시겠습니까? </p>
        }
    }

    resultAction = (res) => {
        this.setState({ projectList: res.data, open: false, modalTitle: "", modalType: "", select: "" });
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
