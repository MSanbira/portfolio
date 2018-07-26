
const sections = document.querySelectorAll('.wrapper');

const navBtns = document.querySelectorAll('.nav-btn');

const curtain = document.querySelector('.curtain');

function openCurtain() {
    curtain.classList.add('open');
    setTimeout(function () {curtain.classList.add('hide');}, 1000);
}

function closeCurtain() {
    curtain.classList.remove('hide');
    setTimeout(function () {curtain.classList.remove('open');}, 0);
}

function changeLocationHash(eventTarget) {
    const navTo = eventTarget.getAttribute('data-nav');
    window.location.hash = navTo;
    window.onhashchange = showSection();
}

function showSection() {
    let hash = window.location.hash;
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].classList.remove('chosen');
        if (('#' + navBtns[i].getAttribute('data-nav')) == hash) {
            navBtns[i].classList.add('chosen');
        }
    }
    closeCurtain();
    setTimeout(function () {
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('show');
            if (sections[i].getAttribute('data-nav') == hash) {
                sections[i].classList.add('show');
            }
        }
        openCurtain();
    }, 1000,);
}

function init() {
    registerEvents();
}

function registerEvents() {
    document.addEventListener('click', (event) => {

        if (event.target.classList.contains('nav-btn')) {
            changeLocationHash(event.target);
        }
    });
}

window.addEventListener('scroll', (event) => {
    if (window.scrollY > 10) {
        document.querySelector('.primary-header').classList.add('fixed-shadow');
    }
    else {
        document.querySelector('.primary-header').classList.remove('fixed-shadow');
    }
});

init();

