import React, {useState} from "react";
import './Weather.css';

export default function WeatherTemperatuer(props){ 
const[unit,setUnit] = useState("celusius");

function showFerenehiet(event){
    event.preventDefault();
    setUnit("ferenehiet");
}

function showCelusius(event){
    event.preventDefault();
    setUnit("celusius");
}
if (unit==="celusius"){
    return(
    <span className="weathertemperatuer">
    <span className="temp">{Math.round(props.celusius)}</span>
    <span className="units">°C|
    <a href="/" onClick={showFerenehiet}>°F</a></span>
    </span>
);}
else
{let farenahiet = (props.celusius * 9)/5 +32;
    return(
    <span className="weathertemperatuer">
    <span className="temp">{Math.round(farenahiet)}</span>
    <span className="units">
    <a href="/" onClick={showCelusius}>°C</a>|°F</span>
    </span>
);}}