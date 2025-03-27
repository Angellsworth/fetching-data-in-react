import { useState } from 'react'
// the star means import all
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';

import './App.css'

const App = () => {
  const [weater, setWeather] = useState({});
  
  const fetchData = async () => {
    const data = await weatherService.show('Munchen')
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState)
  }

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch />
    </main>
  );
}

export default App
