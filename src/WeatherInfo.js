import React from "react";
import FormttedDate from "./FormattedDate";
import WeatherTemperatuer from "./WeatherTemperatuer";
import WeatherIcon from "./WeatherIcon";



export default function WeatherInfo(props){
    console.log(props);
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
    <WeatherIcon code={props.data.icon}/>

    
    <WeatherTemperatuer celusius={props.data.temperature}/>
    
</div>
        </div>
    )
}