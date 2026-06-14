// Repositorio de Productos: acceso a la base de datos
// Aplica el principio de inversión de dependencias (SOLID)

const Producto = require('../models/Producto');

class ProductoRepository {
  async crear(data) {
    return await Producto.create(data);
  }

  async obtenerTodos() {
    return await Producto.find();
  }

  async obtenerPorId(id) {
    return await Producto.findById(id);
  }

  async actualizar(id, data) {
    return await Producto.findByIdAndUpdate(id, data, { new: true });
  }

  async eliminar(id) {
    return await Producto.findByIdAndDelete(id);
  }
}

module.exports = new ProductoRepository();
