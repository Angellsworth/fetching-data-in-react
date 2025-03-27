// src/components/WeatherDetails/WeatherDetails.jsx
//A display area (WeatherDetails) where you post today’s info.

const WeatherDetails = (props) => {
    console.log('WeatherDetails props:', props);
    return (
      <section>
        <h2>Weather Details</h2>
        <p>Location: {props.weather.location}</p>
        <p>Temperature: {props.weather.temperature}</p>
        <p>Condition: {props.weather.condition}</p>
      </section>
    );
  };
  
  export default WeatherDetails;