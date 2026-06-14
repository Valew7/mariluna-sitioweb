// src/config/db.js
const mongoose = require('mongoose');
const Producto = require('../models/Producto');

const productosIniciales = [
  {
    nombre: 'Cupcakes',
    descripcion: 'Deliciosos cupcakes para cualquier ocasión',
    precio: 6000,
    imagen: 'https://images.unsplash.com/photo-1711546911752-719d525d6fb4?q=80&w=1470&auto=format&fit=crop',
    categoria: 'cupcake',
    disponible: true
  },
  {
    nombre: 'Cheesecakes',
    descripcion: 'Cremosos y suaves, con sabores únicos',
    precio: 90000,
    imagen: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80',
    categoria: 'cheesecake',
    disponible: true
  },
  {
    nombre: 'Postres de Chocolate',
    descripcion: 'Para los amantes del chocolate',
    precio: 80000,
    imagen: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=803&auto=format&fit=crop',
    categoria: 'chocolate',
    disponible: true
  },
  {
    nombre: 'Galletas Artesanales',
    descripcion: 'Galletas frescas hechas con amor',
    precio: 2500,
    imagen: 'https://images.unsplash.com/photo-1583743089695-4b816a340f82?q=80&w=1470&auto=format&fit=crop',
    categoria: 'galleta',
    disponible: true
  },
  {
    nombre: 'Macarons',
    descripcion: 'Elegantes macarons franceses',
    precio: 3500,
    imagen: 'https://images.unsplash.com/photo-1634560604992-7784a29bc419?q=80&w=1470&auto=format&fit=crop',
    categoria: 'macaron',
    disponible: true
  }
];

const conectarDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mariluna';

  try {
    await mongoose.connect(uri);

    console.log('✅ Conectado a MongoDB con éxito');

    // Asegura que el producto especial no se incluya en el catálogo de productos.
    await Producto.deleteMany({ nombre: 'Pasteles Personalizados' });

    const productosGuardados = await Producto.countDocuments();
    if (productosGuardados === 0) {
      await Producto.insertMany(productosIniciales);
      console.log('✅ Catálogo inicial cargado en la colección productos');
    }
  } catch (err) {
    console.error('❌ Error de conexión a MongoDB:', err);
    console.error(err.stack || 'No stack available');
    process.exit(1); // Detiene el servidor si la base de datos falla
  }
};

module.exports = conectarDB;