import React, { Component } from 'react'
import styled from "styled-components";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const ProjectCompo = styled.div`
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

export default class ProjectComponent extends Component {
    render() {
        const columns = [
            { field: 'title', headerName: '이름', width: 200 },
            { field: 'desc', headerName: '내용', width: 200 },
            { field: 'companyName', headerName: '회사', width: 200 },
            { field: 'status', headerName: '진행 여부', width: 200 },
            { field: 'startDate', headerName: '시작일', width: 200 },
            { field: 'endDate', headerName: '종료일', width: 200 },
            {
                field: 'modify',
                headerName: '수정',
                renderCell: (params) => (
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 16 }}
                        onClick={() => this.props.modifyProject(params.row)}
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
                        onClick={() => this.props.deleteProject(params.row.id)}
                    >
                        삭제
                    </Button>
                ),
            },
        ];
        return (
            <ProjectCompo>
                <Button variant="outlined" color="primary" onClick={this.props.createProject} style={buttonStyle}>
                    등록
                </Button>
                <TableCompo>
                    <DataGrid rows={this.props.projectList} columns={columns} disableExtendRowFullWidth hideFooterSelectedRowCount={true} />
                </TableCompo>
            </ProjectCompo>
        )
    }
}
