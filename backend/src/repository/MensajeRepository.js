const Mensaje = require('../models/Mensaje');

class MensajeRepository {
  async crear(data) {
    return await Mensaje.create(data);
  }

  async obtenerTodos() {
    return await Mensaje.find().sort({ createdAt: -1 });
  }
}

module.exports = new MensajeRepository();
