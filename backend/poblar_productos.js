// Script para poblar la base de datos con productos por defecto
require('dotenv').config();
const mongoose = require('mongoose');
const Producto = require('./src/models/Producto');

const productos = [
  {
    nombre: 'Pasteles Personalizados',
    descripcion: 'Crea el pastel de tus sueños con nuestro formulario interactivo',
    precio: 120000,
    imagen: 'https://images.unsplash.com/photo-1760401697752-ab723885ff27?auto=format&fit=crop&w=800&q=80',
    categoria: 'pastel',
    disponible: true
  },
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

async function poblar() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Producto.deleteMany({});
    await Producto.insertMany(productos);
    console.log('Productos insertados correctamente');
    process.exit(0);
  } catch (err) {
    console.error('Error al poblar productos:', err);
    process.exit(1);
  }
}

poblar();
