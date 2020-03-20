const opts ={
     descripcion:{
        demand:true,
        alias:'d',
        desc: 'Descripción de la tarea por hacer'
    },
    completado:{
        default: true,
        alias:'c',
        desc:'Marca como completado o pendiente la tarea'
    }
}


const argv = require('yargs')
.command('crear','Crear tareas para realizar',opts)
.command('actualizar','Actualiza el estado completado de una tarea',opts)
.command('borrar','Borra una tarea ',opts)
.help()
.argv;


module.exports ={
   argv
}