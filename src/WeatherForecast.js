import React,{useState, useEffect} from "react";
import axios from "axios";
import "./Weatherforecast.css";
import Weatherforecastday from "./Weatherforecastday";
export default function WeatherForecast(props){
    
    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);

    useEffect(()=>{
        setLoaded(false);
    },[props.coordinates]);
  
    function displayforecast(response){
      
       setForecast(response.data.daily);
       setLoaded(true);
    }

if (loaded){
    return (
        <div className="WeatherForecast">
<div className="row">

{forecast.map(function(dailyforecast,index)
{if (index < 5){
    return(
        <div className="col" key={index}>
        <Weatherforecastday data={dailyforecast}/>
    </div>

    );
}else{
    return null;
}
})}
  
</div>
        </div>
        
    );
}
        let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
        let lon=props.coordinates.lon;
         let lat=props.coordinates.lat;
         let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
     
         axios.get(apiUrl).then(displayforecast);
         
         return null;
    }