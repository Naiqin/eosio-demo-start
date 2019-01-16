import React from 'react'
import { sha256} from 'js-sha256'

export default class Hash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            outputHash:""
        }
    }

    getHash = (e) => {
        let userInput = e.target.value
        var hash = sha256.create();
        hash.update(userInput);
        this.setState({ outputHash: hash.hex() });
        console.log(hash.hex());
        
    }
    render() {
        return <div>
            <div>
              请输入需要加密的字符串：
              <input onChange={this.getHash} />
            </div>
            <div>
              sha256结果：
              <div>{this.state.outputHash}</div>
            </div>
          </div>;
    }

}