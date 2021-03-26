import React, { Component } from 'react'
import styled from "styled-components";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DialogModal from "../common/DialogModal";

const TableCompo = styled.div`
    width:100%;
    height: 500px;
`;

const buttonStyle = {
    marginBottom: "10px",
}

export default class MemberComponent extends Component {
    render() {
        const columns = [
            { field: 'userName', headerName: '이름', width: 200 },
            { field: 'email', headerName: '이메일', width: 200 },
            { field: 'role', headerName: '구분', width: 200 },
            {
                field: 'modify',
                headerName: '수정',
                renderCell: (params) => (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 16 }}
                        onClick={() => this.props.modifyMember(params.row)}
                    >
                        수정
                    </Button>
                ),
            },
            {
                field: 'delete',
                headerName: '삭제',
                renderCell: (params) => (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 16 }}
                        onClick={() => this.props.deleteMember(params.row.id)}
                    >
                        삭제
                    </Button>
                ),
            },
        ];
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.props.createMember} style={buttonStyle}>
                    등록
                </Button>
                <TableCompo>
                    <DataGrid rows={this.props.memberList} columns={columns} disableExtendRowFullWidth hideFooterSelectedRowCount={true} />
                </TableCompo>
            </div>
        )
    }
}
