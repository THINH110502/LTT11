const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');
const menu = document.querySelector('#menu-bar');
const formBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


const videoBtns = document.querySelectorAll('.vid-btn');
const videoSlider = document.getElementById('video-slider')
videoBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        videoBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const newSrc = this.getAttribute('data-src');
        videoSlider.src = newSrc;
        videoSlider.play();
    });
});


