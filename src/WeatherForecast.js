import React from "react";
import axios from "axios";
import "./Weatherforecast.css";
export default function WeatherForecast(props){
    
    function displayforecast(response){
        console.log(response.data);
    }
    let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
   let lon=props.coordinates.lon;
    let lat=props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayforecast);

    return (
        <div className="WeatherForcast">
<div className="row">
    <div className="col">
<div>Thur</div>
<div> <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Logo" />;
</div> <div></div>
<div>
    <span className="maxtemperatuer">23°</span>
    <span className="mintemperatuer"> 20°</span>
</div>
    </div>

</div>
        </div>
    )
}