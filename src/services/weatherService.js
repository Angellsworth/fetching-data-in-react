// src/services/weatherService.js
//A back office (weatherService.js) that does the actual fetching of weather from an API.
const API_KEY = '4a87697951e74cfe9b9184203252703';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
   try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString)
    const data = await res.json()
    return data;
   } catch (error) {
    console.log(error)
   }
}

//"named" export syntax
export { show }