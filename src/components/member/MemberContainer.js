import React, { Component } from 'react'
import MemberComponent from './MemberComponent'
import GetFunc from "../../api/GetFunc";
import DialogModal from '../common/DialogModal';
import { CREATE, MODIFY, DELETE, CREATE_KR, MODIFY_KR, DELETE_KR, SUCCESS } from "../../common/Constants";
import PostFunc from '../../api/PostFunc';
import CreateMember from './modal/CreateMember';

export default class MemberContainer extends Component {
    state = {
        memberList: [],
        open: false,
        modalTitle: "",
        modalType: "",
        select: "",
        info: { id: "", email: "", userName: "", password: null, role: "", roleId: null },
        roleList: [],
    }

    componentDidMount() {
        GetFunc.allMember().then(res => {
            this.setState({ memberList: res.data })
        }).catch(err => alert(err.response.data))
    }

    onHandleChange = (e) => {
        this.setState({ info: { ...this.state.info, [e.target.id]: e.target.value } })
    }

    close = () => {
        this.setState({ open: false });
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
        PostFunc.createMember(this.state.info).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
    }
    modify = () => {
        PostFunc.modifyMember(this.state.info).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
    }
    delete = () => {
        PostFunc.deleteMember(this.state.select).then(res => this.resultAction(res)).catch(err => alert(err.response.data))
    }

    resultAction = (res) => {
        this.setState({ memberList: res.data, open: false, modalTitle: "", modalType: "", select: "" });
    }

    createMember = () => {
        GetFunc.getRoleList().then(res => {
            this.setState({
                roleList: res.data, open: true, modalType: CREATE, modalTitle: CREATE_KR,
                info: { roleId: res.data[0].id }
            })
        }).catch(err => alert(err.response.data))
    }

    deleteMember = (id) => { this.setState({ open: true, modalType: DELETE, modalTitle: DELETE_KR, select: id }) }
    modifyMember = (row) => {
        GetFunc.getRoleList().then(res => {
            this.setState({
                roleList: res.data, open: true, modalType: MODIFY, modalTitle: MODIFY_KR,
                info: { id: row.id, email: row.email, userName: row.userName, roleId: row.roleId }
            })

        }).catch(err => alert(err.response.data))
    }

    renderModal = () => {
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
