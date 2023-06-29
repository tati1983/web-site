function volverArriba(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let btnVolverArriba = document.getElementById('btnVolverArriba');

    btnVolverArriba.addEventListener('click', volverArriba);

    document.addEventListener('scroll', () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollPosition > 150) {
            btnVolverArriba.classList.add('show');
        } else {
            btnVolverArriba.classList.remove('show');
        }
    });
});
