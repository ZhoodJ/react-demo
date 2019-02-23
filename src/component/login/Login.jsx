import React, {Component} from "react";
import {Button, Checkbox, Input, Layout} from 'antd';
import "./Login.less";

const {Content, Footer} = Layout;

class Login extends Component {

    render() {

        return (
            <Layout className="layout">
                <Content className="content">
                    <div className="login-div">
                        <Input size="large" type="email" placeholder="请输入邮箱" className="input"/>
                        <Input size="large" type="password" placeholder="请输入密码" className="input"/>
                        <Checkbox className="checkbox">记住密码</Checkbox>
                        <br/>
                        <Button type="primary" size="large" className="button">登陆</Button>
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
