# Mariluna Postres — Sitio Web

**Programa:** Programación de aplicaciones y servicios para la nube  
**Actividad:** GA6-220501123-AA4 — Construir el frontend de aplicación Web  
**Evidencia:** GA6-220501123-AA4-EV01 — Sitio Web  
**Integrantes:**
-Camilo Andrés Durán Toro
-Valentina Hinestroza Pineda
-Michelle Paola Duque De La Rosa
 

---

## Descripción

Sitio web completo para **Mariluna Postres**, una pastelería artesanal. El proyecto incluye un frontend de 11 páginas HTML con carrito de compras funcional y un backend con API REST conectada a MongoDB. Los pedidos y mensajes de contacto se almacenan en la base de datos; el flujo de compra también integra botón WhatsApp (wa.me) para la confirmación del pedido. Todo realizado conforme a la fases de documentación realizadas a lo largo del proyecto y su alcance.

---

## Prototipo

El diseño fue prototipado en **Figma** antes del desarrollo, definiendo navegación, paleta de colores y adaptación a distintos dispositivos.

🔗 [Ver prototipo interactivo en Figma](https://www.figma.com/make/STUOofQywn0h2Whqz80wGy/Mariluna-Postres---Pagina-Principal?code-node-id=0-9&p=f&fullscreen=1)

Las capturas del diseño están en la carpeta `frontend/prototipo/`:

| Archivo | Descripción |
|---|---|
| `Desktop.png` | Vista escritorio |
| `Tablet.png` | Vista tablet |
| `Phone.png` | Vista móvil |
| `flujo-navegacion.png` | Diagrama de navegación entre páginas |

---

## Estructura del proyecto

```
mariluna-sitioweb-main/
├── frontend/                   # Sitio web (servido con Nginx)
│   ├── index.html
│   ├── catalogo.html
│   ├── cheesecakes.html
│   ├── cupcakes.html
│   ├── galletasartesanales.html
│   ├── macarons.html
│   ├── postresdechocolate.html
│   ├── pastelespersonalizados.html
│   ├── sobrenosotros.html
│   ├── contacto.html
│   ├── pago.html
│   ├── css/
│   │   └── estilo.css          # Estilos globales con media queries
│   ├── js/
│   │   └── app.js              # Lógica del carrito, carrusel y consumo de API
│   ├── src/
│   │   └── logo.png
│   └── prototipo/              # Capturas del diseño en Figma
├── backend/                    # API REST (Node.js + Express)
│   ├── src/
│   │   ├── server.js           # Punto de entrada
│   │   ├── app.js              # Configuración Express y middlewares
│   │   ├── config/
│   │   │   └── db.js           # Conexión MongoDB y carga inicial de datos
│   │   ├── models/             # Esquemas Mongoose
│   │   ├── repository/         # Acceso a base de datos (patrón repositorio)
│   │   ├── controller/         # Lógica de negocio
│   │   └── routes/             # Definición de endpoints
│   ├── package.json
│   └── .env                    # Variables de entorno
├── Dockerfile.backend
├── Dockerfile.frontend
└── docker-compose.yml
```

---

## Tecnologías

**Frontend:** HTML5 · CSS3 · JavaScript · Google Fonts (Lora + Poppins) · Figma

**Backend:** Node.js · Express 5 · Mongoose · MongoDB · CORS · dotenv · nodemon

**Infraestructura:** Docker · Docker Compose · Nginx

---

## Páginas del sitio

| Página | Descripción |
|---|---|
| `index.html` | Inicio con carrusel de imágenes y reseñas |
| `catalogo.html` | Catálogo dinámico cargado desde la API |
| `cheesecakes.html` | Categoría cheesecakes con botones de carrito |
| `cupcakes.html` | Categoría cupcakes |
| `galletasartesanales.html` | Categoría galletas artesanales |
| `macarons.html` | Categoría macarons |
| `postresdechocolate.html` | Categoría postres de chocolate |
| `pastelespersonalizados.html` | Formulario de pedido personalizado |
| `sobrenosotros.html` | Historia y equipo de Mariluna |
| `contacto.html` | Formulario de contacto (guarda en BD) |
| `pago.html` | Resumen del carrito y formulario de envío |

La navegación incluye menú hamburguesa para móvil, carrito con contador en tiempo real y botón de pedido rápido.

---

## Funcionalidades del Frontend

- **Carrito de compras:** agrega, edita cantidad y elimina productos. Se persiste en `localStorage` entre páginas.
- **Catálogo dinámico:** los productos se cargan desde `GET /api/productos` al entrar a `catalogo.html`.
- **Pedido desde carrito:** al confirmar en `pago.html`, el pedido se guarda en MongoDB vía `POST /api/pedidos` y se abre WhatsApp con el resumen.
- **Pedido personalizado:** el formulario de pasteles personalizados también guarda el pedido en BD antes de abrir WhatsApp.
- **Formulario de contacto:** los mensajes se guardan en MongoDB vía `POST /api/mensajes`.
- **Carrusel automático** en la página de inicio con controles manuales y puntos de navegación.
- **Responsive:** se adapta a móvil, tablet y escritorio mediante media queries.

---

## API REST — Endpoints

Base URL: `http://localhost:8080/api`

### Productos

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/productos` | Lista todos los productos disponibles |
| `GET` | `/api/productos/:id` | Obtiene un producto por ID |
| `POST` | `/api/productos` | Crea un nuevo producto |
| `PUT` | `/api/productos/:id` | Actualiza un producto existente |
| `DELETE` | `/api/productos/:id` | Elimina un producto |


### Pedidos

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/pedidos` | Lista todos los pedidos |
| `GET` | `/api/pedidos/:id` | Obtiene un pedido por ID |
| `POST` | `/api/pedidos` | Registra un nuevo pedido |


### Mensajes de contacto

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/mensajes` | Lista todos los mensajes recibidos |
| `POST` | `/api/mensajes` | Guarda un nuevo mensaje de contacto |


## Arquitectura del Backend

El backend aplica el patrón **MVC con capa de repositorio**, separando responsabilidades en cuatro capas:

```
routes → controller → repository → model (MongoDB)
```

- **Routes:** definen los endpoints y delegan al controlador.
- **Controller:** valida la petición, maneja errores y responde con el código HTTP correcto.
- **Repository:** encapsula las operaciones de Mongoose (principio de inversión de dependencias).
- **Model:** define el esquema de datos con Mongoose.

---

## Cómo ejecutar el proyecto

### Con Docker (recomendado)

Requisito: tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado.

```bash
# Clonar el repositorio
git clone https://github.com/Valew7/mariluna-sitioweb
cd mariluna-sitioweb-main

# Levantar todos los servicios
docker compose up --build
```

Esto levanta tres contenedores:
- **mongo** — Base de datos MongoDB en el puerto `27017`
- **backend** — API REST en `http://localhost:8080`
- **frontend** — Sitio web en `http://localhost:80`

Al iniciar, el backend carga automáticamente el catálogo inicial de productos en la base de datos si esta está vacía.

Para detener:
```bash
docker compose down
```


## Variables de entorno

| Variable | Descripción | Valor por defecto |
|---|---|---|
| `MONGODB_URI` | URI de conexión a MongoDB | `mongodb://localhost:27017/mariluna` |
| `PORT` | Puerto del servidor backend | `8080` |

---


