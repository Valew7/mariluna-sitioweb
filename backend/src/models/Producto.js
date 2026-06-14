// Modelo de Producto para MongoDB usando Mongoose
// Representa los productos del catálogo

const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  imagen: { type: String },
  categoria: { type: String }, // Ej: "pastel", "cupcake", etc.
  disponible: { type: Boolean, default: true }
}, {
  timestamps: true
});

// Exportamos el modelo Producto
module.exports = mongoose.model('Producto', productoSchema);
