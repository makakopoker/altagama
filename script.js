function openWhatsApp(){

    const phone = "34600000000";

    const message =
    "Hola, estoy interesado en el Infiniti QX70S 5.0 V8 Premium. ¿Sigue disponible?";

    const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}