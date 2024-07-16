const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citacontroller');

// creamos las rutas del crud
router.post('/',citaController.agregarCitas);
router.get('/',citaController.mostrarCitas);
router.put('/:id',citaController.actualizarCitas);
router.delete('/:id',citaController.eliminarCitas);

router.get('/:id',citaController.buscarCitas);

/*
 //router.patch('/:id',clienteController.modificarClientes);
 */

module.exports = router;