'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar Rutas
var user_routes = require ('./routes/user');//Cargamos las rutas del User Controller para que funcionen.

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cors

//Rutas
app.use('/api', user_routes); //Sobreescribo la url diciendo que mi acción se va a llamar en la url /api/rutaDeControlador
    // app.get('/', (req, res) => {
    //     res.status(200).send({
    //         message:'Ruta del Home'
    //     });
    // }); 

    // app.get('/pruebas', (req, res) => {
    //     res.status(200).send({
    //         message:'Acción de pruebas en el servidor de NodeJS'
    //     });
    // }); 

//Exportar
module.exports = app;