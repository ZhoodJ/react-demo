import React, {Component} from "react";
import {Icon, Layout, Menu} from 'antd';
import {Link, Route, Switch} from "react-router-dom";
import {TestContainer} from "./container/test/TestContainer.jsx";
import "./Admin.less";

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

class Admin extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: false
        }
    }

    toggle() {
        this.setState({collapsed: this.state.collapsed ? false : true})
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
                            <Menu.Item key="1-1"><Link to="/admin/menu1/test">测试redux</Link></Menu.Item>
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
                    <Switch>
                        <Route exact path="/admin/menu1/test" component={TestContainer}/>
                    </Switch>
                    <Footer style={{textAlign: 'center'}}>
                        copyright ©2018 by 凉衫薄
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;
