import React, {useState} from "react";
import axios from 'axios';
import './Weather.css';

 function Weather(){
    const[weatherData, setWeatherData]=useState({ready:false});
    function displayWeather(response){
        console.log(response.data);
        setWeatherData({
            temperature:response.data.main.temp,
            hunmidity:response.data.main.humidity,
            date:"Wednesday 07:00",
            description: response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind:response.data.wind.speed,
            city:response.data.name
        });
    }
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let city ="Kampala";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
                {weatherData.date}
            </li>
            <li className="text-capitalise">
                {weatherData.description}
            </li>
        </ul>
    </div>
    <div className="col-6">
        <ul>
            <li>
                Presipitation: 15%
            </li>
            <li>
                Humidity: {weatherData.humidity} %
            </li>
            <li>
                Wind:{weatherData.wind} Km/hr
            </li>
        </ul>
    </div>
</div>
<div className="">
    <img src={weatherData.iconUrl} alt={weatherData.description}/> <span className="temp">{weatherData.temperature}</span><span className="units">°C </span>
</div>
        </div>
        );
}
export default Weather