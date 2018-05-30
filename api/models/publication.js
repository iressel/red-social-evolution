'use strict'//pa utilizar nuevos estándares de js

var mongoose = require('mongoose');//cargamos el módulo mongoose, cuyos métodos vamo a utilizar para armar el modelo
var Schema = mongoose.Schema;//nos va a permitir definir nuevos esquemas usando el objeto Schema de mongoose.

var PublicationSchema = Schema({ //Mi UserSchema va a ser igual al método Schema, pasándole como parámetro un Json que va a tener todos los campos de la entidad usuario.
    user: { type: Schema.ObjectId, ref: 'User' },//id del objeto usuario al que está relacionado.
    text: String,
    file: String,
    created_at: String
});

module.exports = mongoose.model('Publication', PublicationSchema);//exporto mi entidad pasando como parámetro el 'NombreDeMiEntidad' y su Schema.
