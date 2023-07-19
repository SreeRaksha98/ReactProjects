import React, {Component} from "react";
import "./collapsableComponent.css";

class CollapsableComponent extends Component {
    constructor(){
        super()
        this.state ={
            expand : false
        }
    }
    handleClickPlus = () => (this.setState({
        expand : true
    }))
    handleClickMinus =() => {
        this.setState({
        expand : false
    })}

    render(){
        return(
            <div>
                <div>
                    <button className={!this.state.expand ? 'Active' : 'inActive'} onClick={this.handleClickPlus}>+</button>
                    <button className={this.state.expand ?'Active' : 'inActive'} onClick={this.handleClickMinus}>-</button>
                    {this.props.question}
                </div>
                <div className={this.state.expand ? 'Active' : 'inActive'}>
                    {this.props.answer}
                </div>
            </div>
        )
    }
}

export default CollapsableComponent