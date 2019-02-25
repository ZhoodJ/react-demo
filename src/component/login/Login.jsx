import React, {Component} from "react";
import {Button, Checkbox, Input, Layout} from 'antd';
import axios from "axios";
import "./Login.less";

const {Content, Footer} = Layout;

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            password: ''
        }
    }

    handleInputChange(name, e) {
        this.setState({[name]: e.target.value});
    }

    handleButtonClick(e) {
        axios.post('/api/user', this.state
        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {

        return (
            <Layout className="layout">
                <Content className="content">
                    <div className="login-div">
                        <Input size="large" type="email" placeholder="请输入邮箱" className="input" value={this.state.email}
                               onChange={this.handleInputChange.bind(this, "email")}/>
                        <Input size="large" type="text" placeholder="请输入昵称" className="input" value={this.state.name}
                               onChange={this.handleInputChange.bind(this, "name")}/>
                        <Input size="large" type="password" placeholder="请输入密码" className="input"
                               value={this.state.password} onChange={this.handleInputChange.bind(this, "password")}/>
                        <Checkbox className="checkbox">记住密码</Checkbox>
                        <br/>
                        <Button type="primary" size="large" className="button"
                                onClick={this.handleButtonClick.bind(this)}>登陆</Button>
                    </div>
                </Content>
                <Footer className="footer">
                    copyright ©2018 by 凉衫薄
                </Footer>
            </Layout>
        );
    }
}

export default Login;
