//clock button variables
var minute = 00;
var seconds = 00;
var milliseconds = 00;
var tens = 00;

var Interval;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

//clock number variables
const outputMinute = document.getElementById("minute");
const outputSeconds = document.getElementById("seconds");
const outputMilliseconds = document.getElementById("milliseconds");

startButton.addEventListener("click", () => {
	clearInterval(Interval);
	Interval = setInterval(startStopWatch, 10);
});

stopButton.addEventListener("click", () => {
	clearInterval(Interval);
});

resetButton.addEventListener("click", () => {
	clearInterval(Interval);
	minute = "00";
	seconds = "00";
    milliseconds = "00";
    outputMinute.innerHTML = tens;
	outputSeconds.innerHTML = seconds;
    outputMilliseconds.innerHTML = milliseconds;
});

function startStopWatch() {
    milliseconds++;
    if(milliseconds <=9) {
        outputMilliseconds.innerHTML = "0" + milliseconds;
    }

    if(milliseconds > 9) {
        outputMilliseconds.innerHTML = milliseconds;
    }

    if(milliseconds>99) {
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        milliseconds = 0
        outputMilliseconds.innerHTML = "0" + milliseconds;
    }

    if(seconds > 9) {
        outputSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        minute++;
        outputMinute.innerHTML = "0" + minute;
        seconds = 0;
        outputSeconds.innerHTML = "0" + seconds;
    }
}
