// src/services/weatherService.js
//A back office (weatherService.js) that does the actual fetching of weather from an API.
const BASE_URL = `http://localhost:3000/api/weather`;

const show = async (city) => {
   try {
    const queryString = `?q=${city}`;
    const res = await fetch(BASE_URL + queryString)
    const data = await res.json()
    return data;
   } catch (error) {
    console.log(error)
   }
}

//"named" export syntax
export { show }