// MODAL

const modal = document.getElementById("modal");
const detailsBtn = document.querySelector(".details-btn");
const closeBtn = document.querySelector(".close-btn");

detailsBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// LIGHTBOX PREMIUM

const galleryImages = document.querySelectorAll(".gallery-grid img");
const mainImage = document.querySelector(".gallery-image");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;
  });
});

// ANIMACIÓN NAVBAR

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.85)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.45)";
  }
});

// ANIMACIÓN DE ENTRADA PREMIUM

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".car-card").forEach((el) => {
  observer.observe(el);
});

// SCROLL SUAVE HERO BUTTON

document.querySelector(".hero-btn")
.addEventListener("click", function(e) {

  e.preventDefault();

  document.querySelector("#inventory")
  .scrollIntoView({
    behavior: "smooth"
  });

});

// PREPARADO PARA MÁS COCHES

const cars = [
  {
    name: "Infiniti QX70S 5.0 V8 Premium AWD",
    year: "2015",
    km: "146.000 km",
    price: "20.500 €"
  }
];

console.log("Alta Gama Automotive Ready", cars);
