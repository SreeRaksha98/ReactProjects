import React, { Component } from "react";
import "./App.css"
class JobAppComponent extends Component {
    constructor() {
        super()
        this.state = {
            step: 0
        }
    }

    handleClickPrevButton = (event) => {
        console.log('entering prev')
        this.setState({
            step: this.state.step - 1
        })
    }

    handleClickNextButton = (event) => {
        console.log('entering next')
        this.setState({
            step: this.state.step + 1
        })
    }

    handleSubmitButton = () => {
        console.log('entering submit')
        alert("thank you for your intereset..\nPlease wait for further update...!");
    }

    render() {
        console.log('entered render state:', this.state.step)
        return (
            <div className="mainContainer">
                {/* ---------------------------------------------------------title */}
                <div className="title">
                    <h2>Job Registration From - step{this.state.step} </h2>
                </div>

                <div className="subContainer">
                    {/* ---------------------------------------------------------title */}
                    <div className="screen">
                        <ul>
                            <li className={this.state.step === 0 ? 'active form-li' : ' form-li'}>intro</li>
                            <li className={this.state.step === 1 ? 'active form-li' : ' form-li'}>contact</li>
                            <li className={this.state.step === 2 ? 'active form-li' : ' form-li'}>ID</li>
                            <li className={this.state.step === 3 ? 'active form-li' : ' form-li'}>password</li>
                        </ul>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="detailsContainer">
                        {/* ---------------------------------------------------------intro */}
                        <div className={this.state.step === 0 ? 'activediv' : 'inactive'}>
                            <div className="item1 item">
                                {/* <label className="lable">Username </label> */}
                                <input autoComplete="off" name="text" className="inputEntry" type="text" placeholder="Username"/>
                            </div>
                            <div className="item2 item">
                                {/* <label className="lable">Position</label> */}
                                <input autoComplete="off" name="text" className="inputEntry" type="text" placeholder="Position"/>
                            </div>
                        </div>

                        {/* ---------------------------------------------------------contact */}
                        <div className={this.state.step === 1 ? 'activediv' : 'inactive'}>

                            <div className="item1 item">
                                {/* <label className="lable">Phone </label> */}
                                <input autoComplete="off" name="text" className="inputEntry" type="text" placeholder="Phone" />
                            </div>
                            <div className="item2 item">
                                {/* <label className="lable">Email</label> */}
                                <input autoComplete="off" name="text" className="inputEntry" type="text" placeholder="Email"/>
                            </div>
                        </div>

                        {/* ---------------------------------------------------------ID */}
                        <div className={this.state.step === 2 ? 'activediv' : 'inactive'}>
                            <div className="item1 item">
                                {/* <label className="lable">Date of Birth </label> */}
                                <input autoComplete="off" name="text" className="inputEntry" type="date" placeholder="Date of Birth"/>
                            </div>
                            <div className="item2 item">
                                {/* <label className="lable">Year of Experience</label> */}
                                <input autoComplete="off" name="text" className="inputEntry" type="text" placeholder="Year of Experience"/>
                            </div>
                        </div>

                        {/* ---------------------------------------------------------password */}
                        <div className={this.state.step === 3 ? 'activediv' : 'inactive'}>
                            <div className="item1 item">
                                {/* <label className="lable">Password</label> */}
                                <input autoComplete="off" name="text" className="inputEntry" type="text" placeholder="Password"/>
                            </div>
                            <div className="item2 item">
                                {/* <label className="lable">Confirm Password</label> */}
                                <input autoComplete="off" name="text" className="inputEntry" type="text" placeholder="Confirm Password"/>
                            </div>
                        </div>

                        {/* ---------------------------------------------------------buttons */}
                        <div className="buttons">
                            {this.state.step < 1 ?
                                (<button className="prevButton" disabled>Prev</button>) :
                                (<button className="prevButton" onClick={this.handleClickPrevButton}>Prev</button>)}

                            {this.state.step > 2 ?
                                (<button className="nextButton" onClick={this.handleSubmitButton}>Submit</button>) :
                                (<button className="nextButton" onClick={this.handleClickNextButton}>Next</button>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobAppComponent