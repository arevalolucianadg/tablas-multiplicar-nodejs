const fileSystem = require('fs');
const colors = require('colors');

const listarTablas = ( base, limite ) => {

    console.log('=============='.yellow);
    console.log(`Tabla del ${ base }`.yellow);
    console.log('=============='.yellow);

    for( let i = 1; i <= limite; i++ ) {
        console.log(`${base} * ${i} = ${ base * i }`);
    }
}

const crearTablas = ( base, limite ) => {
    
    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject('No es un número.')
            return
        }

        let dataFile = '';

        for( let i = 1; i <= limite; i++ ) {
            dataFile += `${base} * ${i} = ${ base * i } \n`;
        }

        fileSystem.writeFile( `tablas/tabla-${base}.txt`, dataFile, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        }) 
    } )
}

module.exports = {
    crearTablas,
    listarTablas
}