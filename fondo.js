var backgroundImages = [
    'Imgs/nube-blanca.jpg',
    'Imgs/nube-verde.jpg',
    'Imgs/nube-rosa.jpg',
    'Imgs/nube-negra.jpg'
  ];
  
  var currentIndex = 0;
  var interval;
  
  function changeBackground() {
    var newBackground = 'url("' + backgroundImages[currentIndex] + '")';
    document.querySelector('.contenedor-img-home').style.backgroundImage = newBackground;
  }
  
  function startBackgroundChange() {
    interval = setInterval(function () {
      currentIndex = (currentIndex + 1) % backgroundImages.length;
      changeBackground();
    }, 500);
  }
  
  function stopBackgroundChange() {
    clearInterval(interval);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    changeBackground(); // Establece el fondo inicial al cargar la página
  });
  
  document.querySelector(".contenedor-img-home").addEventListener("mouseover", function (event) {
    if (event.target.matches("#nombre") || event.target.matches("p")) {
      startBackgroundChange(); // Inicia el cambio de fondo al pasar el mouse sobre los elementos deseados
    }
  });
  
  document.querySelector(".contenedor-img-home").addEventListener("mouseout", function (event) {
    if (event.target.matches("#nombre") || event.target.matches("p")) {
      stopBackgroundChange(); // Detiene el cambio de fondo al quitar el mouse de los elementos deseados
    }
  });