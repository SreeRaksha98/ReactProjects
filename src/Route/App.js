import * as React from "react"
import About from "./Components/About.js"
import Home from "./Components/Home.js"
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';

import PhoneNumberComponent from './Components/exercise1_phoneNumber_verification/App.js';
import StateChangeComponent from "./Components/exercise2_changeStates/App";
import CollapsableComponent from "./Components/exercise3_collapsableComponent/App.js"
// import TravelsProject from "./Components/exercise5_travelsProject/App.js"
import DarkMode from "./Components/exercise6_darkMode/App.js"
import JobAppComponent from "./Components/exercise7_registrationFrom/App"

const App = () => {
    return(
        <Router>
            <div>
            <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/PhoneNumberComponent">PhoneNumberComponent</Link>
                </li>
                <li>
                    <Link to="/StateChangeComponent">StateChangeComponent</Link>
                </li>
                <li>
                    <Link to="/CollapsableComponent">CollapsableComponent</Link>
                </li>
                {/* <li>
                    <Link to="/TravelsProject">TravelsProject</Link>
                </li> */}
                <li>
                    <Link to="/DarkMode">DarkMode</Link>
                </li>
                <li>
                    <Link to="/JobAppComponent">JobAppComponent</Link>
                </li>
                </ol>
            <hr />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/About" element={<About />}/>
                <Route path="/PhoneNumberComponent" element={<PhoneNumberComponent />}/>
                <Route path="/StateChangeComponent" element={<StateChangeComponent />}/>
                <Route path="/CollapsableComponent" element={<CollapsableComponent />}/>
                {/* <Route path="/TravelsProject" element={<TravelsProject />}/> */}
                <Route path="/DarkMode" element={<DarkMode />}/>
                <Route path="/JobAppComponent" element={<JobAppComponent />}/>                
            </Routes>
            </div>
        </Router>
    )
}

export default App