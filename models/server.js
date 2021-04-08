const express = require('express');
const cors = require('cors');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.Middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    Middlewares() {
        //CORS
        this.app.use(cors());

        //lectura y Parseo del body
        this.app.use(express.json());


        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        });
    }


}



module.exports = Server