const pause = document.getElementById("pause");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

const timerDisplay = document.getElementById("timer-display");

let millisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

let loop;

start.addEventListener("click", () => {
  clearInterval(loop);
  loop = setInterval(counter, 10);
});

pause.addEventListener("click", () => {
  clearInterval(loop);
});

reset.addEventListener("click", () => {
  clearInterval(loop);
  millisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  timerDisplay.innerHTML = `${hour} : ${minute} : ${second} : ${millisecond}`;
});

function counter() {
  millisecond += 10;
  if (millisecond === 1000) {
    second++;
    millisecond = 0;

    if (second === 60) {
      minute++;
      second = 0;

      if (minute === 60) {
        hour++;
        minute = 0;
      }
    }
  }
  timerDisplay.innerHTML = `${hour} : ${minute} : ${second} : ${millisecond}`;
}
