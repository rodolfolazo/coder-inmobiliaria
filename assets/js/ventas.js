const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    aseos: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    aseos: 1,
    costo: "1.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    aseos: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en zona residencial",
    src: "https://media.daft.ie/eyJidWNrZXQiOiJtZWRpYW1hc3Rlci1zM2V1IiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxMjAwLCJoZWlnaHQiOjEyMDB9fSwib3V0cHV0Rm9ybWF0IjoianBlZyIsImtleSI6IjAvNS8wNWExMjMwMy05NmEwLTQ3MjAtYjc2Zi1lZTdkZWNhZmIyOWEuSlBFRyJ9?signature=5f14440478323d206929782ec9dff3bd45355deda3e07872c230e812deb82b52",
    descripcion: "Hermosa casa familiar con gran jardín y garage",
    ubicacion: "14 Norfolk Road Dublin 8 ",
    habitaciones: 4,
    aseos: 2,
    costo: "9.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en Phoenix Park",
    src: "https://media.daft.ie/eyJidWNrZXQiOiJtZWRpYW1hc3Rlci1zM2V1IiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxMjAwLCJoZWlnaHQiOjEyMDB9fSwib3V0cHV0Rm9ybWF0IjoianBlZyIsImtleSI6IjAvMS8wMTc0YmMyNy02NDQ1LTQ5M2ItYmVlYy0yNGIzZmQ1Yjg2NzkuSlBFRyJ9?signature=c8fb476731dd5c75b6b40c69954df05ca737ecc978871a2ae91763214eb4d14c",
    descripcion: "Hermosa casa en exclusivo barrio de Phoenix Park",
    ubicacion: "108 Inchicore Road Dublin 12",
    habitaciones: 2,
    aseos: 2,
    costo: "3.500",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento en zona comercial Drumdrum",
    src: "https://media.daft.ie/eyJidWNrZXQiOiJtZWRpYW1hc3Rlci1zM2V1IiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoxMjAwLCJoZWlnaHQiOjEyMDB9fSwib3V0cHV0Rm9ybWF0IjoianBlZyIsImtleSI6IjMvZi8zZmVmMzhkMS0yM2QxLTQxNGMtYWRkZi1kYjc2NTIzN2Q3NjcuSlBFRyJ9?signature=dfdbca3c6b79689850146c2d04a67c1deb2c5085223fa352bd266612f5c70878",
    descripcion: "Amplio apartamento cerca a zona comercial de Drumdrum",
    ubicacion: "6101 Ballyfermont avenue",
    habitaciones: 32,
    aseos: 3,
    costo: "2.500",
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

for (let item of propiedades_venta) {
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
