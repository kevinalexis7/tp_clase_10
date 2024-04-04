const fs = require('fs');
const datosBici = require('./datosBici');

const dhBici = {
    bicicletas : datosBici(),
    buscarBici : function (id) {
       /*  const resultado = this.bicicletas.filter((bici) => {
            return bici.id === id
        }); */
        //const bici2 = this.bicicletas.filter((bici) => bici.id === id)

       /*  if(resultado.length === 0){
            return null
        }else {
            return resultado
        } */
        
        //return resultado.length === 0 ? null : resultado

        //return resultado.length ? resultado : null

        const resultado = this.bicicletas.find((bici) => {
            return bici.id === id
        });
        return resultado || null

    },
    venderBici : function (id) {
        
        const biciAVender = this.buscarBici(id);

        if(!biciAVender){
            return "Bicicleta no encontrada"
        }else {
            const bicicletasActualizadas = this.bicicletas.map(bici => {
                if(bici.id === id){
                    bici.vendida = true;
                }
                return bici
            })

            fs.writeFileSync('./bicicletas.json', JSON.stringify(bicicletasActualizadas,null,2),'utf-8')

            return this.buscarBici(id)
        }
    },
    biciParaLaVenta : function () {
        return this.bicicletas.filter(bici => !bici.vendida)
    },
    totalDeVentas : function (params) {
        const montos = this.bicicletas.map(bici => bici.vendida ? bici.precio : 0);

        return montos.reduce((a,b) => a + b)
    },
    aumentoBici : function (porcentaje) {
        const bicicletasActualizadas = this.bicicletas.map(bici => {
           bici.precio = bici.precio + (bici.precio * porcentaje / 100)
           return bici
        })
        fs.writeFileSync('./bicicletas.json', JSON.stringify(bicicletasActualizadas,null,2),'utf-8')
        return this.bicicletas
    },
    biciPorRodado : function (rodado) {
        return this.bicicletas.filter(bici => bici.rodado === rodado)
    },
    listarTodasLasBici : function () {
        this.bicicletas.forEach((bici,index) => {
            console.log(`
                ---------------------------
                #: ${index + 1}
                MARCA: ${bici.marca}
                MODELO: ${bici.modelo}
                PRECIO : ${bici.precio}
            `)
        })
    },
}

console.log(dhBici.buscarBici(1))


//module.exports = dhBici