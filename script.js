// 1. "Ver otro póster": cambia la imagen del estreno de la semana
const poster = document.getElementById('poster');
const btnPoster = document.getElementById('btn-poster');

btnPoster.addEventListener('click', () => {
  poster.classList.toggle('alterno');
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
