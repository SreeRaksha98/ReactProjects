import * as React from "react"
import About from "./Components/About.js"
import Home from "./Components/Home.js"
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import PhoneNumberComponent from './Components/exercise1_phoneNumber_verification/App.js';
import StateChangeComponent from "./Components/exercise2_changeStates/App";
import CollapsableComponent from "./Components/exercise3_collapsableComponent/App.js"
import DarkMode from "./Components/exercise6_darkMode/App.js"
import JobAppComponent from "./Components/exercise7_registrationFrom/App"
import ContactManagerComponent from "./Components/exercise8_contactManager/App.js"
import NameManagerComponent from "./Components/Exercise9_FriendList/App"
import IplMatchList from "./Components/exercise10_IPLMatchList/App.js"
import HooksComponent from "./Components/exercise11_HooksComponent/App.js"
import WeatherForecasting from "./Components/exercise12_weatherForecasting/App.js"
import TodoAPI from "./Components/exercise13_todoAPI/App.js"
import FetchAPI from "./Components/exercise14_FetchAPI/App.js"
import FetchTodoAPI from "./Components/exercise13_todoFetchAPI/App.js"
import Post from "./Components/exercise14_FetchAPI/Post"

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
                        <Link className="item" to="/name-manager">Name Manager</Link>
                        <Link className="item" to="/IplMatchList">IPL Teams</Link>
                        <Link className="item" to="/HooksComponent">Hooks Concept task </Link>
                        <Link className="item" to="/WeatherForecasting">Weather Forecasting</Link>
                        <Link className="item" to="/TodoAPI">ToDo</Link>
                        <Link className="item" to="/FetchAPI">FetchAPI</Link>
                        <Link className="item" to="/FetchTodoAPI">Todo FetchAPI</Link>

                </div>
                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/PhoneNumberComponent" element={<PhoneNumberComponent />} />
                    <Route path="/StateChangeComponent" element={<StateChangeComponent />} />
                    <Route path="/CollapsableComponent" element={<CollapsableComponent />} />
                    <Route path="/DarkMode" element={<DarkMode />} />
                    <Route path="/JobAppComponent" element={<JobAppComponent />} />
                    <Route path="/ContactManagerComponent" element={< ContactManagerComponent />} />
                    <Route path="/name-manager" element={<NameManagerComponent />} />
                    <Route path="/IplMatchList" element={<IplMatchList />} />
                    <Route path="/HooksComponent" element={<HooksComponent />} />
                    <Route path="/WeatherForecasting" element={<WeatherForecasting />} />
                    <Route path="/TodoAPI" element={<TodoAPI/>} />
                    <Route path="/FetchAPI" element={<FetchAPI/>} />
                    <Route path="/FetchTodoAPI" element={<FetchTodoAPI/>} />
                    <Route path="/FetchAPI/Post" element = {<Post />} />

                </Routes>
            </div>
        </Router>
    )
}

export default App