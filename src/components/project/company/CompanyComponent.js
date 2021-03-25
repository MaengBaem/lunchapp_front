import React, { Component } from 'react'
import styled from "styled-components";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const CompanyCompo = styled.div`
    background-color:#fff;
    padding: 20px;
`;

const TableCompo = styled.div`
     width:100%;

    height: 500px;
`;

const buttonStyle = {
    marginBottom: "10px",
}

export default class CompanyComponent extends Component {
    render() {
        const columns = [
            { field: 'companyName', headerName: '이름', width: 200 },
            {
                field: 'modify',
                headerName: '수정',
                width: 150,
                renderCell: (params) => (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 16 }}
                        onClick={() => this.props.modifyCompany(params.row)}
                    >
                        수정
                    </Button>
                ),
            },
            {
                field: 'delete',
                headerName: '삭제',
                width: 150,
                renderCell: (params) => (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 16 }}
                        onClick={() => this.props.deleteCompany(params.row.id)}
                    >
                        삭제
                    </Button>
                ),
            },
        ];
        return (
            <CompanyCompo>
                <Button variant="outlined" color="primary" onClick={this.props.createCompany} style={buttonStyle}>
                    등록
                </Button>
                <TableCompo>
                    <DataGrid rows={this.props.companyList} columns={columns} disableExtendRowFullWidth hideFooterSelectedRowCount={true} />
                </TableCompo>
            </CompanyCompo>
        )
    }
}
