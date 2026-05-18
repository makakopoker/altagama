function toggleDetails() {
  const details = document.getElementById("carDetails");
  const button = document.querySelector(".details-btn");

  if (details.style.display === "block") {
    details.style.display = "none";
    button.textContent = "Ver detalles y equipamiento";
  } else {
    details.style.display = "block";
    button.textContent = "Ocultar detalles";
    
    details.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// NAVBAR PREMIUM SCROLL EFFECT

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,.90)";
    navbar.style.backdropFilter = "blur(25px)";
  } else {
    navbar.style.background = "rgba(0,0,0,.55)";
  }
});

// HERO BUTTON SMOOTH SCROLL

document.querySelector(".hero-btn")
.addEventListener("click", function(e){

  e.preventDefault();

  document.querySelector("#inventory")
  .scrollIntoView({
    behavior: "smooth"
  });

});
