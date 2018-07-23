

window.addEventListener('scroll' , (event) => {
    if (window.scrollY > 10) {
        document.querySelector('.primary-header').classList.add('fixed-shadow');
    }
    else {
        document.querySelector('.primary-header').classList.remove('fixed-shadow');
    }
})