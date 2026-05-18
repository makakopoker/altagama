function toggleDetails() {
  const details = document.getElementById("carDetails");
  const button = document.querySelector(".details-btn");

  if (details.style.display === "block") {
    details.style.display = "none";
    button.textContent = "Ver equipamiento completo";
  } else {
    details.style.display = "block";
    button.textContent = "Ocultar equipamiento";

    details.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* CAMBIAR FOTO PRINCIPAL */

function changeImage(image) {

  const mainImage = document.getElementById("mainImage");

  mainImage.style.opacity = "0";

  setTimeout(() => {
    mainImage.src = image.src;
    mainImage.style.opacity = "1";
  }, 150);

  document.querySelectorAll(".thumbnail-gallery img")
  .forEach(img => img.classList.remove("active-thumbnail"));

  image.classList.add("active-thumbnail");
}

/* LIGHTBOX PREMIUM */

const mainImage = document.getElementById("mainImage");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

mainImage.addEventListener("click", () => {
  lightbox.style.display = "flex";
  lightboxImage.src = mainImage.src;
  document.body.style.overflow = "hidden";
});

function closeLightbox() {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

/* NAVBAR PREMIUM */

window.addEventListener("scroll", () => {

  const navbar =
    document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background =
      "rgba(0,0,0,.88)";
  } else {
    navbar.style.background =
      "rgba(0,0,0,.45)";
  }
});

/* ANIMACIONES PREMIUM */

const observer =
new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

},{
  threshold: 0.15
});

document.querySelectorAll(
  ".technical-box, .special-section, .equipment-box, .premium-cta"
)
.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
