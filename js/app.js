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
    comment: "¡Increíble trabajo! El pastel superó expectativas.",
    date: "Octubre 2024",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    productImage: "https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?w=800"
  },
  {
    id: 2,
    name: "Carlos Andrés Ramírez",
    event: "Cumpleaños",
    rating: 5,
    comment: "El pastel de mi hija fue espectacular.",
    date: "Septiembre 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    productImage: "https://images.unsplash.com/photo-1551404973-761c83cd8339?w=800"
  },
  {
    id: 3,
    name: "Laura Gómez",
    event: "Aniversario",
    rating: 5,
    comment: "Una obra de arte.",
    date: "Agosto 2024",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    productImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800"
  },
  {
    id: 4,
    name: "Sebastián Ruiz",
    event: "Corporativo",
    rating: 5,
    comment: "Perfecto para eventos.",
    date: "Julio 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    productImage: "https://images.unsplash.com/photo-1474625342403?w=800"
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
          <strong>${r.name}</strong>
        </div>

        <div class="review-stars">
          ${"⭐".repeat(r.rating)}
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