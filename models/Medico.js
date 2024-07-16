const mongoose = require ('mongoose');

// el modelo que se va a implementar debe ser el mismo a la base de datos 

const medicoSchema = mongoose.Schema({

    nombreMedico:{
        type: String,
        require: true
    },

    apellidoMedico:{
        type: String,
        require: true
    },
    especialidad:{
        type: String,
        require: true
    },
    salario: {
        type: Number,
        require: true
    },
    tipoContrato:{
        type: String,
        require: true
    },
    fechaContratacion:{
        type: Date,
        require: true
    }
},{versionkey: false});

module.exports = mongoose.model('Medico', medicoSchema );