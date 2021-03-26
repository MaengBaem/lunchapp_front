import React, { Component } from 'react'
import styled from "styled-components";
import MemberContainer from '../components/member/MemberContainer';

const MemberLayOut = styled.div`
    min-height: 100vh;
    padding : 15px;        
`;

export default class MemberManage extends Component {
    render() {
        return (
            <MemberLayOut>
                <MemberContainer />
            </MemberLayOut>
        )
    }
}
