import React, { Component } from 'react'
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const TextStyle = {
    minWidth: '90%',
    marginRight: '30px'
}

const ItemCompo = styled.div`
    display : flex;
    align-items:flex-end;
`;

export default class TodoItem extends Component {
    render() {
        return (
            <ItemCompo>
                <TextField id="standard-basic" label="To do..." style={TextStyle} multiline rowsMax={3} />
                {/* 저장 여부에 따라 추가 / 삭제 버튼 */}
                <button style={{ height: '40px' }}>추가</button>
            </ItemCompo>
        )
    }
}
