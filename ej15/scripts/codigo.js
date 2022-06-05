var imagenes = [
  "",
  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg",
  "img/foto4.jpg",
  "img/foto5.jpg",
  "img/foto6.jpg",
  "img/foto7.jpg",
  "img/foto8.jpg",
];

function cambiarFoto(numero) {
  document.getElementById("imagen").src = imagenes[numero];
}
