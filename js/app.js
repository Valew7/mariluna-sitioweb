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
  const cart = getCart();

  function renderCheckout() {
    checkoutItems.innerHTML = "";

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
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const telefono = document.getElementById("telefono").value;
      const correo = document.getElementById("correo").value;
      const direccion = document.getElementById("direccion").value;
      const notas = document.getElementById("notas").value;

      let mensaje = "🍰 *NUEVO PEDIDO - MARILUNA POSTRES* %0A%0A";

      mensaje += "*INFORMACIÓN DEL CLIENTE* %0A";
      mensaje += "👤 Nombre: " + nombre + "%0A";
      mensaje += "📞 Teléfono: " + telefono + "%0A";
      mensaje += "📧 Correo: " + correo + "%0A";
      mensaje += "📍 Dirección: " + direccion + "%0A";

      if (notas.trim() !== "") {
        mensaje += "📝 Notas: " + notas + "%0A";
      }

      mensaje += "%0A*PRODUCTOS* %0A";

      let total = 0;

      cart.forEach((item, index) => {
        total += item.price * item.quantity;

        mensaje += "%0A" + (index + 1) + ". " + item.name + "%0A";
        mensaje += "Cantidad: " + item.quantity + "%0A";
        mensaje +=
          "Subtotal: $" +
          (item.price * item.quantity).toLocaleString("es-CO") +
          "%0A";
      });

      mensaje += "%0A💰 *TOTAL: $" + total.toLocaleString("es-CO") + "*";

      const numero = "573001234567";
      const url = "https://wa.me/" + numero + "?text=" + mensaje;

      window.open(url, "_blank");
    });
  }
}

/* INICIAR CARRITO */

updateCartUI();
/* AÑADIR MENU HAMBURGUER  */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
  const navPedido = document.getElementById('nav-pedido');
    if(navPedido) navPedido.style.display = navMenu.classList.contains('open') ? 'block' : 'none';
  });
}
/* TERMINA */
