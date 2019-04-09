const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción'
        },
    })
    .command('actualizar', 'Muestra los elementos por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Terminado'
        }
    })
    .command('borrar', 'Eliminar elemento', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion'
        }
    })
    .command('listar', 'Listar las cosas', {
        completado: {
            demand: true,
            alias: 'c',
            desc: 'estado'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}