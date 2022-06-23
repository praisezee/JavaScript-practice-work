let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let screen = document.getElementById("screen");
let init = null;
const start = document.getElementById("startBtn");
const pause = document.getElementById("pauseBtn");
const reset = document.getElementById("resetBtn");
const time = document.getElementById("time")


//start button event listener

start.addEventListener("click", () => {
    if (init !== null) {
        clearInterval(init)
    }
    init = setInterval(displayTimer, 10);
});

// pause button event listeners

pause.addEventListener("click", () => {
    clearInterval(init)
});

//reset button event listener

reset.addEventListener("click", () => {
    clearInterval(init);
    [milliseconds, seconds, minutes, hours] =[0, 0, 0, 0]
    screen.innerHTML = `0.0.0.00`;
});

const displayTimer = () =>{
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds ++;
        if (seconds === 60) {
            seconds = 0;
            minutes ++;
            if (minutes === 60) {
                minutes === 0;
                hours ++;
            };
        };
    };

    let h = hours < 10 ? "0" + hours: hours;
    let m = minutes < 10 ? "0" + minutes: minutes;
    let s = seconds < 10 ? "0" + seconds: seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds: milliseconds < 100 ? "0" + milliseconds : milliseconds;

    screen.innerHTML = `${h} : ${m} : ${s} :${ms}`;
};
