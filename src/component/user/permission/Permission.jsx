import {Breadcrumb, Button, Input, message, Modal, Table} from 'antd';
import React, {Component} from "react";
import axios from "axios";
import "./Permission.less";

class Permission extends Component {

    handleSelectedChange(selectedRowKeys, selectedRow) {
        this.props.save({selectedRowKeys: selectedRowKeys, selectedRow: selectedRow});
    }

    handleInputValueChange(type, e) {
        this.props.save({[type]: e.target.value})
    }

    handleAdd() {
        this.props.save({visible: true, isAdd: true})
    }

    handleEdit() {
        if (this.props.permission.selectedRowKeys.length !== 1) {
            message.error("请选中一行")
        } else {
            this.props.save({
                name: this.props.permission.selectedRow[0].name,
                code: this.props.permission.selectedRow[0].code,
                id: this.props.permission.selectedRow[0].id,
                visible: true,
                isAdd: false
            });
        }
    }

    handleDelete() {
        if (this.props.permission.selectedRowKeys.length < 1) {
            message.error("请至少选中一行")
        } else {
            axios({
                method: "delete",
                url: "/api/permission",
                data: {
                    data: {
                        permission: this.props.permission.selectedRow
                    }
                },
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
                    this.props.save({data: data, selectedRow: [], selectedRowKeys: []});
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
    }

    handleOk() {
        axios({
            method: this.props.permission.isAdd ? "post" : "put",
            url: "/api/permission",
            withCredentials: true,
            data: {
                data: {
                    permission: [{
                        id: this.props.permission.isAdd ? '' : this.props.permission.id,
                        name: this.props.permission.name,
                        code: this.props.permission.code
                    }]
                }
            }
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
                this.props.save({visible: false, name: '', code: '', id: '', data: data})
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

    handleCancel() {
        this.props.save({visible: false, name: '', code: '', id: ''})
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
                    <Button type="primary" onClick={this.handleAdd.bind(this)}>新增</Button>
                    <Button type="primary" onClick={this.handleEdit.bind(this)}>修改</Button>
                    <Button type="danger" onClick={this.handleDelete.bind(this)}>删除</Button>
                </div>
                <Table rowSelection={rowSelection} dataSource={this.props.permission.data} columns={columns} bordered
                       className="table"/>
                <Modal
                    title="新增编辑"
                    visible={this.props.permission.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    okText="确认"
                    cancelText="取消"
                >
                    <div>
                        <Input placeholder="权限名称" type="text" allowClear style={{marginButton: '20px'}}
                               value={this.props.permission.name}
                               onChange={this.handleInputValueChange.bind(this, 'name')}/>
                        <Input placeholder="权限编码" type="text" allowClear style={{marginTop: '20px'}}
                               value={this.props.permission.code}
                               onChange={this.handleInputValueChange.bind(this, 'code')}/>
                    </div>
                </Modal>
            </div>

        )
    }
}

export default Permission;

