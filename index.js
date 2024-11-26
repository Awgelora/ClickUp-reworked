console.log('Number for contact: +998 90 912 69 66');

const buttonContainer = document.querySelector('.header-menu-button');
const menu = document.querySelector('.header-menu');

buttonContainer.addEventListener('click', () => {
    buttonContainer.classList.toggle('active');
    menu.classList.toggle('active');
})

const arrowLeft = document.getElementById('left');
const arrowRight = document.getElementById('right');
const slider = document.getElementById('getSlider');
const blockWidth = 500;
let currentPosition = 0;

arrowRight.addEventListener('click', () => {
    currentPosition += blockWidth;
    if (currentPosition >= blockWidth * 3) {
        currentPosition = blockWidth * 3;
        arrowRight.style.opacity = 0.5;
        arrowRight.style.pointerEvents = 'none';
    } else {
        arrowLeft.style.opacity = 1;
        arrowLeft.style.pointerEvents = 'all';
    }
    slider.style.transform = `translateX(-${currentPosition}px)`;
});

arrowLeft.addEventListener('click', () => {
    currentPosition -= blockWidth;
    if (currentPosition <= 0) {
        currentPosition = 0;
        arrowLeft.style.opacity = 0.5;
        arrowLeft.style.pointerEvents = 'none';
    } else {
        arrowRight.style.opacity = 1;
        arrowRight.style.pointerEvents = 'all';
    }
    slider.style.transform = `translateX(-${currentPosition}px)`;
});

function onEntry (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('withAnimationShow')
        }
    });
}

let options = {
    treshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.withAnimation');

for (let elm of elements) {
    observer.observe(elm);
}

const loupe = document.getElementById('loupe');
const searchInput = document.getElementById('searchInput')
const allLang = ['en', 'ru'];

loupe.addEventListener('click', () => {
    searchInput.classList.toggle('showMenu');
})

const select = document.querySelector('select');

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage () {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }

    select.value = hash;

    for (let key in langArr) {
        document.querySelector('.lang-' + key).innerHTML = langArr[key][hash];
    }
}



changeLanguage();