// Repositorio de Pedidos: acceso a la base de datos
// Aplica el principio de inversión de dependencias (SOLID)

const Pedido = require('../models/Pedido');

class PedidoRepository {
  async crear(data) {
    return await Pedido.create(data);
  }

  async obtenerTodos() {
    return await Pedido.find().populate('productos.producto');
  }

  async obtenerPorId(id) {
    return await Pedido.findById(id).populate('productos.producto');
  }
}

module.exports = new PedidoRepository();
