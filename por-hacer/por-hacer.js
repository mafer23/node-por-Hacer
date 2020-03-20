const fs = require('fs');


let listadoPorHacer =[];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data, (err) =>{

        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {
     
        listadoPorHacer = []; 
    }


}

const getListado = (descripcion) => {
        cargarDB();

        return listadoPorHacer;

}


const crear = (descripcion) =>{

    cargarDB(); 

    let porHacer ={
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}
const actualizar = (descripcion, completado) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea =>{
          return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else{
        return false;
    }
}

const borrar = (descripcion) =>{

    cargarDB();

    let b =listadoPorHacer.filter(tarea =>{
        return tarea.descripcion !== descripcion
    });


    if (listadoPorHacer.length === b.length) {
        return false;
    }else{
        listadoPorHacer = b;
        guardarDB();
        return true;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}