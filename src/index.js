const express = require('express');
const ConectarBD = require('../config/db');
const cosr = require('cors');

const app = express();
// const port = 5000;
const port = process.env.PORT || 5000;

// enlazar conexion con la base de datos 
ConectarBD();
app.use(cosr());


// habilitamos express.json
app.use(express.json({extended: true}));

// rutas de mi aplicacion (pendiente agregar)

app.use('/api/citas', require('../routes/citasRuta'));
app.use('/api/clientes', require('../routes/cliente'));
app.use('/api/auth',require("../routes/auth"));
app.use('/api/usuarios', require("../routes/usuarios"));
app.use('/api/medico', require('../routes/medicoRuta'));

/*
app.use('/api/productos', require('../routes/producto'));
app.use('/api/auth',require("../routes/auth"));
app.use('/api/usuarios', require("../routes/usuarios"));*/

// rutas de prueba y configuracion 

app.get('/', (req, res) =>{
    res.send("Bienvenido estamos desde el navegador");
})

app.listen(port,() => console.log('estamos conectados el servidor con el puerto ', port));
