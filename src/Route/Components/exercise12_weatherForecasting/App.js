import React, { useState } from "react";
import DisplayComponent from "./displayComponent"

import "./App.css"

const App = () => {
    const API_KEY = 'bfc25e0228b32c1df3885f94e1edde8e'
    const [city, setCity] = useState('')
    const [resp, setResp] = useState('')

    const handleClick = (event) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && (this.status === 200 || this.status === 404)) {
                const respFromXhttp = JSON.parse(xhttp.responseText)
                setResp(respFromXhttp)                
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    console.log(resp)

    return (
        <div>
            <h2 className="header">API Example - Weather App</h2>
            <div className="form">
                <input
                    type="text"
                    name="city"
                    onChange={e => setCity(e.target.value)}>
                </input>

                <button onClick={handleClick}>
                    Search!
                </button>
            </div>

            <div className="weather-report">
                <DisplayComponent resp = {resp} />
            </div>
        </div>
    )
}

export default App
