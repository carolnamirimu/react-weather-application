import React, {useState} from "react";
import axios from 'axios';
import './Weather.css';

import WeatherInfo from "./WeatherInfo";

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
            <WeatherInfo data={weatherData}/>

        </div>
                   );}
                     else{
                        let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
                        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
                        
                        axios.get(apiUrl).then(displayWeather);
        
                        return("Loading....");
                        }}