const argvOptions = {
    base: {
        demand: true,
        alias:  'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    },
}

const argv = require('yargs')
    .command(['listar', 'crear'], 'Tablas de multiplicar', argvOptions)
    .help()
    .argv;

module.exports = {
    argv
};