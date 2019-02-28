import {Breadcrumb, Button, message, Table} from 'antd';
import React, {Component} from "react";
import axios from "axios";
import "./Permission.less";

class Permission extends Component {

    handleSelectedChange(selectedRowKeys) {
        this.props.save({selectedRowKeys: selectedRowKeys});
    }

    componentWillMount() {
        axios({
            method: "get",
            url: "/api/permission",
            withCredentials: true,
        }).then((response) => {
            if (response.data.status) {
                message.success(response.data.message);
                let data = [];
                response.data.data.map((value) => {
                    data.push({
                        key: value.id,
                        id: value.id,
                        name: value.name,
                        code: value.code,
                    })
                });
                this.props.save({data: data});
            } else {
                message.error(response.data.message);
            }
        }).catch((error) => {
            if (error.response.status === 403) {
                message.error(error.response.data.message);
                this.props.history.push("/login");
            } else {
                message.error("服务器错误");
            }
        });
    }

    render() {

        const columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '权限名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '编码',
            dataIndex: 'code',
            key: 'code',
        }];

        const rowSelection = {
            selectedRowKeys: this.props.permission.selectedRowKeys,
            onChange: this.handleSelectedChange.bind(this)
        };

        return (
            <div className="page-content">
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>权限维护</Breadcrumb.Item>
                </Breadcrumb>
                <div className="button-header">
                    <Button type="primary">新增</Button>
                    <Button type="primary">修改</Button>
                    <Button type="danger">删除</Button>
                </div>
                <Table rowSelection={rowSelection} dataSource={this.props.permission.data} columns={columns}/>
            </div>

        )
    }
}

export default Permission;

