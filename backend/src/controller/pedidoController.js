// Controlador de Pedidos
// Separa la lógica de negocio de las rutas (patrón MVC)

const pedidoRepo = require('../repository/PedidoRepository');

module.exports = {
  // Crear un nuevo pedido
  async crear(req, res) {
    try {
      // Validación básica
      const { cliente, productos, total } = req.body;
      if (!cliente || !productos || !total) {
        return res.status(400).json({ error: 'Datos incompletos' });
      }
      const pedido = await pedidoRepo.crear(req.body);
      res.status(201).json(pedido);
    } catch (err) {
      res.status(400).json({ error: 'Error al crear pedido' });
    }
  },

  // Obtener todos los pedidos
  async listar(req, res) {
    try {
      const pedidos = await pedidoRepo.obtenerTodos();
      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener pedidos' });
    }
  },

  // Obtener pedido por ID
  async obtener(req, res) {
    try {
      const pedido = await pedidoRepo.obtenerPorId(req.params.id);
      if (!pedido) return res.status(404).json({ error: 'No encontrado' });
      res.json(pedido);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener pedido' });
    }
  }
};
