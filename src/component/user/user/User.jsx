import {Breadcrumb, message, Table} from 'antd';
import React, {Component} from "react";
import axios from "axios";

class User extends Component {

    onSelectChange(selectedRowKeys) {
        this.props.onSelectedChange(selectedRowKeys);
    }

    componentWillMount() {
        axios({
            method: "get",
            url: "/api/user",
            withCredentials: true,
        }).then((response) => {
            if (response.data.status) {
                message.success("请求成功");
                let data = [];
                response.data.data.map((value) => {
                    data.push({
                        key: value.id,
                        id: value.id,
                        email: value.email,
                        name: value.name,
                        password: value.password,
                        salt: value.salt
                    })
                });
                this.props.onDataChange(data);
                console.log(data);
            } else {
                message.error("请求失败");
                console.log(response.data);
            }
        }).catch((error) => {
            message.error("服务器错误");
        });
    }

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

        const rowSelection = {
            selectedRowKeys: this.props.user.selectedRowKeys,
            onChange: this.onSelectChange.bind(this)
        };

        return (
            <div>
                <Breadcrumb style={{padding: '20px', background: '#f0f2f5'}}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>所有用户</Breadcrumb.Item>
                </Breadcrumb>
                <Table rowSelection={rowSelection} dataSource={this.props.user.data} columns={columns}/>
            </div>

        )
    }
}

export default User;

