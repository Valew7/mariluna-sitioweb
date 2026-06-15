// =============================
// CATALOGO: Cargar productos desde backend
// =============================
const API_BASE_URL = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', async () => {
  const catalogoDiv = document.getElementById('catalogoProductos');
  if (!catalogoDiv) return;

  try {
    // Cambia la URL si tu backend está en otro puerto o dominio
    const res = await fetch(`${API_BASE_URL}/api/productos`);
    if (!res.ok) throw new Error('No se pudo cargar el catálogo');
    const productos = await res.json();

    if (!productos.length) {
      catalogoDiv.innerHTML = '<p>No hay productos disponibles.</p>';
      return;
    }

    catalogoDiv.innerHTML = productos.map(prod => `
      <div class="product-card">
        <img src="${prod.imagen || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}" alt="${prod.nombre}">
        <div class="product-content">
          <h3>${prod.nombre}</h3>
          <p>${prod.descripcion || ''}</p>
          <div class="product-precio"><strong>$${prod.precio.toLocaleString('es-CO')}</strong></div>
          <button class="btn btn-outline btn-mas" onclick="agregarAlCarrito('${prod._id}', '${prod.nombre}', ${prod.precio}, '${prod.imagen || ''}')">Agregar al carrito</button>
        </div>
      </div>
    `).join('');
  } catch (err) {
    catalogoDiv.innerHTML = '<p>Error al cargar productos.</p>';
  }
});

// Enviar mensajes de contacto al backend
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('contact-nombre').value.trim();
    const correo = document.getElementById('contact-correo').value.trim();
    const telefono = document.getElementById('contact-telefono').value.trim();
    const mensaje = document.getElementById('contact-mensaje').value.trim();

    if (!nombre || !correo || !telefono || !mensaje) {
      alert('Por favor completa todos los campos del formulario de contacto.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/mensajes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, correo, telefono, mensaje })
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      alert('Mensaje enviado exitosamente. Gracias por contactarnos.');
      contactForm.reset();
    } catch (error) {
      console.error(error);
      alert('No se pudo enviar el mensaje, por favor intenta de nuevo.');
    }
  });
}

// Función global para agregar productos al carrito (puedes mejorarla según tu lógica de carrito)
window.agregarAlCarrito = function(id, nombre, precio, imagen) {
  alert(`Producto agregado: ${nombre}`);
  addToCart({ id, name: nombre, price: precio, image: imagen, quantity: 1 });
};
/* HERO CAROUSEL  */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  if (!slides.length || !dots.length) return;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  if (!slides.length) return;

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide() {
  if (!slides.length) return;

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

if (slides.length > 0) {
  setInterval(nextSlide, 5000);
}

/* RESEÑAS */

const allReviews = [
  {
    id: 1,
    name: "María Fernanda López",
    event: "Boda",
    rating: 5,
    comment:
      "¡Increíble trabajo! El pastel de nuestra boda superó todas nuestras expectativas.",
    date: "Octubre 2024",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    productImage: "https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?w=800",
  },
  {
    id: 2,
    name: "Carlos Andrés Ramírez",
    event: "Cumpleaños",
    rating: 5,
    comment:
      "Mariluna Postres hizo el pastel de cumpleaños de mi hija y fue espectacular.",
    date: "Septiembre 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    productImage: "https://images.unsplash.com/photo-1644785421461-33fa77c147d2?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Laura Gómez",
    event: "Aniversario",
    rating: 5,
    comment:
      "El pastel de nuestro aniversario fue una obra de arte. La atención al detalle fue excepcional.",
    date: "Agosto 2024",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    productImage: "https://images.unsplash.com/photo-1776722092640-d8caee121219?q=80&w=687&auto=format&fit=crop",
  }, 
  {
    id: 4,
    name: "Sebastián Ruiz",
    event: "Corporativo",
    rating: 5,
    comment: "Ordenamos cupcakes para nuestro evento corporativo y fueron un éxito total. La entrega fue puntual y la calidad impecable. Muy profesionales en todo el proceso.",
    date: "Julio 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1551404973-761c83cd8339?w=800"
  },
   {
    id: 5,
    name: "Andrea Catalina Moreno",
    event: "Baby Shower",
    rating: 5,
    comment: "El pastel para mi baby shower fue adorable y delicioso. El diseño en tonos pasteles quedó hermoso y el sabor de red velvet con queso crema fue la combinación perfecta.",
    date: "Junio 2024",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1659654155120-54c0b8e61406?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Diego Fernando Castro",
    event: "Graduación",
    rating: 5,
    comment: "Excelente servicio y un pastel increíble para mi graduación. La personalización fue exacta a lo que pedí y el sabor de tres leches estaba para chuparse los dedos.",
    date: "Mayo 2024",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1758682016284-78f5266d5743?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop&w=800&q=80"
  }
];

let visibleReviews = 3;
const reviewsGrid = document.getElementById("reviewsGrid");

function renderReviews() {
  if (!reviewsGrid) return;

  reviewsGrid.innerHTML = allReviews
    .slice(0, visibleReviews)
    .map(
      (r) => `
      <div class="review-card">
        <div class="review-img">
          <img src="${r.productImage}" alt="${r.event}">
          <div class="review-overlay"></div>
          <div class="event-badge">${r.event}</div>
          <div class="quote-icon">❝</div>
        </div>

        <div class="review-content">
          <div class="review-user">
            <img src="${r.avatar}" alt="${r.name}">
            <div class="user-info">
              <strong>${r.name}</strong>
              <div class="review-stars">${"⭐".repeat(r.rating)}</div>
            </div>
          </div>

          <p class="review-text">"${r.comment}"</p>
          <div class="review-date">${r.date}</div>
        </div>
      </div>
    `
    )
    .join("");
}

renderReviews();

function verMasReseñas() {
  visibleReviews = allReviews.length;
  renderReviews();

  const btnContainer = document.querySelector(".reviews-btn");
  if (btnContainer) {
    btnContainer.style.display = "none";
  }
}

/* PASTELES PERSONALIZADOS */

const sizeBoxes = document.querySelectorAll(".size-box");
const flavorBoxes = document.querySelectorAll(".flavor-box");
const frostingLabels = document.querySelectorAll(".radio-list label");

sizeBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    sizeBoxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");
  });
});

flavorBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    flavorBoxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");
  });
});

frostingLabels.forEach((label) => {
  label.addEventListener("click", () => {
    frostingLabels.forEach((l) => l.classList.remove("active"));
    label.classList.add("active");
  });
});

/* PEDIDO PERSONALIZADO */
function initCustomOrderButton() {
  const customOrderButton = document.getElementById("btn-realizar-pedido");
  if (!customOrderButton) {
    console.log("Custom order button not found on this page.");
    return;
  }

  console.log("Custom order button initialized.");
  customOrderButton.addEventListener("click", (event) => {
    event.preventDefault();
    try {
      handleCustomCakeOrder();
    } catch (err) {
      console.error("Error en handleCustomCakeOrder:", err);
      alert("Ocurrió un error al procesar el pedido. Por favor revisa los datos e intenta de nuevo.");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCustomOrderButton);
} else {
  initCustomOrderButton();
}

function getInputValue(id) {
  const element = document.getElementById(id);
  return element ? element.value.trim() : "";
}

function handleCustomCakeOrder() {
  const sizeBox = document.querySelector(".size-box.active") || document.querySelector(".size-box");
  const flavorBox = document.querySelector(".flavor-box.active") || document.querySelector(".flavor-box");
  const frostingLabel = document.querySelector(".radio-list label.active") || document.querySelector(".radio-list label");

  const size = sizeBox ? sizeBox.textContent.trim() : "";
  const flavor = flavorBox ? flavorBox.textContent.trim() : "";
  const frosting = frostingLabel ? frostingLabel.textContent.trim() : "";

  const mensajePastel = getInputValue("mensaje-pastel");
  const instrucciones = getInputValue("instrucciones-pastel");
  const delivery = document.querySelector('input[name="delivery"]:checked')?.value || "";
  const fecha = getInputValue("fecha-entrega");
  const hora = getInputValue("hora-entrega");
  const nombre = getInputValue("nombre-completo");
  const telefono = getInputValue("telefono-completo");
  const correo = getInputValue("correo-completo");
  const direccion = getInputValue("direccion-completa");

  if (!nombre) {
    alert("Por favor ingresa tu nombre completo.");
    return;
  }

  if (!telefono) {
    alert("Por favor ingresa tu teléfono.");
    return;
  }

  if (!correo) {
    alert("Por favor ingresa tu correo electrónico.");
    return;
  }

  if (!size || !flavor || !frosting) {
    alert("Por favor selecciona el tamaño, sabor y glaseado del pastel.");
    return;
  }

  if (delivery === "domicilio" && !direccion) {
    alert("Por favor ingresa la dirección de entrega para domicilio.");
    return;
  }

  if (delivery === "domicilio" && (!fecha || !hora)) {
    alert("Por favor selecciona fecha y hora para la entrega a domicilio.");
    return;
  }

  const direccionDB = delivery === "recoger" ? "Recoger en tienda" : direccion;
  const totalEstimado = 50000;

  let mensaje = "🍰 *PEDIDO PERSONALIZADO - MARILUNA POSTRES*%0A%0A";
  mensaje += "*TAMAÑO:* " + size + "%0A";
  mensaje += "*SABOR:* " + flavor + "%0A";
  mensaje += "*GLASEADO:* " + frosting + "%0A";

  if (mensajePastel) {
    mensaje += "*MENSAJE EN EL PASTEL:* " + mensajePastel + "%0A";
  }

  if (instrucciones) {
    mensaje += "*INSTRUCCIONES:* " + instrucciones + "%0A";
  }

  mensaje += "*ENTREGA:* " + (delivery === "domicilio" ? "Domicilio" : "Recoger en tienda") + "%0A";

  if (fecha) {
    mensaje += "*FECHA:* " + fecha + "%0A";
  }

  if (hora) {
    mensaje += "*HORA:* " + hora + "%0A";
  }

  mensaje += "%0A*CLIENTE:* " + nombre + "%0A";
  mensaje += "*TELÉFONO:* " + telefono + "%0A";
  mensaje += "*CORREO:* " + correo + "%0A";
  mensaje += "*DIRECCIÓN:* " + direccionDB + "%0A";

  const pedidoBody = {
    cliente: {
      nombre,
      telefono,
      correo,
      direccion: direccionDB,
      notas: instrucciones || mensajePastel || "Pedido personalizado"
    },
    productos: [
      {
        producto: "pastel-personalizado",
        nombre: `${size} - ${flavor} - ${frosting}`,
        cantidad: 1,
        precio: totalEstimado,
        imagen: ""
      }
    ],
    total: totalEstimado
  };

  sendCustomOrder(pedidoBody)
    .then(() => {
      alert('Pedido guardado correctamente. Ahora se abrirá WhatsApp para completar el envío.');
      const numero = "573001234567";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    })
    .catch((error) => {
      console.error(error);
      alert('No se pudo guardar el pedido. Por favor intenta de nuevo.');
    });
}

async function sendCustomOrder(body) {
  const response = await fetch(`${API_BASE_URL}/api/pedidos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.error || 'Error al guardar el pedido en la base de datos');
  }

  return await response.json();
}

/* CARRITO GLOBAL */

const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const openCartBtn = document.getElementById("open-cart");
const closeCartBtn = document.getElementById("close-cart");

const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const drawerCount = document.getElementById("drawer-count");
const cartTotal = document.getElementById("cart-total");

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  let cart = getCart();

  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }

  saveCart(cart);
  updateCartUI();
}

function removeFromCart(id) {
  let cart = getCart();

  cart = cart.filter((item) => item.id !== id);

  saveCart(cart);
  updateCartUI();
}

function changeQuantity(id, change) {
  let cart = getCart();

  cart = cart.map((item) => {
    if (item.id === id) {
      item.quantity += change;

      if (item.quantity < 1) {
        item.quantity = 1;
      }
    }

    return item;
  });

  saveCart(cart);
  updateCartUI();
}

function updateCartUI() {
  const cart = getCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartCount) cartCount.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = totalItems;
  if (cartTotal) cartTotal.textContent = "$" + totalPrice.toLocaleString("es-CO");

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <p>Tu carrito está vacío</p>
        <span>Agrega productos de nuestro catálogo</span>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");

    div.classList.add("cart-item");

div.innerHTML = `
  <img src="${item.image}" alt="${item.name}" />

  <div class="cart-item-info">
    <h4>${item.name}</h4>

    <p>$${item.price.toLocaleString("es-CO")}</p>

    <div class="quantity-controls">
      <button class="quantity-btn minus">−</button>

      <span class="quantity-number">
        ${item.quantity}
      </span>

      <button class="quantity-btn plus">+</button>
    </div>
  </div>

  <button class="remove-item">✕</button>
`;

    div.querySelector(".minus").addEventListener("click", () => {
      changeQuantity(item.id, -1);
    });

    div.querySelector(".plus").addEventListener("click", () => {
      changeQuantity(item.id, 1);
    });

    div.querySelector(".remove-item").addEventListener("click", () => {
      removeFromCart(item.id);
    });

    cartItemsContainer.appendChild(div);
  });
}

/* ABRIR / CERRAR CARRITO */

if (openCartBtn && cartDrawer && cartOverlay) {
  openCartBtn.addEventListener("click", () => {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
  });
}

if (closeCartBtn && cartDrawer && cartOverlay) {
  closeCartBtn.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
  });
}

if (cartOverlay && cartDrawer) {
  cartOverlay.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
  });
}

/* BOTONES AGREGAR AL CARRITO */

const addButtons = document.querySelectorAll(
  ".btn-cart-cupcake, .btn-cart-cheesecake, .btn-cart-cookie, .btn-cart-choco"
);

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: Number(button.dataset.price),
      image: button.dataset.image,
      quantity: 1,
    };

    if (!product.id || !product.name || !product.price || !product.image) {
      alert("Faltan datos del producto en el botón.");
      return;
    }

    addToCart(product);
  });
});

/* BOTÓN PROCEDER AL PAGO */

const checkoutBtn = document.querySelector(".checkout-btn");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "pago.html";
  });
}

/*  PÁGINA PAGO */

const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutForm = document.getElementById("checkout-form");

if (checkoutItems && checkoutTotal) {
  function renderCheckout() {
    checkoutItems.innerHTML = "";
    const cart = getCart();

    let total = 0;

    if (cart.length === 0) {
      checkoutItems.innerHTML = `
        <p class="empty-checkout">
          Tu carrito está vacío.
        </p>
      `;

      checkoutTotal.textContent = "$0";
      return;
    }

    cart.forEach((item) => {
      total += item.price * item.quantity;

      checkoutItems.innerHTML += `
        <div class="checkout-product">
          <img src="${item.image}" alt="${item.name}" />

          <div class="checkout-product-info">
            <h4>${item.name}</h4>
            <p>Cantidad: ${item.quantity}</p>

            <p class="checkout-price">
              $${(item.price * item.quantity).toLocaleString("es-CO")}
            </p>
          </div>
        </div>
      `;
    });

    checkoutTotal.textContent = "$" + total.toLocaleString("es-CO");
  }

  renderCheckout();

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const direccion = document.getElementById("direccion").value.trim();
      const notas = document.getElementById("notas").value.trim();

      const cart = getCart();

      if (!nombre || !telefono || !correo || !direccion) {
        alert('Por favor completa todos los campos requeridos antes de enviar el pedido.');
        return;
      }

      if (!cart || cart.length === 0) {
        alert('No hay productos en el carrito. Agrega algo antes de continuar.');
        return;
      }

      const productosPedido = cart.map((item) => ({
        producto: item.id,
        nombre: item.name,
        cantidad: item.quantity,
        precio: item.price,
        imagen: item.image
      }));

      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

      try {
        const response = await fetch(`${API_BASE_URL}/api/pedidos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cliente: { nombre, telefono, correo, direccion, notas },
            productos: productosPedido,
            total
          })
        });

        if (!response.ok) {
          throw new Error('Error al guardar el pedido en la base de datos');
        }

        alert('El pedido ha sido guardado y el envío se ha procesado con éxito. Ahora se abrirá WhatsApp.');

        const mensaje = buildWhatsappMessage({ nombre, telefono, correo, direccion, notas }, cart, total);
        const numero = "573001234567";
        const url = "https://wa.me/" + numero + "?text=" + mensaje;

        window.open(url, "_blank");

        localStorage.removeItem('cart');
        updateCartUI();
        renderCheckout();
      } catch (error) {
        console.error(error);
        alert('No se pudo guardar el pedido. Por favor intenta de nuevo.');
      }
    });
  }

  function buildWhatsappMessage(cliente, cartItems, total) {
    let mensaje = "🍰 *NUEVO PEDIDO - MARILUNA POSTRES* %0A%0A";

    mensaje += "*INFORMACIÓN DEL CLIENTE* %0A";
    mensaje += "👤 Nombre: " + cliente.nombre + "%0A";
    mensaje += "📞 Teléfono: " + cliente.telefono + "%0A";
    mensaje += "📧 Correo: " + cliente.correo + "%0A";
    mensaje += "📍 Dirección: " + cliente.direccion + "%0A";

    if (cliente.notas) {
      mensaje += "📝 Notas: " + cliente.notas + "%0A";
    }

    mensaje += "%0A*PRODUCTOS* %0A";

    cartItems.forEach((item, index) => {
      mensaje += "%0A" + (index + 1) + ". " + item.name + "%0A";
      mensaje += "Cantidad: " + item.quantity + "%0A";
      mensaje += "Subtotal: $" + (item.price * item.quantity).toLocaleString("es-CO") + "%0A";
    });

    mensaje += "%0A💰 *TOTAL: $" + total.toLocaleString("es-CO") + "*";
    return mensaje;
  }
}

/* INICIAR CARRITO */

updateCartUI();