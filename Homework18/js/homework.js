//------------------------------------------------------- №1

let minute = 1;
let second = 25;

const getTimer = document.querySelector(".timer__time");

function formatTime(min, sec) {
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

let countdownTimer = setInterval(() => {
    getTimer.textContent = formatTime(minute, second);

    if (second > 0) {
        second -= 1;
    } else if (minute > 0) {
        second = 59;
        minute -= 1;
    } else {
        clearInterval(countdownTimer);
    }
}, 1000);
