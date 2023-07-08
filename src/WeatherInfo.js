import React from "react";
import FormttedDate from "./FormattedDate";

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
<div className="">
    <img src={props.data.iconUrl} alt={props.data.description}/> <span className="temp">{Math.round(props.data.temperature)}</span><span className="units">°C </span>
</div>
        </div>
    )
}