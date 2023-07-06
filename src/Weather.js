import React, {useState} from "react";
import axios from 'axios';
import './Weather.css';
import FormttedDate from "./FormattedDate";

 export default function Weather(props){
    const[weatherData, setWeatherData]=useState({ready:false});
    function displayWeather(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt*1000),
            description: response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind:response.data.wind.speed,
            city:response.data.name
        });

    }
    
    if(weatherData.ready){
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
<h1>{weatherData.city}</h1>
<div className="row">
    <div className="col-6">
        <ul>
            <li>
                <FormttedDate date={weatherData.date}/>
            </li>
            <li className="text-capitalize">
                {weatherData.description}
            </li>
        </ul>
    </div>
    <div className="col-6">
        <ul>
        
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
    <img src={weatherData.iconUrl} alt={weatherData.description}/> <span className="temp">{Math.round(weatherData.temperature)}</span><span className="units">°C </span>
</div>
        </div>
                   );}
                     else{
                        let apiKey = "5293d8454b519c30f6f6331f38c85b4c";
                        let city ="Kampala";
                        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
                        
                        axios.get(apiUrl).then(displayWeather);
        
                        return("Loading....");
                        }}