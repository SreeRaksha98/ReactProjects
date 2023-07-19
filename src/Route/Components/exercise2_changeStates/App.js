import React, {Component} from "react"
import './App.css'

class StateChangeComponent extends Component {
  constructor(){
    super()
    this.state={
      step: 1
    }
    this.nextButtonClick = this.nextButtonClick.bind(this)
    this.prevButtonClick = this.prevButtonClick.bind(this)
  }

  prevButtonClick(event){
    this.setState((prevState) => ({
      step : prevState.step - 1
    })
    )
  }

  nextButtonClick(event){
    this.setState((prevState) => ({
      step : prevState.step + 1
    })
    )
  }

  render(){
    return(
      <div>
        <div className={this.state.step === 0 ? 'active' : 'inactive'}>
            step 0
        </div>
        <div className={this.state.step === 1 ? 'active' : 'inactive'}>
            step 1
        </div>
        <div className={this.state.step === 2 ? 'active' : 'inactive'}>
            step 2
        </div>
        <div className={this.state.step === 3 ? 'active' : 'inactive'}>
            step 3
        </div>
        <div>
          <button className="prevButton" name="prev" onClick={this.prevButtonClick}>Previous</button>
          <button className="nextButton" name="next" onClick={this.nextButtonClick}>Next</button>
        </div>
      </div>
    )
  }
}

export default StateChangeComponent;
