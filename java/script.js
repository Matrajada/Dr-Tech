// ======================================================
// HERO CAROUSEL
// ======================================================

const heroSlides = document.querySelectorAll('.slide');

const heroDots = document.querySelectorAll('.dot');

const heroNextBtn = document.querySelector('.right-arrow');

const heroPrevBtn = document.querySelector('.left-arrow');

let currentHeroSlide = 0;

function showHeroSlide(index){

    heroSlides.forEach((slide)=>{
        slide.classList.remove('active');
    });

    heroDots.forEach((dot)=>{
        dot.classList.remove('active');
    });

    heroSlides[index].classList.add('active');

    heroDots[index].classList.add('active');

}

// BOTÃO NEXT

heroNextBtn.addEventListener('click', ()=>{

    currentHeroSlide++;

    if(currentHeroSlide >= heroSlides.length){
        currentHeroSlide = 0;
    }

    showHeroSlide(currentHeroSlide);

});

// BOTÃO PREV

heroPrevBtn.addEventListener('click', ()=>{

    currentHeroSlide--;

    if(currentHeroSlide < 0){
        currentHeroSlide = heroSlides.length - 1;
    }

    showHeroSlide(currentHeroSlide);

});


// ======================================================
// REVIEWS CAROUSEL
// ======================================================

const wrapper = document.getElementById('carouselWrapper');

const track = document.getElementById('carouselTrack');

const progressFill = document.getElementById('progressFill');

const prevBtn = document.getElementById('prevBtn');

const nextBtn = document.getElementById('nextBtn');


// MOVE DOS CARDS

const move = (dir) => {

    const firstCard = wrapper.querySelector('.review-card');

    if(firstCard){

        const cardWidth = firstCard.offsetWidth + 25;

        wrapper.scrollBy({

            left: dir * cardWidth,

            behavior: 'smooth'

        });

    }

};


// BOTÕES

prevBtn.addEventListener('click', (e)=>{

    e.preventDefault();

    move(-1);

});

nextBtn.addEventListener('click', (e)=>{

    e.preventDefault();

    move(1);

});


// ======================================================
// DRAG SYSTEM
// ======================================================

let isDragging = false;

let startX;

let scrollLeft;


// CLONAGEM LOOP

const cards = Array.from(track.children);

cards.forEach(card => {

    const cloneBefore = card.cloneNode(true);

    const cloneAfter = card.cloneNode(true);

    track.appendChild(cloneAfter);

    track.insertBefore(cloneBefore, track.firstChild);

});


// SETUP

const setupCarousel = () => {

    const cardWidth = track.querySelector('.review-card').offsetWidth + 20;

    wrapper.scrollLeft = cardWidth * cards.length;

    updateUI();

};


// UPDATE UI

const updateUI = () => {

    const allCards = track.querySelectorAll('.review-card');

    const wrapperCenter = wrapper.scrollLeft + wrapper.offsetWidth / 2;

    allCards.forEach(card => {

        const cardCenter = card.offsetLeft + card.offsetWidth / 2;

        const distance = Math.abs(wrapperCenter - cardCenter);

        if(distance < 150){

            card.classList.add('is-focused');

        } else {

            card.classList.remove('is-focused');

        }

    });

    // LOOP INFINITO

    const cardWidth = allCards[0].offsetWidth + 20;

    const totalWidth = track.scrollWidth / 3;

    if(wrapper.scrollLeft <= 0){

        wrapper.scrollLeft = totalWidth;

    } else if(wrapper.scrollLeft >= totalWidth * 2){

        wrapper.scrollLeft = totalWidth;

    }

    // PROGRESS BAR

    const scrollPercent = (wrapper.scrollLeft % totalWidth) / totalWidth;

    progressFill.style.left = (scrollPercent * 100) + "%";

};


// DRAG

wrapper.addEventListener('mousedown', (e)=>{

    isDragging = true;

    startX = e.pageX - wrapper.offsetLeft;

    scrollLeft = wrapper.scrollLeft;

});


window.addEventListener('mouseup', ()=>{

    isDragging = false;

});


window.addEventListener('mousemove', (e)=>{

    if(!isDragging) return;

    e.preventDefault();

    const x = e.pageX - wrapper.offsetLeft;

    const walk = (x - startX) * 1.5;

    wrapper.scrollLeft = scrollLeft - walk;

});

const images = document.querySelectorAll('img');

images.forEach((img)=>{

    if(!img.classList.contains('hero-main-image')){

        img.loading = 'lazy';

    }

});


// EVENTS

wrapper.addEventListener('scroll', updateUI);

window.addEventListener('load', setupCarousel);

window.addEventListener('resize', setupCarousel);

// AUTOPLAY

setInterval(()=>{

    currentHeroSlide++;

    if(currentHeroSlide >= heroSlides.length){
        currentHeroSlide = 0;
    }

    showHeroSlide(currentHeroSlide);

}, 5000);

const menuToggle = document.querySelector('.menu-toggle');

const nav = document.querySelector('nav');

menuToggle.addEventListener('click', ()=>{

    nav.classList.toggle('active');

});

// ======================================================
// TOUCH MOBILE SUPPORT
// ======================================================

let touchStartX = 0;

let touchScrollLeft = 0;


// TOUCH START

wrapper.addEventListener('touchstart', (e)=>{

    touchStartX = e.touches[0].pageX - wrapper.offsetLeft;

    touchScrollLeft = wrapper.scrollLeft;

});


// TOUCH MOVE

wrapper.addEventListener('touchmove', (e)=>{

    const x = e.touches[0].pageX - wrapper.offsetLeft;

    const walk = (x - touchStartX) * 1.5;

    wrapper.scrollLeft = touchScrollLeft - walk;

});