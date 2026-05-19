// Hero carousel

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

// MOSTRAR SLIDE

function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

// Siguiente

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// Anterior

function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

// Auto play

setInterval(() => {
  nextSlide();
}, 5000);




// Resenas

const allReviews = [
  {
    id: 1,
    name: "María Fernanda López",
    event: "Boda",
    rating: 5,
    comment: "¡Increíble trabajo! El pastel de nuestra boda superó todas nuestras expectativas. El diseño fue exactamente lo que queríamos y el sabor estaba delicioso. Todos nuestros invitados quedaron encantados.",
    date: "Octubre 2024",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    productImage: "https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?w=800"
  },
  {
    id: 2,
    name: "Carlos Andrés Ramírez",
    event: "Cumpleaños",
    rating: 5,
    comment: "Mariluna Postres hizo el pastel de cumpleaños de mi hija y fue espectacular. El sabor de chocolate estaba divino y la decoración con flores de azúcar fue hermosa. ¡Definitivamente volveremos a ordenar!",
    date: "Septiembre 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    productImage: "https://images.unsplash.com/photo-1644785421461-33fa77c147d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Laura Gómez",
    event: "Aniversario",
    rating: 5,
    comment: "El pastel de nuestro aniversario fue una obra de arte. La atención al detalle y el cuidado en la presentación fueron excepcionales. El glaseado de vainilla suiza estaba perfecto.",
    date: "Agosto 2024",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    productImage: "https://images.unsplash.com/photo-1776722092640-d8caee121219?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

function renderReviews(){

  if(!reviewsGrid) return;

  reviewsGrid.innerHTML = allReviews.slice(0, visibleReviews).map(r => `
    
    <div class="review-card">

      <!-- IMAGE -->
      <div class="review-img">
        <img src="${r.productImage}" alt="${r.event}">
        <div class="review-overlay"></div>
        <div class="event-badge">${r.event}</div>
        <div class="quote-icon">❝</div>
      </div>

      <!-- CONTENT -->
      <div class="review-content">

        <div class="review-user">
  <img src="${r.avatar}" alt="${r.name}">
  
  <div class="user-info">
    <strong>${r.name}</strong>
    <div class="review-stars">
      ${"⭐".repeat(r.rating)}
    </div>
  </div>
</div>

        <p class="review-text">"${r.comment}"</p>

        <div class="review-date">${r.date}</div>

      </div>

    </div>

  `).join("");
}

renderReviews();

function verMasReseñas(){
  visibleReviews = allReviews.length;
  renderReviews();
}


// PAGINA PASTELES PERSONALIZADOS

// Seleccion de tamano
const sizeBoxes = document.querySelectorAll(".size-box");

sizeBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    sizeBoxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");
  });
});


// Seleccion de sabor
const flavorBoxes = document.querySelectorAll(".flavor-box");

flavorBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    flavorBoxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");
  });
});

// Seleccion de glaseado
const frostingLabels = document.querySelectorAll(".radio-list label");

frostingLabels.forEach((label) => {
  label.addEventListener("click", () => {
    frostingLabels.forEach((l) => l.classList.remove("active"));
    label.classList.add("active");
  });
});



// CARRITO 

