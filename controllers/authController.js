const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const {validationResult} = require("express-validator");
const jwt = require ("jsonwebtoken");

exports.autenticarUsuario = async(req, res) => {
    // vamos a revisar errores 
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()});
    }

    const {email, password} = req.body;

    try {

        // revisar que el usuario este registrado 

        let usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({msg:"El usuario no existe"});

        }
        // revisamos el password
        const passok = await bcryptjs.compare(password, usuario.password);
        if(!passok){
            return res.status(400).json({msg:"contraseña incorrecta"});
        }

        // si todo es correcto, creamos y firmamos el token 

        const payload ={
            usuario: {id: usuario.id},
        };

        jwt.sign(
            payload,process.env.SECRETA,
            {
                expiresIn: 3600, // 1 hora

            },
            (error,token) =>{
                if(error)throw error;
                // mensaje de confirmacion
                res.json({token});
            }
        );





        
    } catch (error) {
        console.log("hubo un error");
        console.log(error);
        res.status(400).send("hubo un error")
        
    }

}

exports.usuarioAutenticado = async ( req,res) =>{
    try {
        
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario})
    } catch (error) {
        res.status(500).json({msg: "hubo un error"})
    }
}