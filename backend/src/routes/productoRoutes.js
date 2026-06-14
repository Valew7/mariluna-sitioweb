// Rutas de productos
// Define los endpoints REST para productos

const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');

// Listar todos los productos
router.get('/', productoController.listar);
// Crear producto
router.post('/', productoController.crear);
// Obtener producto por ID
router.get('/:id', productoController.obtener);
// Actualizar producto
router.put('/:id', productoController.actualizar);
// Eliminar producto
router.delete('/:id', productoController.eliminar);

module.exports = router;
