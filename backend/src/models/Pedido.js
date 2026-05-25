// Modelo de Pedido para MongoDB usando Mongoose
// Representa los pedidos realizados por los clientes

const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: {
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true },
    direccion: { type: String, required: true },
    notas: { type: String }
  },
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
      nombre: String,
      cantidad: { type: Number, required: true },
      precio: { type: Number, required: true },
      imagen: String
    }
  ],
  total: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Exportamos el modelo Pedido
module.exports = mongoose.model('Pedido', pedidoSchema);
