// Controlador de Productos
// Separa la lógica de negocio de las rutas (patrón MVC)

const productoRepo = require('../repository/ProductoRepository');

module.exports = {
  // Obtener todos los productos
  async listar(req, res) {
    try {
      const productos = await productoRepo.obtenerTodos();
      res.json(productos);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener productos' });
    }
  },

  // Crear un producto
  async crear(req, res) {
    try {
      const producto = await productoRepo.crear(req.body);
      res.status(201).json(producto);
    } catch (err) {
      res.status(400).json({ error: 'Error al crear producto' });
    }
  },

  // Obtener producto por ID
  async obtener(req, res) {
    try {
      const producto = await productoRepo.obtenerPorId(req.params.id);
      if (!producto) return res.status(404).json({ error: 'No encontrado' });
      res.json(producto);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener producto' });
    }
  },

  // Actualizar producto
  async actualizar(req, res) {
    try {
      const producto = await productoRepo.actualizar(req.params.id, req.body);
      if (!producto) return res.status(404).json({ error: 'No encontrado' });
      res.json(producto);
    } catch (err) {
      res.status(400).json({ error: 'Error al actualizar producto' });
    }
  },

  // Eliminar producto
  async eliminar(req, res) {
    try {
      const producto = await productoRepo.eliminar(req.params.id);
      if (!producto) return res.status(404).json({ error: 'No encontrado' });
      res.json({ mensaje: 'Producto eliminado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar producto' });
    }
  }
};
