const landing = document.querySelector('.landing-page');
const quienesSomos = document.querySelector('.quienes');


function quienesSomosFunc() {
    landing.classList.add('hide');
    quienesSomos.classList.remove('quienes');
    quienesSomos.classList.add('show');
}