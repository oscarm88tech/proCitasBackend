const Medico = require('../models/Medico');

// funcion agregar medico 
exports.agregarMedicos = async(req, res) => {
    try {

        let medicos;
        medicos = new Medico(req.body);
        await medicos.save();
        res.send({medicos});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Hubo un error al agregar el medico '});
    }

}

// funcion que nos va a mostrar todos los medicos 
exports.mostrarMedicos = async(req, res) =>{
    try{
        const medicos = await Medico.find();
        res.json(medicos);
    } catch(error){
        console.log(error);
        res.status(500).json({msg:'Hubo un error al mostrar los medicos '});


    }
}



// funcion para buscar un medico
exports.buscarMedicos = async (req, res) => {
    try {
        let medico = await Medico.findById(req.params.id);

        if (!medico){
            res.status(404).json({msg: 'No se encontro el medico '})
        }else{
            res.send(medico);

        }
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error al Consultar al medico')

        
    }
}

// funcion para actualizar un medico

exports.actualizarMedicos = async(req, res) => {
    try {
        const medico = await Medico.findOneAndUpdate(
            { _id: req.params.id },req.body
        );
        if (!medico) {
            res.status(404).json({msg:"medico no encontrado"});
        }else {
            res.json({medico});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Hubo un error al actualizar al medico "});
        
    }
};

exports.modificarMedicos = async(req, res) => {
    try {
        const medico = await Medicos.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!medico){
            return res.status(404).send('medico no encontrado');

        }
        res.json(medico);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al modificar al medico ");
        
    }
}

exports.eliminarMedicos = async (req, res) => {

    try {
        let medico = await Medico.findById(req.params.id);
        if(!medico){
            res.status(404).send('medico no encontrado');

        }else{
            await Medico.findOneAndDelete({_id: req.params.id});
            res.json({msg: "el medico a sido eliminado"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar al medico ");
        
    }


}