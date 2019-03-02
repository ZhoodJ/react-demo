import {Breadcrumb, Button, Input, message, Modal, Table} from 'antd';
import React, {Component} from "react";
import axios from "axios";
import "./User.less";

class User extends Component {

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
        if (this.props.user.selectedRowKeys.length !== 1) {
            message.error("请选中一行")
        } else {
            this.props.save({
                email: this.props.user.selectedRow[0].email,
                name: this.props.user.selectedRow[0].name,
                password: this.props.user.selectedRow[0].password,
                id: this.props.user.selectedRow[0].id,
                visible: true,
                isAdd: false
            });
        }
    }

    handleDelete() {
        if (this.props.user.selectedRowKeys.length < 1) {
            message.error("请至少选中一行")
        } else {
            axios({
                method: "delete",
                url: "/api/user",
                data: {
                    data: {
                        user: this.props.user.selectedRow
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
                            email: value.email,
                            name: value.name,
                            password: value.password
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
            method: this.props.user.isAdd ? "post" : "put",
            url: "/api/user",
            withCredentials: true,
            data: {
                data: {
                    user: [{
                        id: this.props.user.isAdd ? '' : this.props.user.id,
                        name: this.props.user.name,
                        email: this.props.user.email,
                        password: this.props.user.password
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
                        email: value.email,
                        password: value.password
                    })
                });
                this.props.save({visible: false, name: '', email: '', id: '', password: '', data: data})
                if (!this.props.user.isAdd) {
                    this.props.save({selectedRowKeys: [], selectedRow: []})
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
        this.props.save({visible: false, name: '', email: '', id: '', password: ''})
    }

    componentWillMount() {
        axios({
            method: "get",
            url: "/api/user",
            withCredentials: true,
        }).then((response) => {
            if (response.data.status) {
                message.success(response.data.message);
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
            onChange: this.handleSelectedChange.bind(this)
        };

        return (
            <div className="page-content">
                <Breadcrumb style={{padding: '20px', background: '#f0f2f5'}}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>用户维护</Breadcrumb.Item>
                </Breadcrumb>
                <div className="button-header">
                    <Button type="primary" onClick={this.handleAdd.bind(this)}>新增</Button>
                    <Button type="primary" onClick={this.handleEdit.bind(this)}>修改</Button>
                    <Button type="danger" onClick={this.handleDelete.bind(this)}>删除</Button>
                </div>
                <Table rowSelection={rowSelection} dataSource={this.props.user.data} columns={columns} bordered
                       className="table"/>
                <Modal
                    title="新增编辑"
                    visible={this.props.user.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    okText="确认"
                    cancelText="取消"
                >
                    <div>
                        <Input placeholder="邮箱" type="email" allowClear style={{marginButton: '20px'}}
                               value={this.props.user.email}
                               onChange={this.handleInputValueChange.bind(this, 'email')}/>
                        <Input placeholder="昵称" type="text" allowClear style={{marginTop: '20px', marginButton: '20px'}}
                               value={this.props.user.name}
                               onChange={this.handleInputValueChange.bind(this, 'name')}/>
                        <Input placeholder="密码" type="password" allowClear style={{marginTop: '20px'}}
                               value={this.props.user.password}
                               onChange={this.handleInputValueChange.bind(this, "password")}/>
                    </div>
                </Modal>
            </div>

        )
    }
}

export default User;

