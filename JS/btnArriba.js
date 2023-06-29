// window.addEventListener('scroll', ()=>{
//     let btnVolverArriba = document.getElementById('btnVolverArriba');
//     let scrollPosition = window.scrollY;
//     if (scrollPosition > 100) {
//         btnVolverArriba.classList.add('show');
//     } else {        
//         btnVolverArriba.classList.remove('show');
//     }
// });


document.addEventListener('scroll', () => {
    let btnVolverArriba = document.getElementById('btnVolverArriba');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (scrollPosition > 100) {
      btnVolverArriba.classList.add('show');
    } else {
      btnVolverArriba.classList.remove('show');
    }
  });
  