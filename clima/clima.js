const axios = require("axios");


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bd2c9a6ebc8a64bc6c3ecc7b562ac6cb&units=metric`);

    return resp.data.main.temp;


}


module.exports = {

    getClima
}