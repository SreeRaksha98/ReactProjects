import './App.css';
import React, {Component} from 'react';

class PhoneNumberComponent extends Component{
  constructor(){
    super()
    // console.log('constructor')
    this.state = {
      fName : '',
      lName : '',
      isContactNumCorrect : true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleContactNumSubmit = this.handleContactNumSubmit.bind(this)
  }

  handleChange(event){
    console.log('handle change -> entered')
    console.log('value entered in number field', event.target.value)
    let contactNumGivenByUser = event.target.value
    // let regExp = /[89][0-9]{9}/g
    let regExp =  /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    console.log(regExp.test(contactNumGivenByUser))
    this.setState({
      isContactNumCorrect : !!regExp.test(contactNumGivenByUser)
    })
  }

  handleContactNumSubmit(event){
    event.preventDefault() 
    this.state.isContactNumCorrect ? console.log('correct value') : console.log('enter valid number') 
  }

  render(){
    // console.log('render')
    console.log(this.state)

    return(
      <div>
        <form onSubmit= {this.handleContactNumSubmit} >
          <div className='formElement'>
            <label>Enter your contact Number :</label>
            <input type='number' name="cName" placeholder="Enter your contact number" onBlur={this.handleChange}/>
            <div className='error'>
              {this.state.isContactNumCorrect ? '' : 'enter valid number'} 
            </div>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }

}


export default PhoneNumberComponent;
