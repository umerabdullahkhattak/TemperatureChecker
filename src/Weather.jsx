// src/components/Weather.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const API_KEY = '3ad9dd11594bb75211d220aaf9c4680d'; // Get an API key from a weather service provider

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  function roundToDecimalPlace(number) {
    const factor = 10 ** 2;
    return Math.ceil(number * factor) / factor;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };
  function timeConvertr(number){
    
  
  let date = new Date(number * 1000); 
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
   let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
   return formattedTime;
  
  }

  return (
    <div className='flex flex-col items-center  min-h-screen'>
      <h1 className='pb-10vh'>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather for {weatherData.name}</h2>
          <p>Temperature: {roundToDecimalPlace(weatherData.main.temp- 273.15)} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels Like: {roundToDecimalPlace( weatherData.main.feels_like- 273.15)} °C</p>
          <p>Max Temp: {roundToDecimalPlace( weatherData.main.temp_max- 273.15)} °C</p>
          <p>Min Temp: {roundToDecimalPlace( weatherData.main.temp_min- 273.15)} °C</p>
          <p>Sunrise: {timeConvertr( weatherData.sys.sunrise)}</p>
          <p>Sunset: {timeConvertr( weatherData.sys.sunset)}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
