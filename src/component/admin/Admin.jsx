import React, {Component} from "react";
import {Dropdown, Icon, Layout, Menu, message} from 'antd';
import {Link, Route, Switch} from "react-router-dom";
import {UserRouter} from "../../router/user/UserRouter.jsx";
import "./Admin.less";
import axios from "axios";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class Admin extends Component {

    toggle() {
        this.props.save({collapsed: this.props.admin.collapsed ? false : true});
    }

    componentWillMount() {
        axios({
            method: "get",
            url: "/api/isAuthentication",
            withCredentials: true,
        }).then((response) => {
            if (!response.data.status) {
                message.warning(response.data.message);
                this.props.history.push("/login");
            } else {
                this.props.save({name: response.data.data})
            }
        }).catch((error) => {
            message.error("服务器错误");
        });
    }

    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/login">退出登陆</Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.props.admin.collapsed}
                    style={{
                        height: "100vh"
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu
                            key="1"
                            title={<span><Icon type="user"/><span>用户管理</span></span>}
                        >
                            <Menu.Item key="1-1"><Link to="/admin/user/user">用户维护</Link></Menu.Item>
                            <Menu.Item key="1-2"><Link to="/admin/user/role">角色维护</Link></Menu.Item>
                            <Menu.Item key="1-3"><Link to="/admin/user/permission">权限维护</Link></Menu.Item>
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
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="admin-header">
                        <Icon
                            className="trigger"
                            type={this.props.admin.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle.bind(this)}
                        />
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link"
                               style={{float: "right", marginRight: "25px", fontSize: "18px"}}>
                                {this.props.admin.name} <Icon type="down"/>
                            </a>
                        </Dropdown>
                    </Header>
                    <Content className="admin-content">
                        <Switch>
                            <Route path="/admin/user" component={UserRouter}/>
                        </Switch>
                    </Content>
                    <Footer className="admin-footer">
                        copyright ©2018 by 凉衫薄
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;
