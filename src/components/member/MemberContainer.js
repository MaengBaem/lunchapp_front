import React, { Component } from 'react'
import MemberComponent from './MemberComponent'
import GetFunc from "../../api/GetFunc";
import DialogModal from '../common/DialogModal';
import { CREATE, MODIFY, DELETE, CREATE_KR, MODIFY_KR, DELETE_KR, SUCCESS } from "../../common/Constants";
import PostFunc from '../../api/PostFunc';
import CreateMember from './modal/CreateMember';

export default class MemberContainer extends Component {
    constructor() {
        super();
        this.state = {
            memberList: [],
            open: false,
            modalTitle: "",
            modalType: "",
            select: "",
            info: { id: "", email: "", userName: "", password: null, role: "", roleId: null },
            roleList: [],
        }

        this.close = this.close.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.createMember = this.createMember.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
        this.modifyMember = this.modifyMember.bind(this);
        this.delete = this.delete.bind(this);
        this.modify = this.modify.bind(this);
        this.create = this.create.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    componentDidMount() {
        GetFunc.allMember().then(res => {
            if (res.data.result) {
                this.setState({ memberList: res.data.data })
            } else {
                alert(res.data.result);
            }
        })
    }

    onHandleChange(e) {
        this.setState({ info: { ...this.state.info, [e.target.id]: e.target.value } })
    }

    close() {
        this.setState({ open: false });
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
        PostFunc.createMember(this.state.info).then(res => this.resultAction(res));
    }
    modify() {
        PostFunc.modifyMember(this.state.info).then(res => this.resultAction(res));
    }
    delete() {
        PostFunc.deleteMember(this.state.select).then(res => this.resultAction(res));
    }

    resultAction(res) {
        if (res.data.result === SUCCESS) {
            this.setState({ memberList: res.data.data, open: false, modalTitle: "", modalType: "", select: "" });
        } else {
            alert(res.data.result);
        }
    }

    createMember() {
        GetFunc.getRoleList().then(res => {
            if (res.data.result) {
                this.setState({
                    roleList: res.data.data, open: true, modalType: CREATE, modalTitle: CREATE_KR,
                    info: { roleId: res.data.data[0].id }
                })
            } else {
                alert(res.data.result);
            }
        })
    }

    deleteMember(id) { this.setState({ open: true, modalType: DELETE, modalTitle: DELETE_KR, select: id }) }
    modifyMember(row) {
        GetFunc.getRoleList().then(res => {
            if (res.data.result) {
                this.setState({
                    roleList: res.data.data, open: true, modalType: MODIFY, modalTitle: MODIFY_KR,
                    info: { id: row.id, email: row.email, userName: row.userName, roleId: row.roleId }
                })
            } else {
                alert(res.data.result);
            }
        })
    }

    renderModal() {
        let type = this.state.modalType;
        if (type === CREATE) {
            return <CreateMember roleList={this.state.roleList} onHandleChange={this.onHandleChange} />
        } else if (type === MODIFY) {
            return <CreateMember roleList={this.state.roleList} onHandleChange={this.onHandleChange} prevInfo={this.state.info} />
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
                <MemberComponent memberList={this.state.memberList} deleteMember={this.deleteMember} createMember={this.createMember} modifyMember={this.modifyMember} />
            </>
        )
    }
}
