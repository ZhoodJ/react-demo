import React, {Component} from "react";
import {Button, Checkbox, Input, Layout} from 'antd';
import axios from "axios";
import {withRouter} from "react-router-dom";
import "./Login.less";

const {Content, Footer} = Layout;

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            rememberMe: false
        }
    }

    handleInputChange(name, e) {
        this.setState({[name]: e.target.value});
    }

    handleButtonClick(e) {
        axios({
            method: "post",
            url: "/api/login",
            withCredentials: true,
            data: {
                data: {
                    user: [this.state]
                }
            }
        }).then((response) => {
            if (response.data.status) {
                this.props.history.push("/admin");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChecked(e) {
        this.setState({rememberMe: this.state.rememberMe ? false : true})
    }

    render() {

        return (
            <Layout className="layout">
                <Content className="content">
                    <div className="login-div">
                        <Input size="large" type="email" placeholder="请输入邮箱" className="input" value={this.state.email}
                               onChange={this.handleInputChange.bind(this, "email")}/>
                        <Input size="large" type="password" placeholder="请输入密码" className="input"
                               value={this.state.password} onChange={this.handleInputChange.bind(this, "password")}/>
                        <Checkbox className="checkbox" checked={this.state.rememberMe}
                                  onChange={this.handleChecked.bind(this)}>记住密码</Checkbox>
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

export default withRouter(Login);
