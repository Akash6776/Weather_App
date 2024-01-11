import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from "../Assets/search.png.png";
import clear_icon from "../Assets/clear.png.png";
import cloud_icon from "../Assets/cloud.png.png";
import drizzle_icon from "../Assets/drizzle.png.png";
import rain_icon from "../Assets/rain.png.png";
import snow_icon from "../Assets/snow.png.png";
import wind_icon from "../Assets/wind.png.png";
import humidity_icon from "../Assets/humidity.png.png";
import moon_icon from "../Assets/moon.png";
import cloudmoon_icon from "../Assets/cloudmoon.png";
import rainmoon_icon from "../Assets/rainmoon.png";

const WeatherApp =()=> {

    let api_key="85d14abb2898fef353ca2ef2c09bdbc4";

    const [wicon,setWicon] = useState(cloud_icon);


    const search= async()=>{
        const element=document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+" kmph";
        temprature[0].innerHTML = Math.floor(data.main.temp)+"°C";
        location[0].innerHTML = data.name+", "+data.sys.country;

        if(data.weather[0].icon==="01d")
        {
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="01n")
        {
            setWicon(moon_icon)
        }
        else if(data.weather[0].icon==="02d")
        {
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="02n")
        {
            setWicon(cloudmoon_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="04d" )
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="03n" || data.weather[0].icon==="04n")
        {
            setWicon(rainmoon_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }

    }

    return(
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search'/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
    
            </div>
            <div className="weather-image">
                <img src={wicon} alt=""/>
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">Delhi</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp