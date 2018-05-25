'use strict'

//Importamos Moongose pa poder conect y trabajar con MongoDB
var mongoose = require('mongoose');

//Usamos Promises pa conectarnos a MongoDB
mongoose.Promise = global.Promise;
//Llamamos al method connect y le pasamos la url de nuestra BD
//y como segundo parámetro, el cliente q vamos a usar en true pa q se conecte como cliente a MongoDB
mongoose.connect('mongodb://localhost:27017/red_social_evolution', {useMongoClient: true})
        .then(() => {
                        console.log("La conexión a la BD red_social_evolution fue exitosa!")
                    })
        .catch(err => console.log(err));