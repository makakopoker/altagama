function toggleDetails() {

  const details =
    document.getElementById(
      "carDetails"
    );

  const button =
    document.querySelector(
      ".details-btn"
    );

  if(!details) return;

  if(details.style.display === "block"){

    details.style.display =
      "none";

    button.textContent =
      "Ver equipamiento completo";

  } else {

    details.style.display =
      "block";

    button.textContent =
      "Ocultar equipamiento";

    details.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  }
}

window.addEventListener(
"scroll", ()=>{

const navbar =
document.querySelector(
".navbar"
);

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,.88)";

}else{

navbar.style.background =
"rgba(0,0,0,.45)";
}

});
