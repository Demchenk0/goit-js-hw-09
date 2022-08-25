const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const myBody = document.querySelector('body');

console.log(buttonStart);
console.log(buttonStop);
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// let color = getRandomHexColor();

buttonStart.addEventListener('click', ()=> {
    
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    timerId = setInterval(() => {
        myBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  buttonStop.disabled = true;
  buttonStart.disabled = false;
  
  clearInterval(timerId);
});