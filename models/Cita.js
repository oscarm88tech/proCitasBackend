const mongoose = require ('mongoose');

// el modelo que se va a implementar debe ser el mismo a la base de datos 

const citaSchema = mongoose.Schema({

    entidad:{
        type: String,
        require: true
    },

    especialidad:{
        type: String,
        require: true
    },
    sede:{
        type: String,
        require: true
    },
    costo: {
        type: Number,
        require: true
    },
    hora:{
        type: String,
        require: true
    },
    fecha:{
        type: Date,
        require: true
    }
},{versionkey: false});

module.exports = mongoose.model('Cita', citaSchema );