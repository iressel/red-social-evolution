'use strict'//pa utilizar nuevos estándares de js

var mongoose = require('mongoose');//cargamos el módulo mongoose, cuyos métodos vamo a utilizar para armar el modelo
var Schema = mongoose.Schema;//nos va a permitir definir nuevos esquemas usando el objeto Schema de mongoose.

//Se van a guardar los id del usuario que ha seguido a uno y el id del usuario que ha sido seguido

var MessageSchema = Schema({ //Mi UserSchema va a ser igual al método Schema, pasándole como parámetro un Json que va a tener todos los campos de la entidad usuario.
    emmiter: { type: Schema.ObjectId, ref: 'User' },//id del usuario que envía mensaje.
    receiver: { type: Schema.ObjectId, ref: 'User' },//id del usuario que recibe el mensaje.
    text: String,
    created_at: String
});

module.exports = mongoose.model('Message', MessageSchema);//exporto mi entidad pasando como parámetro el 'NombreDeMiEntidad' y su Schema.