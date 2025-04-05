const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    aseos: 2,
    costo: "2.000",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    aseos: 3,
    costo: "2.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    aseos: 2,
    costo: "2.200",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Piso con terraza en campanar Valencia",
    src: "https://static.fotocasa.es/images/ads/681103c3-6e52-4e88-934b-0616b9298821?rule=web_1200x0",
    descripcion:
      "Magnífica vivienda de dos habitaciones con amplia terraza privada",
    ubicacion: "Carrer tres forques 34 Valencia",
    habitaciones: 2,
    aseos: 1,
    costo: "6.200",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Ático en alquiler en San Antonio, El Mercat",
    src: "https://static.fotocasa.es/images/ads/32046bb7-46bd-4dc2-b7d6-f92beb92f574?rule=web_1200x0",
    descripcion:
      "Engel & Völkers presenta en exclusiva este espectacular ático duplex. Ubicado en la última planta del edificio y con dos plantas de vivienda.",
    ubicacion: "El Mercat, Valencia Capital",
    habitaciones: 3,
    aseos: 3,
    costo: "10.200",
    smoke: true,
    pets: false,
  },
  {
    nombre: "Piso en Arrancapins",
    src: "https://static.fotocasa.es/images/ads/2ab4c11b-afb3-459a-bca3-ae8700127e08?rule=web_1200x0",
    descripcion:
      "Precioso piso dotado de techos altos y conservando elementos originales como los suelos de mosaico y paredes de ladrillo visto.",
    ubicacion: "Arrancapins Valencia ",
    habitaciones: 2,
    aseos: 1,
    costo: "1.780",
    smoke: true,
    pets: true,
  },
];

let html = "";

const fila = document.querySelector(".row");

const permitidoFumar = `
<p class="text-success">
    <i class="fas fa-smoking"></i> Permitido fumar
</p>
`;

const noFumar = `
<p class="text-danger">
    <i class="fas fa-smoking-ban"></i> No se permite fumar
</p>
`;

const permitidoPet = `
<p class="text-success">
    <i class="fas fa-paw"></i> Mascotas permitidas
</p>
`;

const noPet = `
<p class="text-danger">
    <i class="fa-solid fa-ban"></i> No se permiten mascotas
</p>
`;

for (let item of propiedades_alquiler) {
  const fumar = item.smoke ? permitidoFumar : noFumar;
  const pet = item.pets ? permitidoPet : noPet;
  html += `
  <div class="col-md-4 mb-4">
      <div class="card">
          <img src=${item.src}
              class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
              <h5 class="card-title">
                  ${item.nombre}
              </h5>
              <p class="card-text">
                  ${item.descripcion}
              </p>
              <p>
                  <i class="fas fa-map-marker-alt"></i> ${item.ubicacion}
              </p>
              <p>
                  <i class="fas fa-bed"></i> ${item.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${item.aseos} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${item.costo}</p>
              ${fumar}
              ${pet}
          </div>
      </div>
  </div>
  `;
}
fila.innerHTML = html;
