// app.js - Configuración principal de la aplicación Express
// Aplica buenas prácticas y separación de responsabilidades

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db'); // Importamos la configuración desde config

const productoRoutes = require('./routes/productoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

// Inicializamos la conexión a la base de datos de MongoDB
conectarDB();

// Middlewares globales
app.use(cors());
app.use(express.json()); // Permite leer JSON en las peticiones body

// Rutas principales de la API
app.use('/api/productos', productoRoutes);
app.use('/api/pedidos', pedidoRoutes);

// Ruta de prueba de disponibilidad de la API
app.get('/', (req, res) => {
  res.send('API de Mariluna Postres funcionando correctamente');
});

module.exports = app;