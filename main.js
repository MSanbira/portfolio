
const sections = document.querySelectorAll('.wrapper');

const headerNav = document.querySelector('.primary-nav');

const navBtns = document.querySelectorAll('.nav-btn');

const backdrop = document.querySelector('.backdrop');

const curtain = document.querySelector('.curtain');

const footer = document.querySelector('footer');

const hamburger = document.querySelector('.hamburger');

function openCurtain() {
    curtain.classList.add('open');
    setTimeout(function () { curtain.classList.add('hide'); }, 1000);
}

function closeCurtain() {
    curtain.classList.remove('hide');
    setTimeout(function () { curtain.classList.remove('open'); }, 0);
}

function hideBackdrop() {
    backdrop.classList.remove('active');
    setTimeout(function () { backdrop.classList.add('hide'); }, 1000);
}

function showBackdrop() {
    backdrop.classList.remove('hide');
    setTimeout(function () { backdrop.classList.add('active'); }, 0);
}

function changeLocationHash(dataNav) {
    if (dataNav != 'home' || hamburger.classList.contains('active')) {
        openCloseNav();
    }
    window.location.hash = dataNav;
    window.onhashchange = showSection();
}

function openCloseNav() {
    if (hamburger.classList.contains('active')) {
        hideBackdrop();
    }
    else {
        showBackdrop();
    }
    hamburger.classList.toggle('active');
    headerNav.classList.toggle('open');
}

function showSection() {
    footer.classList.add('hide');
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
        footer.classList.remove('hide');
        openCurtain();
    }, 1000, );
}

function init() {
    registerEvents();
    if (window.location.hash != "") {
        showSection();
    }
    else {
        changeLocationHash('home');
    }
}

function registerEvents() {
    document.addEventListener('click', (event) => {

        if (event.target.classList.contains('nav-btn')) {
            changeLocationHash(event.target.getAttribute('data-nav'));
        }

        if (event.target.classList.contains('hamburger') || event.target.parentElement.classList.contains('hamburger')) {
            openCloseNav();
        }
        if (event.target.classList.contains('backdrop')) {
            openCloseNav();
        }
    });
}

window.addEventListener('scroll', (event) => {
    if (window.scrollY > 10) {
        document.querySelector('.primary-header').classList.add('header-scroll');
    }
    else {
        document.querySelector('.primary-header').classList.remove('header-scroll');
    }
});

init();

