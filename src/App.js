import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import ContentRoutes from './routes/contentRoutes'
import {Layout} from 'antd'
import TopMenu  from './components/topMenu'
const {Header, Content, Footer} = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { blockInfo: {}, blocks: [], blockSeq: 1, account:{} };
    console.log("App is loading");
  }
  componentDidMount() {
    console.log("App is loading")
  }

  render() {
    return <div >
    <Layout className="layout" style={{minHeight:'100vh'}}>
      <Header>
          <TopMenu/>
      </Header>
      <Content style={{flexGrow:1, backgroundColor:"white", padding:'20px' }}>
        <div className="content">
          <ContentRoutes/>
        </div>
      </Content>
      <Footer style={{textAlign:'center'}}> the demo of eos block chain</Footer>
      </Layout>
    </div>
  }
}

export default App;
