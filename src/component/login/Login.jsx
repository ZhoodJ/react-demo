import React, {Component} from "react";
import {Layout} from 'antd';
import "./Login.less";

const {Content, Footer} = Layout;

class Login extends Component {

    render() {

        return (
            <Layout style={{height: "100vh"}}>
                <Content style={{padding: '50px', height: "100vh"}}>
                    <div style={{background: '#fff', padding: 24, height: "100vh"}}>

                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    copyright ©2018 by 凉衫薄
                </Footer>
            </Layout>
        );
    }
}

export default Login;
