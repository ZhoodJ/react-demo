import {Breadcrumb, Table} from 'antd';
import React, {Component} from "react";

class User extends Component {

    render() {

        const columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
        }, {
            title: '盐',
            key: 'salt',
            dataIndex: 'salt',
        }];

        const data = [{
            key: '1',
            id: '111111',
            email: '363408268@qq.com',
            name: '蔡忞晟',
            password: '19960821',
            salt: '123456'
        }, {
            key: '2',
            id: '222222',
            email: '2607222687@qq.com',
            name: '小蔡',
            password: '19960821',
            salt: '123456'
        }];

        return (
            <div>
                <Breadcrumb style={{padding: '20px', background: '#f0f2f5'}}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>所有用户</Breadcrumb.Item>
                </Breadcrumb>
                <Table dataSource={data} columns={columns}/>
            </div>

        )
    }
}

export default User;

