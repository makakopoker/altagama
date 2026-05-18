let currentImages = [];
let currentIndex = 0;

/* EQUIPMENT */

function toggleDetails(){

const details =
document.getElementById(
"carDetails"
);

const button =
document.querySelector(
".details-btn"
);

if(!details) return;

if(details.style.display
=== "block"){

details.style.display =
"none";

button.textContent =
"Ver equipamiento completo";

}else{

details.style.display =
"block";

button.textContent =
"Ocultar equipamiento";
}
}

/* GALLERY */

function initGallery(){

const thumbs =
document.querySelectorAll(
".thumbnail-gallery img"
);

if(!thumbs.length) return;

currentImages =
Array.from(thumbs)
.map(img=>img.src);

thumbs.forEach(
(img,index)=>{

img.addEventListener(
"click", ()=>{

changeImage(img);

currentIndex =
index;

});
});

const main =
document.getElementById(
"mainImage"
);

if(main){

main.addEventListener(
"click",
openLightbox
);

}
}

function changeImage(image){

const main =
document.getElementById(
"mainImage"
);

main.src = image.src;
}

/* LIGHTBOX */

function openLightbox(){

const lightbox =
document.getElementById(
"lightbox"
);

const image =
document.getElementById(
"lightboxImage"
);

image.src =
currentImages[currentIndex];

lightbox.style.display =
"flex";

document.body.style.overflow =
"hidden";
}

function closeLightbox(){

document.getElementById(
"lightbox"
).style.display =
"none";

document.body.style.overflow =
"auto";
}

function nextImage(){

currentIndex++;

if(currentIndex >=
currentImages.length){

currentIndex = 0;
}

updateLightbox();
}

function prevImage(){

currentIndex--;

if(currentIndex < 0){

currentIndex =
currentImages.length -1;
}

updateLightbox();
}

function updateLightbox(){

document.getElementById(
"lightboxImage"
).src =
currentImages[currentIndex];
}

window.addEventListener(
"click",(e)=>{

const lightbox =
document.getElementById(
"lightbox"
);

if(e.target ===
lightbox){

closeLightbox();
}
});

document.addEventListener(
"keydown",(e)=>{

if(e.key==="Escape"){
closeLightbox();
}

if(e.key==="ArrowRight"){
nextImage();
}

if(e.key==="ArrowLeft"){
prevImage();
}
});

/* NAVBAR */

window.addEventListener(
"scroll", ()=>{

const navbar =
document.querySelector(
".navbar"
);

if(window.scrollY>50){

navbar.style.background =
"rgba(0,0,0,.88)";

}else{

navbar.style.background =
"rgba(0,0,0,.45)";
}
});

initGallery();
