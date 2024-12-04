var hours = 0;
var minutus = 0;
var second = 0;
var milisec = 0;
var Interval;

var getHours = document.getElementById("getHours");
var getminutus = document.getElementById("getmint");
var getsecond = document.getElementById("getsec");
var getmilisecond = document.getElementById("getmilisec");

function start() {
  clearInterval(Interval); // Prevent multiple intervals
  Interval = setInterval(function () {
    milisec++;
    getmilisecond.innerHTML = `${milisec}ms`;

    if (milisec >= 100) {
      second++;
      getsecond.innerHTML = `${second}s`;
      milisec = 0;
    }
    if (second >= 60) {
      minutus++;
      getminutus.innerHTML = `${minutus}m`;
      second = 0;
    }
    if (minutus >= 59) {
      hours++;
      getHours.innerHTML = `${hours}h`;
      minutus = 0;
    }
  }, 10);
  document.getElementById("disb").disabled = true; 
}

function stop() {
  clearInterval(Interval);
  document.getElementById("disb").disabled = false; 
}

function reset() {
  hours = 0;
  minutus = 0;
  second = 0;
  milisec = 0;
  getHours.innerHTML = `0h`;
  getminutus.innerHTML = `0m`;
  getsecond.innerHTML = `0s`;
  getmilisecond.innerHTML = `0ms`;
  document.getElementById("disb").disabled = false; 
}
