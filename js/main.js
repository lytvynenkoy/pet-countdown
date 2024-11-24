const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');


const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCoundown() {
    const currentTime = new Date();
const diff = nextYear - currentTime;

const daysLeft = Math.floor(diff/1000/60/60/24);
const hoursLeft = Math.floor(diff/1000/60/60) % 24;
const minutelLeft = Math.floor(diff/1000/60) % 60;
const secondsLeft = Math.floor(diff/1000) % 60;

days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
minutes.innerText = minutelLeft < 10 ? '0' + minutelLeft : minutelLeft;
seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCoundown, 1000);

setTimeout(function() {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000)