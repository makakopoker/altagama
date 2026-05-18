const cars = [
  {
    id: 1,
    brand: "INFINITI",
    name: "QX70S 5.0 V8 Premium AWD",
    year: "2015",
    km: "146.000 km",
    price: "20.500 €",

    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",

    equipment: {
      "Confort & Interior": [
        "Asientos eléctricos con memoria",
        "Asientos calefactables",
        "Tapicería cuero premium",
        "Volante calefactable",
        "Climatizador bizona",
        "Techo solar eléctrico",
        "Keyless Entry",
        "Portón eléctrico"
      ],

      "Tecnología": [
        "Sistema BOSE Premium",
        "Navegación GPS",
        "Bluetooth",
        "USB",
        "Cámara 360º",
        "Sensores parking"
      ],

      "Prestaciones": [
        "Motor V8 5.0 390cv",
        "AWD Inteligente",
        "Cambio automático",
        "Modo Sport",
        "Levas volante"
      ]
    }
  }
];

const carsGrid = document.querySelector(".cars-grid");
const modal = document.getElementById("modal");

renderCars();

function renderCars() {

  cars.forEach(car => {

    carsGrid.innerHTML += `
      <div class="car-card">

        <img
          src="${car.image}"
          class="car-image"
        >

        <div class="car-content">

          <div class="car-brand">
            ${car.brand}
          </div>

          <h2>
            ${car.name}
          </h2>

          <div class="price">
            ${car.price}
          </div>

          <p>
            ${car.year} · ${car.km}
          </p>

          <button
            class="details-btn"
            onclick="openModal(${car.id})"
          >
            Ver detalles
          </button>

        </div>

      </div>
    `;
  });

}

function openModal(id){

  const car = cars.find(c => c.id === id);

  let extrasHTML = "";

  for(const category in car.equipment){

    extrasHTML += `
      <div class="equipment-box">
        <h3>${category}</h3>
        <ul>
    `;

    car.equipment[category].forEach(extra => {
      extrasHTML += `<li>${extra}</li>`;
    });

    extrasHTML += `
        </ul>
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="modal-box">

      <span class="close-btn" onclick="closeModal()">
        ×
      </span>

      <h2>${car.name}</h2>

      <div class="price">
        ${car.price}
      </div>

      ${extrasHTML}

    </div>
  `;

  modal.style.display = "flex";
}

function closeModal(){
  modal.style.display = "none";
}
