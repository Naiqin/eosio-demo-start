import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default class TopMenu extends React.Component {
  render() {
    return <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">
            <Link to="/app/index">EOS 区块链信息</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/app/hash">hash</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/app/wallet">钱包</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/app/transfer">转账</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/app/history">交易记录</Link>
          </Menu.Item>
        </Menu>
      </div>;
  }
}
