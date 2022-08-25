import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const myTimeInput = document.querySelector('input');
const buttonStart = document.querySelector('button[data-start]');
const divTimer = document.querySelector('.timer');
const divField = document.querySelector('.field');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

let selectedDate = null;
const currentTime = Date.now();
let timerId = null;

buttonStart.addEventListener('click', ()=> {
    timer.start()
    buttonStart.disabled = true;

});

const timer = {
    start() {
        // дата выбраная пользователем
        const startTime = selectedDate;

// то что у нас происходит )) 
        timerId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            showTime(days, hours, minutes, seconds);
            console.log(days, hours, minutes, seconds);
            if (deltaTime < 1000) {
                clearInterval(timerId);
            }
            console.log(deltaTime);
    // console.log(`${days}, ${hours}, ${minutes}, ${seconds}`);
}, 1000); 
}
};



const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime();
        
        if (selectedDates[0].getTime() < currentTime) {
            console.log(selectedDates[0].getTime());
        console.log(currentTime);
            return Notify.failure('ai dont noy');
            
    } else {
            return Notify.success('Molodec');
            }
    
},
};

flatpickr(myTimeInput, options);
// добавляет 00:03:01 нолик если )))
function pad(value) {
    return String(value).padStart(2, '0');
}

function showTime( days, hours, minutes, seconds) {
    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
const days = pad(Math.floor(ms / day));
  // Remaining hours
const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

