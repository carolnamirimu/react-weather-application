import React from "react";
import './Weather.css';
 function Weather(){
    return(
        <div className="Weather mt-5 p-3">
            <form>
                <div className="row">
                    <div className="col-6">
                <input type="search" placeholder="Enter City..."
                className="Form"/>
                </div>
                <div className="col-3">
                 <button type="button" class="btn btn-primary">Search</button>
                 </div>
                 </div>
            </form>
<h1>Kampala</h1>
<div className="row">
    <div className="col-6">
        <ul>
            <li>
                Tuesday 7/2023
            </li>
            <li>
                Partly Cloudy
            </li>
        </ul>
    </div>
    <div className="col-6">
        <ul>
            <li>
                Presipitation: 15%
            </li>
            <li>
                Humidity: 75%
            </li>
            <li>
                Wind: 3Km/hr
            </li>
        </ul>
    </div>
</div>
<div className="">
    <img src="
https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"/> <span className="temp">20</span><span className="units">°C </span>
</div>
        </div>
        );
}
export default Weather