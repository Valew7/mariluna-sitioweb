# Mariluna Postres — Sitio Web

**Programa:** Programación de aplicaciones y servicios para la nube  
**Proyecto:** GA6-220501123-AA3-EV01  
**Integrantes:** Valentina Hinestroza Pineda, Michelle Duque, Camilo Durán

---

## Prototipado

Usamos Figma para diseñar las vistas antes de ponernos a codear. Ahí definimos la navegación, los colores y cómo iba a verse en distintos dispositivos.

🔗 [Ver prototipo en Figma](https://www.figma.com/make/STUOofQywn0h2Whqz80wGy/Mariluna-Postres---Pagina-Principal?code-node-id=0-9&p=f&fullscreen=1)

En la carpeta `prototipo/` están las capturas del diseño en desktop, tablet y móvil, más el flujo de navegación.


---

## Páginas del sitio

El sitio tiene 11 páginas HTML conectadas entre sí con una barra de navegación que aparece en todas:

- `index.html` — inicio con carrusel
- `catalogo.html` — todos los productos
- `cheesecakes.html`, `cupcakes.html`, `galletasartesanales.html`, `macarons.html`, `postresdechocolate.html` — categorías
- `pastelespersonalizados.html` — para hacer pedidos
- `sobrenosotros.html` — quiénes somos
- `contacto.html` — formulario de contacto
- `pago.html` — resumen y pago

La navegación tiene menú hamburguesa para móvil, carrito con contador y botón de pedido rápido.

---

## Cómo está hecho

Separamos todo en tres carpetas: `css/` para los estilos, `js/` para la lógica y `src/` para imágenes del sitio.

El HTML usa etiquetas semánticas (`header`, `nav`, `section`, `footer`) y todas las imágenes tienen atributo `alt`. El CSS está en un solo archivo (`estilo.css`) con media queries para que se vea bien en celular, tablet y computador. Para las fuentes usamos Google Fonts con Lora y Poppins.

En JavaScript manejamos el carrito de compras, el menú hamburguesa y el carrusel de imágenes.

---

## Diseño visual

La paleta de colores va en tonos rosados y crema, pensada para que se sienta dulce y coherente con la marca. Tiene efectos hover en los botones y tarjetas, animaciones en el menú móvil y un carrito con modal que muestra el resumen del pedido en tiempo real.

---

## Tecnologías

HTML5, CSS3, JavaScript, Figma, Google Fonts, Git/GitHub
