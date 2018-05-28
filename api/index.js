'use strict'

//Importamos Moongose pa poder conect y trabajar con MongoDB
var mongoose = require('mongoose');

var app = require('./app'); //Acá está express
var port = 3800; //Puerto en el q vamos a trabajar

//Usamos Promises pa conectarnos a MongoDB
mongoose.Promise = global.Promise;
//Llamamos al method connect y le pasamos la url de nuestra BD
//y como segundo parámetro, el cliente q vamos a usar en true pa q se conecte como cliente a MongoDB
//CONEXION A LA BD
mongoose.connect('mongodb://localhost:27017/red_social_evolution', {useMongoClient: true})
        .then(() => {
                        console.log("La conexión a la BD red_social_evolution fue exitosa!")
                        //CREAMOS SERVIDOR
                        app.listen(port, ()=> {
                                                console.log("Servidor corriendo en http://localhost:3800");
                                              });

                    })
        .catch(err => console.log(err));