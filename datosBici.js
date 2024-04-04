// leer el JSON
const fs = require('fs');
const bicisJSON = fs.readFileSync('./bicicletas.json','utf-8');
// parsear el JSON
const leerJSON = () => {
    return JSON.parse(bicisJSON)
}
//console.log(leerJSON(bicisJSON));


// exportar el JSON parseado

module.exports = leerJSON
