const Cita = require('../models/Cita');

// funcion agregar citas 
exports.agregarCitas = async(req, res) => {
    try {

        let citas;
        citas = new Cita(req.body);
        await citas.save();
        res.send({citas});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Hubo un error al agregar una cita '});
    }

}

// funcion que nos va a mostrar todas las citas 
exports.mostrarCitas = async(req, res) =>{
    try{
        const citas = await Cita.find();
        res.json(citas);
    } catch(error){
        console.log(error);
        res.status(500).json({msg:'Hubo un error al mostrar las citas '});


    }
}



// funcion para buscar una cita 
exports.buscarCitas = async (req, res) => {
    try {
        let cita = await Cita.findById(req.params.id);

        if (!cita){
            res.status(404).json({msg: 'No se encontro la cita '})
        }else{
            res.send(cita);

        }
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error al Consultar la cita')

        
    }
}

// funcion para actualizar una cita 

exports.actualizarCitas = async(req, res) => {
    try {
        const citas = await Cita.findOneAndUpdate(
            { _id: req.params.id },req.body
        );
        if (!citas) {
            res.status(404).json({msg:"Cita no encontrada"});
        }else {
            res.json({citas});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Hubo un error al actualizar la cita "});
        
    }
};

exports.modificarClientes = async(req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!cliente){
            return res.status(404).send('Cliente no encontrado');

        }
        res.json(cliente);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al modificar al cliente ");
        
    }
}

exports.eliminarCitas = async (req, res) => {

    try {
        let citas = await Cita.findById(req.params.id);
        if(!citas){
            res.status(404).send('Cita no encontrada');

        }else{
            await Cita.findOneAndDelete({_id: req.params.id});
            res.json({msg: "la cita a sido eliminada"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar una cita ");
        
    }


}