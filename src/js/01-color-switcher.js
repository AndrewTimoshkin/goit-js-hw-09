function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const body = document.querySelector("body");

let timerId = null;

btnStart.addEventListener('click', showColor)
btnStop.addEventListener("click", stopShowColor)

btnStop.setAttribute("disabled", true)

function showColor() { 
timerId = setInterval(function () {
    body.style.backgroundColor = getRandomHexColor()
    }, 1000);    
    
    if (setInterval) {
        btnStart.setAttribute("disabled", true);
        btnStop.removeAttribute("disabled");
    }   
};

function stopShowColor() {
    clearInterval(timerId);
    if (clearInterval) {
        btnStart.removeAttribute("disabled");
        btnStop.setAttribute("disabled", true);
    }
}