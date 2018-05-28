'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Cargar Datos

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cors

//Rutas
app.get('/', (req, res) => {
    res.status(200).send({
        message:'Ruta del Home'
    });
}); 

app.get('/pruebas', (req, res) => {
    res.status(200).send({
        message:'Acción de pruebas en el servidor de NodeJS'
    });
}); 
//Exportar
module.exports = app;