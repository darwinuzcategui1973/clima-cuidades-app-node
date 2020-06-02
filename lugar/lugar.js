// modulo para obtenrr lugar


const axios = require("axios");


const getLugarLatLng = async(direccionConsola) => {
    //console.log(argv.direccion);
    const encodeUrl = encodeURI(direccionConsola);


    const instance = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'edf83a7d3fmsh99887ec6651b48ep181dafjsncfee78627680' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${direccionConsola}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    return {
        direccion,
        lat,
        lng
    }

}
module.exports = {
    getLugarLatLng
}