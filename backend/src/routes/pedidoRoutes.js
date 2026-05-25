// Rutas de pedidos
// Define los endpoints REST para pedidos

const express = require('express');
const router = express.Router();
const pedidoController = require('../controller/pedidoController');

// Crear pedido
router.post('/', pedidoController.crear);
// Listar pedidos
router.get('/', pedidoController.listar);
// Obtener pedido por ID
router.get('/:id', pedidoController.obtener);

module.exports = router;
