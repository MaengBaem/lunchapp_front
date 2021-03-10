import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AuthenticationService from '../auth/AuthService.js';

const LoginLayout = styled.div`
    display: flex;
    justify-content:center;
    min-height: 100vh;
`;
const LoginForm = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    width: 460px;
    height: 630px;
    margin-top:102px;
`;

const LoginHeader = styled.div`
    margin-bottom:101px;
    font-size:50px;
    font-weight:700;
`;

const InputLayout = styled.div`
    width:100%;
    margin-bottom:20px;
`;

const InputSize = { width: '460px', height: '56px' }

const ButtonStyle = { width: '460px', height: '56px', marginBttom: '14px', marginTop: '12px', fontSize: '16px', fontWeight: '700' }

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            token: localStorage.getItem("token") || '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.loginClicked();
        }
    };

    loginClicked() {
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                this.setState({
                    token: response.data.jwttoken,
                });
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.token)
                this.props.history.push('/');
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    render() {
        return (
            <LoginLayout>
                <LoginForm>
                    <LoginHeader>LOGIN</LoginHeader>
                    <form onSubmit={this.loginClicked}>
                        <InputLayout>
                            <TextField label="Name" name="username" variant="outlined" style={InputSize} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                        </InputLayout>
                        <InputLayout>
                            <TextField label="password" name="password" variant="outlined" style={InputSize}
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress} />
                        </InputLayout>
                        <Button variant="contained" color="primary" style={ButtonStyle} tyle="submit">
                            로그인
                    </Button>
                    </form>

                </LoginForm>
            </LoginLayout>
        )
    }
}

export default LoginComponent