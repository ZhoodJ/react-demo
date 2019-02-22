import React, {Component} from "react";
import {Breadcrumb, Button, Layout} from 'antd';

const {Content} = Layout;

class Test extends Component {

    handleSwitchColor(color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return (
            <Layout>
                <Breadcrumb style={{margin: '16px 16px 0 16px'}}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>菜单一</Breadcrumb.Item>
                    <Breadcrumb.Item>测试redux</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    <h3 style={{color: this.props.themeColor}}>这是一段文字</h3>
                    <div>
                        <Button type="primary" onClick={this.handleSwitchColor.bind(this, "red")}>红色</Button>
                        <Button type="primary" onClick={this.handleSwitchColor.bind(this, "blue")}>蓝色</Button>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default Test;
