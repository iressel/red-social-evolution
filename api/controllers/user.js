'use strict'

//bcrypt nos permite cifrar las passwords.
var bcrypt = require('bcrypt-nodejs');

//Importo el modelo usuario a la variable User, primera letra en mayúscula para indicar que es un modelo.
var User = require ("../models/user");

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

function saveUser(req, res){ //como todos los métodos voy a recibir una request y una response
    var params = req.body; //Todos los campos que me lleguen por POST, se guardan en "params"
    var user = new User();//creamos la instancia de User ya que la necesitamos para guardar nuestro usuario

    if (params.name && params.surname && params.nick && params.email && params.password)
    {
        //si a condición es true, asignamos el valor a cada uno de los atributos del objeto usuario
        user.name = params.name;
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.role ='ROLE_USER';
        user.image = null;
        
        bcrypt.hash(params.password, null, null, (err,hash) => {
            user.password = hash;

            user.save((err, userStored) => {
                //Acá utilizamos cláusula de guarda, si se cumple la condición ponemps return.
                if (err) return res.status(500).send({message:'Se produjo un error al guardar el usuario.'});
                //Compruebo si el userStored existe
                if(userStored)
                {
                    res.status(200).send({user:userStored});
                }
                else
                {
                    res.status(404).send({message:'No se ha podido registrar el usuario.'});
                }
            });
        });
    }
    else// si la condición no se cumple, enviamos una respuesta con un 200 que nos mande un json con un mensaje de campos obligatorios.
    {
        res.status(200).send({
            message: 'Debe completar todos los campos obligatorios.'
        });
    }

}

//Exporto todos mis métodos para ya poder acceder a ellos desde fuera de mi controller y debo crear la ruta en routes/user

module.exports = {
    home,
    pruebas,
    saveUser
};

