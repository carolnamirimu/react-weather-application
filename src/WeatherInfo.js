import React from "react";
import FormttedDate from "./FormattedDate";
import WeatherTemperatuer from "./WeatherTemperatuer";



export default function WeatherInfo(props){
    return (
        <div>
            <h1>{props.data.city}</h1>
<div className="row">
    <div className="col-6">
        <ul>
            <li>
                <FormttedDate date={props.data.date}/>
            </li>
            <li className="text-capitalize">
                {props.data.description}
            </li>
        </ul>
    </div>
    <div className="col-6">
        <ul>
        
            <li>
                Humidity: {props.data.humidity} %
            </li>
            <li>
                Wind:{props.data.wind} Km/hr
            </li>
        </ul>
    </div>
</div>
<div>
    <img src={props.data.iconUrl} alt={props.data.description}/> 
    <WeatherTemperatuer celusius={props.data.temperature}/>
    
</div>
        </div>
    )
}