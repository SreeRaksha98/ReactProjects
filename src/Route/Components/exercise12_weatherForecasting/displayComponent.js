import React from "react";

const DisplayComponent = (prop) => {
    if (prop.resp?.coord) {
        return (
            <div>
                <ul>
                    {/* <li>{prop.coord.resp}</li> */}
                    <li>latitude: {prop.resp.coord.lat}</li>
                    <li>longitude: {prop.resp.coord.lon}</li>
                    <li>Country: {prop.resp.sys.country}</li>
                    <li>Weather: {prop.resp.weather.map((weather) => weather.main)}</li>
                </ul>
            </div>
        )
    }
    else if(prop.resp.cod === '404'){
        return(
        <div>city not found</div>
        )
    }
}

export default DisplayComponent
