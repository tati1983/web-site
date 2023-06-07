var backgroundImages = [
    'Imgs/nube-blanca.jpg',
    'Imgs/nube-verde.jpg',
    'Imgs/nube-rosa.jpg',
    'Imgs/nube-negra.jpg'
  ];
  
  var currentIndex = 0;
  
  function changeBackground() {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    var newBackground = 'url("' + backgroundImages[currentIndex] + '")';
    document.querySelector('.contenedor-img-home').style.backgroundImage = newBackground;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    changeBackground(); 
  });
  
  document.querySelector(".contenedor-img-home").addEventListener("mouseover", function (event) {
    if (event.target.matches("#nombre") || event.target.matches("p")) {
      changeBackground(); 
    }
  });