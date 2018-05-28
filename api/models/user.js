'use strict'//pa utilizar nuevos estándares de js

var mongoose = require('mongoose');//cargamos el módulo mongoose, cuyos métodos vamo a utilizar para armar el modelo
var Schema = mongoose.Schema;//nos va a permitir definir nuevos esquemas usando el objeto Schema de mongoose.

var UserSchema = Schema({ //Mi UserSchema va a ser igual al método Schema, pasándole como parámetro un Json que va a tener todos los campos de la entidad usuario.
    name: String,
    surname: String,//apellido
    nick: String,//apodo
    email: String,
    password: String,
    role: String,
    image: String
});

module.exports = mongoose.model('User', UserSchema);//exporto mi entidad pasando como parámetro el 'NombreDeMiEntidad' y su Schema.

