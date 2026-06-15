const mensajeRepo = require('../repository/MensajeRepository');

module.exports = {
  async crear(req, res) {
    try {
      const { nombre, correo, telefono, mensaje } = req.body;

      if (!nombre || !correo || !telefono || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }

      const nuevoMensaje = await mensajeRepo.crear(req.body);
      res.status(201).json(nuevoMensaje);
    } catch (err) {
      console.error('Error al crear mensaje:', err);
      res.status(500).json({ error: 'Error al guardar el mensaje' });
    }
  },

  async listar(req, res) {
    try {
      const mensajes = await mensajeRepo.obtenerTodos();
      res.json(mensajes);
    } catch (err) {
      console.error('Error al obtener mensajes:', err);
      res.status(500).json({ error: 'Error al obtener mensajes' });
    }
  }
};
