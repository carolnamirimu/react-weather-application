import React, {useState} from "react";
import axios from 'axios';
import './Weather.css';

import WeatherInfo from "./WeatherInfo";

 export default function Weather(props){
    const[weatherData, setWeatherData]=useState({ready:false});
    const[city, setCity]= useState(props.defaultcity);
    function displayWeather(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt*1000),
            description: response.data.weather[0].description,
            iconUrl:"https://openweathermap.org/img/wn/${respose.data.weather[0].icon}@2x.png",
            wind:response.data.wind.speed,
            city:response.data.name
        });

    }
    function search(){
        let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
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

        </div>
                   );}
                     else{
                      
        search();
                        return("Loading....");
                        }}