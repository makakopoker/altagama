const cars = [
  {
    id: 1,
    brand: "INFINITI",
    name: "QX70S 5.0 V8 Premium AWD",
    year: "2015",
    km: "146.000 km",
    price: "20.500 €",
    description:
      "Unidad muy equipada con motor V8 atmosférico 5.0 de 390 CV, tracción AWD inteligente, libro de mantenimiento y configuración full equip excepto detector de ángulo muerto.",

    cover:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",

    gallery: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop"
    ],

    equipment: {
      "Confort & Interior": [
        "Asientos eléctricos con memoria",
        "Asientos calefactables",
        "Tapicería cuero premium",
        "Volante calefactable",
        "Climatizador bizona",
        "Techo solar eléctrico",
        "Keyless Entry & Start",
        "Portón eléctrico",
        "Cristales tintados",
        "Asientos deportivos S",
        "Pedales aluminio"
      ],

      "Tecnología & Multimedia": [
        "Sistema BOSE Premium",
        "Navegación GPS",
        "Bluetooth",
        "USB multimedia",
        "Pantalla central",
        "Cámara 360º",
        "Cámara trasera",
        "Sensores parking delanteros",
        "Sensores parking traseros",
        "Control por voz"
      ],

      "Seguridad & Asistencias": [
        "AWD Inteligente",
        "ABS",
        "ESP",
        "Control de tracción",
        "Control crucero",
        "Faros Bi-Xenón adaptativos",
        "Sensor lluvia",
        "Luces automáticas",
        "ISOFIX",
        "Monitor presión neumáticos",
        "Full equip excepto ángulo muerto"
      ],

      "Prestaciones & Pack Sport": [
        "Motor V8 atmosférico 5.0 390CV",
        "Cambio automático secuencial",
        "Levas en volante",
        "Modo Sport",
        "Suspensión deportiva S",
        "Escape deportivo",
        "Llantas deportivas"
      ],

      "Historial": [
        "Libro de mantenimiento",
        "Mantenimiento al día",
        "146.000 km",
        "Vehículo muy cuidado"
      ]
    }
  }
];

const modal = document.getElementById("modal");

renderCars();

function renderCars() {
  const container = document.querySelector(".cars-grid");

  container.innerHTML = "";

  cars.forEach((car) => {
    container.innerHTML += `
      <div class="car-card">

        <div class="car-image-wrapper">
          <img src="${car.cover}" class="car-image">
        </div>

        <div class="car-content">

          <div class="car-brand">
            ${car.brand}
          </div>

          <h2>${car.name}</h2>

          <div class="car-specs">
            <span>${car.year}</span>
            <span>${car.km}</span>
            <span>AWD</span>
            <span>Premium</span>
          </div>

          <div class="price">
            ${car.price}
          </div>

          <div class="car-extra">
            Libro mantenimiento · Full equip
          </div>

          <button
            class="details-btn"
            onclick="openCar(${car.id})"
          >
            Ver detalles
          </button>

        </div>

      </div>
    `;
  });
}

function openCar(id) {
  const car = cars.find(c => c.id === id);

  let galleryHTML = "";
  car.gallery.forEach(image => {
    galleryHTML += `
      <img src="${image}" onclick="changeMainImage('${image}')">
    `;
  });

  let equipmentHTML = "";

  for (const category in car.equipment) {

    equipmentHTML += `
      <div class="equipment-box">
        <h3>${category}</h3>
        <ul>
    `;

    car.equipment[category].forEach(extra => {
      equipmentHTML += `
        <li>${extra}</li>
      `;
    });

    equipmentHTML += `
        </ul>
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="modal-content">

      <span class="close-btn" onclick="closeModal()">
        &times;
      </span>

      <div class="modal-gallery">

        <img
          src="${car.gallery[0]}"
          class="gallery-image"
          id="mainImage"
        >

        <div class="gallery-grid">
          ${galleryHTML}
        </div>

      </div>

      <div class="modal-info">

        <h2>${car.name}</h2>

        <div class="modal-price">
          ${car.price}
        </div>

        <div class="description">
          ${car.description}
        </div>

        <div class="equipment">
          ${equipmentHTML}
        </div>

        <a
          href="https://wa.me/34600000000"
          class="whatsapp-btn"
          target="_blank"
        >
          Contactar por WhatsApp
        </a>

      </div>

    </div>
  `;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function changeMainImage(src) {
  document.getElementById("mainImage").src = src;
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function(e) {
  if (e.target === modal) {
    closeModal();
  }
};

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
