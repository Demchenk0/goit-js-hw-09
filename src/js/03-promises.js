import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const inputDelay = document.querySelector('input[name=delay]');
const inputStep = document.querySelector('input[name=step]');
const inputAmount = document.querySelector('input[name=amount]');
const buttonSubmit = document.querySelector('button');

form.addEventListener('submit', onFormSubmit);

let counterMiliSek = null;

function onFormSubmit(event) {
  event.preventDefault();
  const firstDelay = Number(inputDelay.value);
  const firstDelayStep = Number(inputStep.value);
  const firstAmount = Number(inputAmount.value);


// Наш цыкл перебирающий и добавляет нашие значения
  
  for (let index = 1, counterMiliSek = firstDelay; index <= firstAmount; index += 1, counterMiliSek += firstDelayStep) {

    createPromise(index, counterMiliSek)
        .then(thenResolve => {
          Notify.success(thenResolve);
        })
        .catch(catchRegect => {
          Notify.failure(catchRegect);
        });
  }
  
}

// Промисы
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
    resolve (`✅ Fulfilled promise ${position} in ${delay}ms`)
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`)
    }
    }, delay)

  });
}
