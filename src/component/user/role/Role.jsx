import {Breadcrumb, message, Table} from 'antd';
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";

class Role extends Component {

    handleSelectedChange(selectedRowKeys) {
        this.props.onSelectedChange(selectedRowKeys);
    }

    componentWillMount() {
        axios({
            method: "get",
            url: "/api/role",
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
                this.props.onDataChange(data);
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
            title: '角色名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '编码',
            dataIndex: 'code',
            key: 'code',
        }];

        const rowSelection = {
            selectedRowKeys: this.props.role.selectedRowKeys,
            onChange: this.handleSelectedChange.bind(this)
        };

        return (
            <div>
                <Breadcrumb style={{padding: '20px', background: '#f0f2f5'}}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>角色维护</Breadcrumb.Item>
                </Breadcrumb>
                <Table rowSelection={rowSelection} dataSource={this.props.role.data} columns={columns}/>
            </div>

        )
    }
}

export default withRouter(Role);

