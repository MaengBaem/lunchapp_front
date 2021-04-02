import React, { Component } from 'react'
import GetFunc from '../../../api/GetFunc';
import PostFunc from '../../../api/PostFunc';
import CreateCompany from "../modal/CreateCompany";
import DialogModal from '../../common/DialogModal';
import CompanyComponent from "./CompanyComponent";
import { CREATE, MODIFY, DELETE, SUCCESS, MODIFY_KR, DELETE_KR, CREATE_KR } from "../../../common/Constants";

export default class CompanyMangement extends Component {
    state = {
        companyList: [],
        open: false,
        modalType: "",
        modalTitle: "",
        companyName: "",
        select: "",
    }


    componentDidMount() {
        GetFunc.allCompany().then(res => {
            this.setState({ companyList: res.data });
        }).catch(err => alert(err.response.data))
    }

    onCompanyChange = (e) => {
        this.setState({ companyName: e.target.value })
    }

    close = () => {
        this.setState({ open: false, modalType: "", modalTitle: "" })
    }

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
        PostFunc.createCompany(this.state.companyName).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
    }

    modify = () => {
        if (this.state.companyName !== "") {
            PostFunc.modifyCompany(this.state.select, this.state.companyName).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
        }
        else {
            alert("빈 값 입니다!");
        }
    }

    delete = () => {
        PostFunc.deleteCompany(this.state.select).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
    }

    resultAction(res) {
        this.setState({ companyList: res.data, open: false, modalType: "", select: "" });
    }

    createCompany = () => { this.setState({ open: true, modalType: CREATE, modalTitle: CREATE_KR }) }
    modifyCompany = (row) => { this.setState({ open: true, modalType: MODIFY, modalTitle: MODIFY_KR, select: row.id, companyName: row.companyName }) }
    deleteCompany = (id) => { this.setState({ open: true, modalType: DELETE, modalTitle: DELETE_KR, select: id }) }

    renderModal = () => {
        let type = this.state.modalType;
        if (type === CREATE) {
            return <CreateCompany onCompanyChange={this.onCompanyChange} />
        } else if (type === MODIFY) {
            return <CreateCompany onCompanyChange={this.onCompanyChange} prevInfo={this.state.companyName} />
        } else if (type === DELETE) {
            return <p> 삭제 하시겠습니까? </p>
        }
    }

    render() {
        return (
            <>
                <DialogModal open={this.state.open} close={this.close} modalTitle={this.state.modalTitle} handleOk={this.handleOk}>
                    {this.renderModal()}
                </DialogModal>
                <CompanyComponent companyList={this.state.companyList} createCompany={this.createCompany} modifyCompany={this.modifyCompany} deleteCompany={this.deleteCompany} />
            </>
        )
    }
}
