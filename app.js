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
	tens = "00";
	seconds = "00";
    milliseconds = "00";
	outputSeconds.innerHTML = seconds;
	outputMinute.innerHTML = tens;
    outputMilliseconds.innerHTML = milliseconds;
});

function startStopWatch() {
    tens++;
    if(tens <=9) {
        outputMilliseconds.innerHTML = "0" + tens;
    }

    if(tens > 9) {
        outputMilliseconds.innerHTML = tens;
    }

    if(tens>99) {
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0
        outputMilliseconds.innerHTML = "0" + tens;
    }

    if(seconds > 9) {
        outputSeconds.innerHTML = seconds;
    }
}
