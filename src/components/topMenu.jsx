import React from 'react'
import { Menu } from 'antd'

export default class TopMenu extends React.Component {
    render() {
        return(
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">EOS 区块链信息</Menu.Item>
                    <Menu.Item key="2">智能合约</Menu.Item>
                    <Menu.Item key="4">钱包</Menu.Item>
                    <Menu.Item key="5">转账</Menu.Item>
                    <Menu.Item key="6">交易记录</Menu.Item>
                </Menu>
            </div>
        )
    }
}