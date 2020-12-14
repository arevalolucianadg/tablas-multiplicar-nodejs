const { crearTablas, listarTablas } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

const argv = require('./config/yargs').argv;


// recibir base como argumento de la terminal
// let base = 'abc';
// let parametro_base = process.argv[2];
// let base = parametro_base.split('=')[1];

// let base = argv.base;

let comando = argv._[0],
    base    = argv.base, 
    limite  = argv.limite; 

switch( comando ) {
    case 'listar':
        listarTablas( base, limite )
    break;

    case 'crear':
        crearTablas( base, limite )
            .then( archivo => console.log(`El archivo creado es:`, colors.bold.yellow( archivo )))
            .catch( err => console.log(err))
    break;

    default:
        console.log('El comando ingresado no es válido.');
    break;
}
