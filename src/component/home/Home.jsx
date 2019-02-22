import React, {Component} from "react";
import {Breadcrumb, Icon, Layout, Menu} from 'antd';
import {Link} from "react-router-dom";
import "./Home.less";

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

class Home extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{
                        height: "100vh"
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu
                            key="1"
                            title={<span><Icon type="user"/><span>菜单一</span></span>}
                        >
                            <Menu.Item key="1-1"><Link to="/test">测试redux</Link></Menu.Item>
                            <Menu.Item key="1-2">子菜单二</Menu.Item>
                            <Menu.Item key="1-3">子菜单三</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="2"
                            title={<span><Icon type="team"/><span>菜单二</span></span>}
                        >
                            <Menu.Item key="2-1">子菜单一</Menu.Item>
                            <Menu.Item key="2-2">子菜单二</Menu.Item>
                            <Menu.Item key="2-3">子菜单三</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="3"
                            title={<span><Icon type="pie-chart"/><span>菜单三</span></span>}
                        >
                            <Menu.Item key="3-1">子菜单一</Menu.Item>
                            <Menu.Item key="3-2">子菜单二</Menu.Item>
                            <Menu.Item key="3-3">子菜单三</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="4"
                            title={<span><Icon type="desktop"/><span>菜单四</span></span>}
                        >
                            <Menu.Item key="4-1">子菜单一</Menu.Item>
                            <Menu.Item key="4-2">子菜单二</Menu.Item>
                            <Menu.Item key="4-3">子菜单三</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="5">
                            <Icon type="file"/>
                            <span>菜单五</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle.bind(this)}
                        />
                    </Header>
                    <Breadcrumb style={{margin: '16px 16px 0 16px'}}>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>test</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                    }}
                    >
                        Content
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
