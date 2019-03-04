import React, {Component} from "react";
import {Button, Checkbox, Input, Layout, message} from 'antd';
import axios from "axios";
import "./Login.less";

const {Content, Footer} = Layout;

class Login extends Component {

    handleInputChange(name, e) {
        this.props.save({[name]: e.target.value});
    }

    handleChecked(e) {
        this.props.save({'rememberMe': e.target.checked});
    }

    handleButtonClick(e) {
        axios({
            method: "post",
            url: "/api/login",
            withCredentials: true,
            data: {
                data: {
                    user: [{
                        email: this.props.login.email,
                        password: this.props.login.password,
                        rememberMe: this.props.login.rememberMe
                    }]
                }
            }
        }).then((response) => {
            if (response.data.status) {
                message.success("登陆成功");
                this.props.history.push("/admin");
            } else {
                message.error("用户名或密码错误");
            }
        }).catch((error) => {
            message.error("服务器错误");
        });
    }

    render() {

        return (
            <Layout className="layout">
                <Content className="content">
                    <div className="login-div">
                        <Input size="large" type="email" placeholder="请输入邮箱" className="input"
                               value={this.props.login.email}
                               onChange={this.handleInputChange.bind(this, "email")}/>
                        <Input size="large" type="password" placeholder="请输入密码" className="input"
                               value={this.props.login.password}
                               onChange={this.handleInputChange.bind(this, "password")}/>
                        <Checkbox className="checkbox" checked={this.props.login.rememberMe}
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

export default Login;
