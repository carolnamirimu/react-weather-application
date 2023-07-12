import React,{useState} from "react";
import axios from "axios";
import "./Weatherforecast.css";
export default function WeatherForecast(props){
    
    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);

    function displayforecast(response){
      
       setForecast(response.data.daily);
       setLoaded(true);
    }

if (loaded){
    console.log(forecast);
    return (
        <div className="WeatherForecast">
<div className="row">
    <div className="col">
<div>{forecast[0].dt}</div>
<div>
    <br/>
     <span>
        <img src={forecast[0].weather[0].icon} alt={forecast[0].weather[0].description}/>  
     </span>;
</div> 
<div>
    <span className="maxtemperatuer"> {Math.round(forecast[0].temp.max)}°</span>
    <span className="mintemperatuer"> {Math.round(forecast[0].temp.min)}°</span>
   
</div>
    </div>

</div>
        </div>
        
    );
}
else {
        let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
        let lon=props. coordinates.lon;
         let lat=props.coordinates.lat;
         let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
     
         axios.get(apiUrl).then(displayforecast);
         
         return null;
    }}