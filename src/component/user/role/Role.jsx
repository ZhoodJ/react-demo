import {Breadcrumb, Button, Input, message, Modal, Table} from 'antd';
import React, {Component} from "react";
import axios from "axios";
import "./Role.less"

class Role extends Component {

    handleRoleSelectedChange(selectedRowKeys, selectedRow) {
        this.props.save({role_selectedRowKeys: selectedRowKeys, role_selectedRow: selectedRow});
    }

    handlePermissionSelectedChange(selectedRowKeys, selectedRow) {
        this.props.save({permission_selectedRowKeys: selectedRowKeys, permission_selectedRow: selectedRow})
    }

    handleRoleRowClick(record) {
        axios({
            method: "get",
            url: "/api/role/permission/" + record.id,
            withCredentials: true,
        }).then((response) => {
            if (response.data.status) {
                let data = [];
                if (response.data.data) {
                    response.data.data.map((value) => {
                        data.push({
                            key: value.id,
                            id: value.id,
                            name: value.name,
                            code: value.code,
                        })
                    });
                }
                this.props.save({permission_data: data});
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

    handleInputValueChange(type, e) {
        this.props.save({[type]: e.target.value})
    }

    handleAdd() {
        this.props.save({visible: true, isAdd: true})
    }

    handleEdit() {
        if (this.props.role.role_selectedRowKeys.length !== 1) {
            message.error("请选中一行")
        } else {
            this.props.save({
                name: this.props.role.role_selectedRow[0].name,
                code: this.props.role.role_selectedRow[0].code,
                id: this.props.role.role_selectedRow[0].id,
                visible: true,
                isAdd: false
            });
        }
    }

    handleDelete() {
        if (this.props.role.role_selectedRowKeys.length < 1) {
            message.error("请至少选中一行")
        } else {
            axios({
                method: "delete",
                url: "/api/role",
                data: {
                    data: {
                        role: this.props.role.role_selectedRow
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
                    this.props.save({role_data: data, role_selectedRow: [], role_selectedRowKeys: []});
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
            method: this.props.role.isAdd ? "post" : "put",
            url: "/api/role",
            withCredentials: true,
            data: {
                data: {
                    role: [{
                        id: this.props.role.isAdd ? '' : this.props.role.id,
                        name: this.props.role.name,
                        code: this.props.role.code
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
                this.props.save({visible: false, name: '', code: '', id: '', role_data: data})
                if (!this.props.role.isAdd) {
                    this.props.save({role_selectedRowKeys: [], role_selectedRow: []})
                }
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
                this.props.save({role_data: data});
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

        const role_columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '33%'
        }, {
            title: '角色名',
            dataIndex: 'name',
            key: 'name',
            width: '33%'
        }, {
            title: '编码',
            dataIndex: 'code',
            key: 'code',
            width: '33%'
        }];

        const permission_columns = [{
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '33%'
        }, {
            title: '权限名',
            dataIndex: 'name',
            key: 'name',
            width: '33%'
        }, {
            title: '编码',
            dataIndex: 'code',
            key: 'code',
            width: '33%'
        }];

        const role_rowSelection = {
            selectedRowKeys: this.props.role.role_selectedRowKeys,
            onChange: this.handleRoleSelectedChange.bind(this)
        };

        const permission_rowSelection = {
            selectedRowKeys: this.props.role.permission_selectedRowKeys,
            onChange: this.handlePermissionSelectedChange.bind(this)
        }

        return (
            <div className="page-content">
                <Breadcrumb className="bread-crumb">
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>角色维护</Breadcrumb.Item>
                </Breadcrumb>
                <div className="button-header">
                    <Button type="primary" onClick={this.handleAdd.bind(this)}>新增</Button>
                    <Button type="primary" onClick={this.handleEdit.bind(this)}>修改</Button>
                    <Button type="danger" onClick={this.handleDelete.bind(this)}>删除</Button>
                </div>
                <Table rowSelection={role_rowSelection}
                       dataSource={this.props.role.role_data}
                       columns={role_columns}
                       className="table"
                       bordered
                       pagination={{pageSize: 5}}
                       title={() => "角色"}
                       onRow={(record) => {
                           return {
                               onClick: this.handleRoleRowClick.bind(this, record)
                           };
                       }}
                />
                <Table rowSelection={permission_rowSelection}
                       dataSource={this.props.role.permission_data}
                       columns={permission_columns}
                       className="table"
                       bordered
                       pagination={{pageSize: 5}}
                       title={() => "权限"}
                />
                <Modal
                    title="新增编辑"
                    visible={this.props.role.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    okText="确认"
                    cancelText="取消"
                >
                    <div>
                        <Input placeholder="角色名称" type="text" allowClear style={{marginButton: '20px'}}
                               value={this.props.role.name}
                               onChange={this.handleInputValueChange.bind(this, 'name')}/>
                        <Input placeholder="角色编码" type="text" allowClear style={{marginTop: '20px'}}
                               value={this.props.role.code}
                               onChange={this.handleInputValueChange.bind(this, 'code')}/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Role;

