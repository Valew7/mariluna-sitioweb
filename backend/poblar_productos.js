// Script para poblar la base de datos con productos por defecto
require('dotenv').config();
const mongoose = require('mongoose');
const Producto = require('./src/models/Producto');

const productos = [
  {
    nombre: 'Mousse de Chocolate Belga',
    descripcion: 'Suave mousse de chocolate belga 70% cacao (6 porciones)',
    precio: 38000,
    imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    categoria: 'chocolate',
    disponible: true
  },
  {
    nombre: 'Lava Cake',
    descripcion: 'Postre con centro líquido de chocolate caliente',
    precio: 12000,
    imagen: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8d03?auto=format&fit=crop&w=800&q=80',
    categoria: 'chocolate',
    disponible: true
  },
  {
    nombre: 'Brownies',
    descripcion: 'Brownies húmedos con nueces (8 unidades)',
    precio: 30000,
    imagen: 'https://images.unsplash.com/photo-1606312618508-16a7dd7bfb65?auto=format&fit=crop&w=800&q=80',
    categoria: 'chocolate',
    disponible: true
  },
  {
    nombre: 'Trufas de Chocolate Gourmet',
    descripcion: 'Trufas artesanales en chocolate oscuro, leche y blanco (15 unidades)',
    precio: 35000,
    imagen: 'https://images.unsplash.com/photo-1505253214613-4c7cb0d5f5a0?auto=format&fit=crop&w=800&q=80',
    categoria: 'chocolate',
    disponible: true
  },
  {
    nombre: 'Tarta de Chocolate y Caramelo',
    descripcion: 'Tarta cremosa con copos de chocolate y caramelo salado (6 porciones)',
    precio: 55000,
    imagen: 'https://images.unsplash.com/photo-1542826438-26a9c9237399?auto=format&fit=crop&w=800&q=80',
    categoria: 'chocolate',
    disponible: true
  },
  {
    nombre: 'Profiteroles de Chocolate',
    descripcion: 'Bolitas de masa choux rellenas de crema y cubiertas de chocolate (12 unidades)',
    precio: 28000,
    imagen: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&w=800&q=80',
    categoria: 'chocolate',
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
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mariluna';

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
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
