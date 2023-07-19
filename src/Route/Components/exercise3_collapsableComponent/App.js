import React, { Component } from "react";
import CollapsableComponent from "./collapsableComponent";
import {data} from "./dataToDispaly";

class App extends Component {
    render(){
        return(
            <div>
                {/* <CollapsableComponent collapsableData = {data}/> */}
                {data.map((item) => (<CollapsableComponent question = {item.question} answer = {item.answer}/>))}
            </div>
        )
    }
}

export default App