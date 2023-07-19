import React from "react";
import "./App.css"
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            isDarkMode : true
        }
    }

    componentDidMount() {
       if (document) {
        if(this.state.isDarkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
       }
    }


    handleChange = (event) =>{
        if(document?.body) {
            if(!this.state.isDarkMode) {
                document.body.classList.add('dark-mode')
            } else {
                document.body.classList.remove('dark-mode')
            }
            this.setState({
                isDarkMode:!this.state.isDarkMode
            })
        }

    }

    render(){
        return(
            <div className="main-container">
                <label>dark mode</label>
                <input type="checkbox" onChange={this.handleChange} defaultChecked={this.state.isDarkMode} />

                <div>
                    <p> {this.state.isDarkMode ? "Dark mode" : "Bright mode"}</p>
                </div>
            </div>
        )
    }
}

export default App