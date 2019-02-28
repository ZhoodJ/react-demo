import {Breadcrumb, message, Table} from 'antd';
import React, {Component} from "react";
import axios from "axios";

class Permission extends Component {

    handleSelectedChange(selectedRowKeys) {
        this.props.onSelectedChange(selectedRowKeys);
    }

    componentWillMount() {
        axios({
            method: "get",
            url: "/api/permission",
            withCredentials: true,
        }).then((response) => {
            if (response.data.status) {
                message.success("请求成功");
                console.log(response);
                let data = [];
                response.data.data.map((value) => {
                    data.push({
                        key: value.id,
                        id: value.id,
                        name: value.name,
                        code: value.code,
                    })
                });
                this.props.onDataChange(data);
            } else {
                message.error("请求失败");
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
            <div>
                <Breadcrumb style={{padding: '20px', background: '#f0f2f5'}}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>权限维护</Breadcrumb.Item>
                </Breadcrumb>
                <Table rowSelection={rowSelection} dataSource={this.props.permission.data} columns={columns}/>
            </div>

        )
    }
}

export default Permission;

