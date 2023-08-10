import * as React from "react"
import About from "./Components/About.js"
import Home from "./Components/Home.js"
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import PhoneNumberComponent from './Components/exercise1_phoneNumber_verification/App.js';
import StateChangeComponent from "./Components/exercise2_changeStates/App";
import CollapsableComponent from "./Components/exercise3_collapsableComponent/App.js"
// import TravelsProject from "./Components/exercise5_travelsProject/App.js"
import DarkMode from "./Components/exercise6_darkMode/App.js"
import JobAppComponent from "./Components/exercise7_registrationFrom/App"
import ContactManagerComponent from "./Components/exercise8_contactManager/App.js"

const App = () => {
    return (
        <Router>
            <div>
                <div className="ui secondary  menu">
                        <Link className="item" to="/">Home</Link>
                    
                        <Link className="item" to="/About">About</Link>
                    
                        <Link className="item" to="/PhoneNumberComponent">PhoneNumberComponent</Link>
                   
                        <Link className="item" to="/StateChangeComponent">StateChangeComponent</Link>
                    
                        <Link className="item" to="/CollapsableComponent">CollapsableComponent</Link>
                    
                        <Link className="item" to="/DarkMode">DarkMode</Link>
                    
                        <Link className="item" to="/JobAppComponent">JobAppComponent</Link>
                    
                        <Link className="item" to="/ContactManagerComponent">ContactManagerComponent</Link>
                    
                </div>
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/PhoneNumberComponent" element={<PhoneNumberComponent />} />
                    <Route path="/StateChangeComponent" element={<StateChangeComponent />} />
                    <Route path="/CollapsableComponent" element={<CollapsableComponent />} />
                    {/* <Route path="/TravelsProject" element={<TravelsProject />}/> */}
                    <Route path="/DarkMode" element={<DarkMode />} />
                    <Route path="/JobAppComponent" element={<JobAppComponent />} />
                    <Route path="/ContactManagerComponent" element={< ContactManagerComponent />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App