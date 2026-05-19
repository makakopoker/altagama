document.addEventListener(
"DOMContentLoaded",
()=>{

/* NAVBAR SCROLL */

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll", ()=>{

if(window.scrollY > 60){

navbar.style.background =
"rgba(0,0,0,.92)";

navbar.style.borderBottom =
"1px solid rgba(199,164,106,.12)";

navbar.style.boxShadow =
"0 12px 40px rgba(0,0,0,.35)";

}else{

navbar.style.background =
"rgba(0,0,0,.58)";

navbar.style.borderBottom =
"1px solid rgba(255,255,255,.04)";

navbar.style.boxShadow =
"none";
}

});

/* SMOOTH APPEAR */

const revealItems =
document.querySelectorAll(
".car-card, .trust-box, .bespoke-card"
);

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(
(entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity =
"1";

entry.target.style.transform =
"translateY(0)";
}
});
},
{
threshold:.15
}
);

revealItems.forEach(
(item)=>{

item.style.opacity =
"0";

item.style.transform =
"translateY(35px)";

item.style.transition =
".8s ease";

observer.observe(item);
});

});
