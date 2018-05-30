//Archivo que contiene la configuración de rutas del controlador de usuarios
'use strict'

var express = require ('express');
var UserController = require ('../controllers/user');

var api = express.Router();//Para tener acceso a los métodos GET, POST, PUT, DELETE, etc...

//Definimos cada una de las rutas del user controller

api.get('/home', UserController.home); //Llamamos al método GET y le pasamos como parámetros el path y la acción que corresponda del controlador.
api.get('/pruebas',UserController.pruebas);

module.exports = api;