import React, { useState } from "react";
import "./App.css"
const App = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    // const [result, setResult] = useState(false)
    const [name, setName] = useState(localStorage.getItem('name'))

    const handleClickRememberMe = () => {
        setShowPopUp(true)
    }

    const handleClose = () => {
        setShowPopUp(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const valueFromInput = event.target[0].value
        if (!name) {
            localStorage.setItem('name', valueFromInput)
        }
        setName(valueFromInput)
        setShowPopUp(false)
    }

    const handleForget = () => {
        localStorage.removeItem('name')
        setShowPopUp(false)
        setName(localStorage.getItem('name'))
    }

    return (
        <div>
            <button onClick={handleClickRememberMe}>Remember Me</button>
            {
                showPopUp ?

                    <div className="pop-up-container">
                        <span onClick={handleClose}>x</span>
                        {
                            !name ?
                                (<form onSubmit={handleSubmit} >
                                    <div>
                                        <div className="ui input">
                                            <input type="text" name="name" placeholder="Enter your Name" ></input>
                                        </div>
                                        <button type='submit' name="submitButton">Submit</button>
                                    </div>
                                </form>) :
                                (<div>
                                    <h2>Hey {name}!..</h2>
                                    <button onClick={handleForget} >Forget Me ☹️</button>
                                </div>)
                        }
                    </div>
                    :
                    ''

            }

        </div>
    )
}

export default App