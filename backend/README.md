# Backend Mariluna Sitio Web

API REST para la gestión de productos y pedidos del sitio web de Mariluna Postres.

## Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors
- nodemon (desarrollo)

## Instalación

1. Abrir una terminal en la carpeta `backend`
2. Instalar dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en `backend` con al menos estas variables:

```env
MONGODB_URI=mongodb://localhost:27017/mariluna
PORT=8080
```

- `MONGODB_URI`: URL de conexión a MongoDB.
- `PORT`: puerto donde se ejecuta el servidor (por defecto `8080`).

## Ejecutar la aplicación

En desarrollo:

```bash
npm run dev
```

Visita `http://localhost:8080` para verificar que la API esté corriendo.

## Población inicial de productos

El archivo `poblar_productos.js` inserta productos de ejemplo en la base de datos.

```bash
node poblar_productos.js
```

## Endpoints

Base URL: `http://localhost:8080/api`

### Productos

- `GET /api/productos`
  - Lista todos los productos.

- `POST /api/productos`
  - Crea un nuevo producto.
  - Body JSON:

```json
{
  "nombre": "Pastel",
  "descripcion": "Descripción del producto",
  "precio": 120000,
  "imagen": "https://...",
  "categoria": "pastel",
  "disponible": true
}
```

- `GET /api/productos/:id`
  - Obtiene un producto por su ID.

- `PUT /api/productos/:id`
  - Actualiza un producto existente.
  - Body JSON con los campos a modificar.

- `DELETE /api/productos/:id`
  - Elimina un producto por su ID.

### Pedidos

- `GET /api/pedidos`
  - Lista todos los pedidos.

- `GET /api/pedidos/:id`
  - Obtiene un pedido por su ID.

- `POST /api/pedidos`
  - Crea un nuevo pedido.
  - Body JSON:

```json
{
  "cliente": {
    "nombre": "María Pérez",
    "telefono": "3001234567",
    "correo": "maria@example.com",
    "direccion": "Calle 123, Ciudad",
    "notas": "Entrega por la tarde"
  },
  "productos": [
    {
      "producto": "642b...",
      "nombre": "Cupcake",
      "cantidad": 2,
      "precio": 6000,
      "imagen": "https://..."
    }
  ],
  "total": 12000
}
```

## Modelos de datos

### Producto

- `nombre` (String, requerido)
- `descripcion` (String)
- `precio` (Number, requerido)
- `imagen` (String)
- `categoria` (String)
- `disponible` (Boolean, default `true`)

### Pedido

- `cliente`
  - `nombre` (String, requerido)
  - `telefono` (String, requerido)
  - `correo` (String, requerido)
  - `direccion` (String, requerido)
  - `notas` (String)
- `productos` (Array)
  - `producto` (ObjectId referencia a `Producto`, requerido)
  - `nombre` (String)
  - `cantidad` (Number, requerido)
  - `precio` (Number, requerido)
  - `imagen` (String)
- `total` (Number, requerido)
- `fecha` (Date, default `Date.now`)

## Notas

- La conexión a MongoDB se configura en `src/config/db.js`.
- Las rutas principales están en `src/routes`.
- El servidor arranca desde `src/server.js`.
- El archivo `src/app.js` configura Express, CORS y JSON.
