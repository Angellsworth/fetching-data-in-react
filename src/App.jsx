import { useState, useEffect } from 'react'
// the star means import all
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

import './App.css'

const App = () => {
  const [weather, setWeather] = useState({});
  const fetchData = async (city) => {
    const data = await weatherService.show(city)
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState)
  } 

  useEffect(() => {
    const fetchDefaultData = async (city) => {
      const data = await weatherService.show(city)
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState)
    } 

    navigator.geolocation.getCurrentPosition(
      function(result) {
        const lat = result.coords.latitude;
        const long = result.coords.longitude;
        const locationString = `${lat}, ${long}`
        fetchDefaultData(locationString)
      }, function(error) {console.error(error)})
      
  }, [])

  useEffect(() => {
    const condition = weather.condition?.toLowerCase();
  
    if (condition?.includes('cloud')) {
      document.body.className = 'cloudy';
    } else if (condition?.includes('sun') || condition?.includes('clear')) {
      document.body.className = 'sunny';
    } else if (condition?.includes('night')) {
      document.body.className = 'night';
    } else {
      document.body.className = '';
    }
  
    // Clean up (remove the class when the component unmounts)
    return () => {
      document.body.className = '';
    };
  }, [weather]);
  

console.log('State', weather)
  return (
    <main>
      <h1>Weather API</h1>
      {/* fetchData is being passed as a prop */}
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails weather={weather} />
    </main>
  );
}

export default App
