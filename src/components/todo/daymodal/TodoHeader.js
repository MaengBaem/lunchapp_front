import React, { Component } from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#f58142;
    margin-bottom:20px;
    font-size:15px;
`;

const Buttons = styled.div`
`;

const ButtonStyle = { marginRight: '10px' }

export default class TodoHeader extends Component {
    // 밖에서 저장 함수 호출되면 시간 props로 받아서 업데이트 해야 함
    render() {
        return (
            <Header>
                {this.props.saveTime}
                <Buttons>
                    <Button variant="outlined" color="primary" size="small" style={ButtonStyle}>
                        불러오기
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        startIcon={<DeleteIcon />}
                        style={ButtonStyle}
                    >
                        삭제
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        startIcon={<SaveIcon />}
                        style={ButtonStyle}
                    >
                        저장
                    </Button>
                    <Button variant="outlined" size="small">X</Button>
                </Buttons>
            </Header>
        )
    }
}
