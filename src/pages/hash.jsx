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
        console.log(hash.hex());
        
    }
    render() {
        return <div>
            <input onChange={this.getHash}/>
        </div>
    }

}