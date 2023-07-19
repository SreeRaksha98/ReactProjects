import * as React from "react";
import BackgroundImage from '../images/palace_1.jpg'

class Home extends React.Component{
    render(){
        return(
            <div className="p-4">
          <div className="welcome">
            <div className="content rounded-3 p-3">
              <h1 className="fs-3">Welcome to Mysore Dairies</h1>
              <p className="mb-0">Hello viewers, welcome to our awesome dashboard!</p>
            </div>
          </div>

          <section className="statistics mt-4">
            <div className="row">
              <img src={BackgroundImage} alt="Background image" className="backgroundImage" />
            </div>
          </section>
        </div>
        )
    }
}

export default Home