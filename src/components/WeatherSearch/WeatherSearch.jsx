// src/components/WeatherSearch/WeatherSearch.jsx
//A front desk (WeatherSearch) for people to ask about the weather.
import { useState } from 'react';

const WeatherSearch = (props) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchData(city)
    // We'll call the fetch function here
    setCity('');
  };

  return (
    <section>
      <h2>Search</h2>
      {/* this onSubmit is the preventDefault for the form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
