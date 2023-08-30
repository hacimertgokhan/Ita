

/* other */

let swatch = document.querySelector(".stopwatch");
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let minute = 0;
let seconds = 0;
let hours = 0;
let TimerShowCase;
let isCounterEnable = false;

let counter = "00:00";
update();
function update(){swatch.innerHTML = counter;}

start.addEventListener("click", () => {
    isCounterEnable = true;
})

stop.addEventListener("click", () => {
    isCounterEnable = false;
})

reset.addEventListener("click", () => {
    isCounterEnable = false;
    minute = 0;
    seconds = 0;
    TimerShowCase = "0"+minute + ":" + "0"+seconds;
    swatch.innerText = TimerShowCase;
    isCounterEnable = true;
})

function clock() {         
    setTimeout(function() {   
      const d = new Date();
      const n = d.toLocaleDateString() + " - " + d.getHours() +":"+d.getMinutes();
      document.getElementById('time').innerHTML = n; 
      clock();             
    }, 1000)
  }
  clock();  

setInterval(() => {
    if(isCounterEnable) {
        seconds++;
        if(seconds >= 60) {
            seconds = 0;
            minute++;
        }
        if(seconds >= 10) {
            if(minute >= 10) {
                TimerShowCase = minute + ":" + seconds;
            } else {
                TimerShowCase = "0"+minute + ":" +seconds;
            }
        } else {
            TimerShowCase =minute + ":" +"0"+seconds;
            if(minute >= 10) {
                TimerShowCase =minute + ":" +"0"+seconds;
            } else {
                TimerShowCase ="0"+minute + ":" +"0"+seconds;
            }
        }
        swatch.innerText = TimerShowCase;

    }
}, 1000)