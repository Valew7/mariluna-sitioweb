# 🍰 GA6-220501123-AA3-EV01 — Diseño Frontend

**Programa:** Programación de aplicaciones y servicios para la nube  
**Proyecto formativo:** Desarrollo de aplicaciones y servicios con funcionalidad en la nube para pequeñas y medianas empresas  
**Actividad:** GA6-220501123-AA3 — Diseñar Interfaz gráfica de la aplicación Web  
**Integrantes:** Valentina Hinestroza Pineda · Michelle Duque · Camilo Durán  

---

## 1. Herramienta de prototipado rápido

Se utilizó **Figma** como herramienta de prototipado rápido, con la que se diseñaron y validaron las vistas antes de la implementación.

🔗 [Ver prototipo interactivo en Figma](https://www.figma.com/make/STUOofQywn0h2Whqz80wGy/Mariluna-Postres---Pagina-Principal?code-node-id=0-9&p=f&fullscreen=1)

La carpeta `prototipo/` contiene capturas del diseño en tres resoluciones:

| Vista | Archivo |
|-------|---------|
| Desktop | `prototipo/Desktop.png` |
| Tablet | `prototipo/Tablet.png` |
| Mobile | `prototipo/Phone.png` |
| Flujo de navegación | `prototipo/flujo-navegacion.png` |

---

## 2. Navegación entre vistas

El sitio cuenta con **10 páginas HTML** completamente enlazadas entre sí a través de un sistema de navegación consistente presente en todas las vistas:

| Página | Descripción |
|--------|-------------|
| `index.html` | Página principal con carrusel hero |
| `catalogo.html` | Catálogo de productos |
| `cheesecakes.html` | Categoría cheesecakes |
| `cupcakes.html` | Categoría cupcakes |
| `galletasartesanales.html` | Categoría galletas artesanales |
| `macarons.html` | Categoría macarons |
| `postresdechocolate.html` | Categoría postres de chocolate |
| `pastelespersonalizados.html` | Pasteles personalizados / inicio de pedido |
| `sobrenosotros.html` | Información del equipo |
| `contacto.html` | Formulario de contacto |
| `pago.html` | Página de pago |

La navegación incluye:
- Barra de navegación fija con enlaces a todas las secciones principales
- **Menú hamburguesa** responsive para dispositivos móviles (activado con `id="hamburger"`)
- Carrito de compras con contador dinámico
- Botón de acceso rápido a pedidos personalizados

---

## 3. Buenas prácticas de codificación — HTML y CSS

### HTML5
- Uso de etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- Atributos `alt` en todas las imágenes para accesibilidad
- Metaetiqueta `viewport` para soporte responsive
- Codificación UTF-8 declarada explícitamente
- Separación clara entre estructura (HTML), estilos (CSS) y comportamiento (JS)

### CSS3
- Hoja de estilos centralizada en `css/estilo.css`
- **17 media queries** para diseño responsive (Mobile, Tablet, Desktop)
- Variables de tipografía con Google Fonts: *Lora* y *Poppins*
- Uso de Flexbox y Grid para la maquetación
- Animaciones y transiciones CSS para interacciones (hover, menú hamburguesa)
- Nomenclatura de clases descriptiva y consistente

### JavaScript
- Lógica centralizada en `js/app.js`
- Gestión del carrito de compras con almacenamiento de estado
- Control del menú hamburguesa en pantallas pequeñas
- Carrusel de imágenes implementado en JavaScript puro

---

## 4. Estándares de colores e interacción

### Paleta de colores
La paleta sigue una identidad visual cálida y coherente con la marca Mariluna Postres:

| Uso | Color |
|-----|-------|
| Color primario (botones, énfasis) | Rosa/durazno pastel |
| Fondo principal | Blanco / crema |
| Tipografía principal | Gris oscuro |
| Acentos y hover | Tono más oscuro del primario |

### Interactividad
- Carrusel de imágenes automático en el hero de inicio
- Carrito de compras con modal de resumen y contador en tiempo real
- Menú hamburguesa animado para móvil
- Efectos hover en tarjetas de productos y botones
- Formulario de contacto con validación
- Página de pago con resumen del pedido

---

## 5. Estructura del proyecto

```
mariluna-sitioweb/
├── css/
│   └── estilo.css          # Hoja de estilos principal
├── js/
│   └── app.js              # Lógica de carrito y navegación
├── prototipo/
│   ├── Desktop.png         # Vista escritorio
│   ├── Tablet.png          # Vista tablet
│   ├── Phone.png           # Vista móvil
│   └── flujo-navegacion.png
├── src/
│   └── logo.png
├── index.html
├── catalogo.html
├── cheesecakes.html
├── cupcakes.html
├── galletasartesanales.html
├── macarons.html
├── postresdechocolate.html
├── pastelespersonalizados.html
├── sobrenosotros.html
├── contacto.html
├── pago.html
└── README.md
```

## 6. Tecnologías utilizadas

- **HTML5** — Estructura semántica
- **CSS3** — Estilos, animaciones y diseño responsive
- **JavaScript** — Interactividad y gestión del carrito
- **Figma** — Prototipado rápido
- **Google Fonts** — Tipografías Lora y Poppins
- **Git / GitHub** — Control de versiones y trabajo colaborativo
