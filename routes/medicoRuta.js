const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

// creamos las rutas del crud
router.post('/',medicoController.agregarMedicos);
router.get('/',medicoController.mostrarMedicos);
router.put('/:id',medicoController.actualizarMedicos);
router.delete('/:id',medicoController.eliminarMedicos);

router.get('/:id',medicoController.buscarMedicos);

/*
 //router.patch('/:id',clienteController.modificarClientes);
 */

module.exports = router;