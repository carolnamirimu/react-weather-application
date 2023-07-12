import React, {useState} from "react";
import WeatherForecast from "./WeatherForecast";
import axios from 'axios';
import './Weather.css';

import WeatherInfo from "./WeatherInfo";

 export default function Weather(props){
    const[weatherData, setWeatherData]=useState({ready:false});
    const[city, setCity]= useState(props.defaultcity);
    function displayWeather(response){
      
        setWeatherData({
           
            ready:true,
            coordinates:response.data.coord,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt*1000),
            description: response.data.weather[0].description,
            iconUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind:response.data.wind.speed,
            city:response.data.name
        });

    }
    function search(){
        let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(displayWeather); 
    }
    function handleSumit(event){
        event.preventDefault();
        search();
    }
    function handleCityChnage(event){
        setCity(event.target.value);

    }
    if(weatherData.ready){
    return(
        <div className="Weather mt-5 p-3">
            
            <form onSubmit={handleSumit}>
                <div className="row">
                    <div className="col-6">
                <input type="search" placeholder="Enter City..."
                className="Form"
                autoFocus="on"
                onChange={handleCityChnage}/>
                </div>
                <div className="col-3">
                 <input class="btn btn-primary"type ="submit"/>
                 </div>
                 </div>
               
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData. coordinates}/>
        </div>
                   );}
                     else{
                      
        search();
                        return("Loading....");
                        }}