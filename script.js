// script.js

function scrollToSection(id){
document.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});
}

function openWhatsApp(){

const phone = "34600000000";

const message =
"Hola, estoy interesado en el Infiniti QX70S 5.0 V8 Premium. ¿Sigue disponible?";

window.open(
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
"_blank"
);

}

function openLightbox(img){

document.getElementById("lightbox")
.style.display = "flex";

document.getElementById("lightbox-img")
.src = img.src;

}

function closeLightbox(){

document.getElementById("lightbox")
.style.display = "none";

}
