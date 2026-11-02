// 1. "Ver otro póster": cambia la imagen del estreno de la semana
const posters = [
  { src: 'img/poster1.png', alt: 'Póster: Top 5 mejores películas' },
  { src: 'img/poster2.png', alt: 'Póster: Movie, Studio Shodwe' },
];

const posterImg = document.getElementById('poster-img');
const btnPoster = document.getElementById('btn-poster');
let posterActual = 0;

// Precarga los pósters para que el cambio sea instantáneo
posters.forEach((p) => {
  new Image().src = p.src;
});

btnPoster.addEventListener('click', () => {
  posterActual = (posterActual + 1) % posters.length;
  posterImg.src = posters[posterActual].src;
  posterImg.alt = posters[posterActual].alt;
});

// 2. "Me interesa": aumenta en uno el contador de esa película
document.querySelectorAll('.pelicula').forEach((pelicula) => {
  const contador = pelicula.querySelector('.contador');
  const boton = pelicula.querySelector('.btn-interesa');

  boton.addEventListener('click', () => {
    contador.textContent = Number(contador.textContent) + 1;
  });
});

// 3. "Comprar entradas": muestra una alerta
document.getElementById('btn-comprar').addEventListener('click', () => {
  alert('Redirigiendo a la compra de entradas...');
});
