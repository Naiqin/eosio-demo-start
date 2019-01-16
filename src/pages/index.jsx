import React, { Component } from "react";
import "./index.css";
import blockImageInfo from '../assets/images/EOS-block-info.png'
// import Eos from "eosjs";
const keyProvider = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
// const httpEndpoint = "https://www.eosdocs.io/resources/apiendpoints";
const httpEndpoint = "http://jungle.cryptolions.io:18888";
const chainId ="038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca";
const Eos = require("eosjs");
const eos = Eos({
  chainId:chainId,
  keyProvider: "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3",
  httpEndpoint
});

const callback = (err, res) => {
  err ? console.ls(err) : console.log(res);
};

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { blockInfo: {}, blocks: [], blockSeq: 1, account: {} };
  }
  componentDidMount() {
    console.log("loading index")
  }

  getInfo = () => {
    eos.getInfo((error, info) => {
      console.log(error, info);
      this.setState({ blockInfo: info });
    });
  };
  getBlock = () => {
    const { blocks, blockSeq } = this.state;
    eos.getBlock(this.state.blockSeq).then(res => {
      console.log(res);
      blocks.push(res);
      this.setState({ blocks, blockSeq: blockSeq + 1 });
    });
  };
  getBalance = () => {
    eos
      .getCurrencyBalance({
        code: "eosio.token",
        account: "eosio",
        symbol: "DEV"
      })
      .then(result => console.log(result));
  };

  getDisplayContent = info => {
    const allInfo = [];
    for (let key in info) {
      allInfo.push(
        <div key={key}>
          {key}: {JSON.stringify(info[key])}
        </div>
      );
    }
    allInfo.push(<hr key={info.toString()}/>);
    return allInfo;
  };

  getAccount = () => {
    eos.getAccount({ account_name: "eoshackathon" }, (err, res) => {
      err ? console.error(err) : this.setState({ account: res });
    });
  };

  render() {
    const { blockInfo, blocks, account } = this.state;
    const blockChainInfo = this.getDisplayContent(blockInfo);
    const accountInfo = this.getDisplayContent(account);
    const allBlocks = blocks.map(block => this.getDisplayContent(block));
    return (
      <div className="App">
        <div className="btn-area">
          <button onClick={this.getInfo}>
            获取区块链信息
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.getBlock}>获取区块信息</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.getBalance}>获取账户信息</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.getAccount}>获取个人账户信息</button>
        </div>
        <hr />
        <p>个人信息(eoshackathon)：</p>
        <div style={{ textAlign: "left" }}>{accountInfo}</div>
        <hr />
        <p>区块链的总体信息</p>
        <div style={{ textAlign: "left" }}>{blockChainInfo}</div>
        <hr />
        <div>
          <p>区块信息如下：</p>
          <img src={blockImageInfo} alt="区款链信息" />
          <div style={{ textAlign: "left" }}>{allBlocks}</div>
        </div>
      </div>
    );
  }
}
