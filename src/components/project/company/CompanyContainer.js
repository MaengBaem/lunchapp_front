import React, { Component } from 'react'
import GetFunc from '../../../api/GetFunc';
import PostFunc from '../../../api/PostFunc';
import CreateCompany from "../modal/CreateCompany";
import DialogModal from '../../common/DialogModal';
import CompanyComponent from "./CompanyComponent";
import { CREATE, MODIFY, DELETE, SUCCESS, MODIFY_KR, DELETE_KR, CREATE_KR } from "../../../common/Constants";

export default class CompanyMangement extends Component {
    constructor() {
        super();
        this.state = {
            companyList: [],
            open: false,
            modalType: "",
            modalTitle: "",
            companyName: "",
            select: "",
        }
        this.close = this.close.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.createCompany = this.createCompany.bind(this);
        this.create = this.create.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.modifyCompany = this.modifyCompany.bind(this);
        this.resultAction = this.resultAction.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }

    componentDidMount() {
        GetFunc.allCompany().then(res => {
            if (res.data.result) {
                this.setState({ companyList: res.data.data })
            } else {
                alert(res.data.result);
            }
        })
    }

    onCompanyChange(e) {
        this.setState({ companyName: e.target.value })
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

    create() {
        PostFunc.createCompany(this.state.companyName).then(res => this.resultAction(res));
    }

    modify() {
        if (this.state.companyName !== "") {
            PostFunc.modifyCompany(this.state.select, this.state.companyName).then(res => this.resultAction(res));
        }
        else {
            alert("빈 값 입니다!");
        }
    }

    delete() {
        PostFunc.deleteCompany(this.state.select).then(res => this.resultAction(res));
    }

    resultAction(res) {
        if (res.data.result === SUCCESS) {
            this.setState({ companyList: res.data.data, open: false, modalType: "", select: "" });
        } else {
            alert(res.data.result);
        }
    }

    createCompany() { this.setState({ open: true, modalType: CREATE, modalTitle: CREATE_KR }) }
    modifyCompany(row) { this.setState({ open: true, modalType: MODIFY, modalTitle: MODIFY_KR, select: row.id, companyName: row.companyName }) }
    deleteCompany(id) { this.setState({ open: true, modalType: DELETE, modalTitle: DELETE_KR, select: id }) }

    renderModal() {
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
