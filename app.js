const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");


const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El Clima de ${coordenadas.direccion} es de ${temp},`;


    } catch (error) {

        return `No se Pudo Determinar el Clima de ${direccion}`;



    }



}

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la Ciudad Para obtener el clima",
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch((err) => console.log("ERROR!!  ->", err));


//clima.getClima(10.600000, -67.029999)
// .then(console.log)
// .catch(console.log);

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)

//openweathermap.org