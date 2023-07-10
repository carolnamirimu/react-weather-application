import React from "react";
import "./Weatherforecast.css";
export default function WeatherForecast(){
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