const express = require('express');
const router = express.Router();
const mensajeController = require('../controller/mensajeController');

router.post('/', mensajeController.crear);
router.get('/', mensajeController.listar);

module.exports = router;
