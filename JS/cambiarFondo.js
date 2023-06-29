const backgroundImages = [
    'Imgs/nube-blanca.jpg',
    'Imgs/nube-verde.jpg',
    'Imgs/nube-rosa.jpg',
  ];

  let backgroundImage = document.getElementById('background-img');

  let index = 0;

  function cambiarFondo(){
    let nextBackgroundImage = backgroundImages[index];
    backgroundImage.style.backgroundImage = `url(${nextBackgroundImage})`;
    index = (index + 1) % backgroundImages.length;
  };

