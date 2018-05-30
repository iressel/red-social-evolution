'use strict'

//Importo el modelo usuario a la variable User, primera letra en mayúscula para indicar que es un modelo.
var User = require('../models/user');

function home (req, res) {
    res.status(200).send({
        message:'Ruta del Home'
    });
} 

function pruebas (req, res) {
    res.status(200).send({
        message:'Acción de pruebas en el servidor de NodeJS'
    });
}

//Exporto todos mis métodos para ya poder acceder a ellos desde fuera de mi controller

module.exports = {//Objeto Json que contiene los métodos que quiero devolver
    home,
    pruebas
}

