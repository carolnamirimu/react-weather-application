import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Weatherforecastday(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div>
      <div>{day()}</div>
      <div>
        <br />
        <span>
         <WeatherIcon code={props.data.weather[0].icon} />
        </span>
      </div>
      <div>
        <span className="maxtemperatuer">
          {" "}
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="mintemperatuer">
          {" "}
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
