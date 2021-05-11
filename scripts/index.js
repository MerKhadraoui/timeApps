const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");
const second = document.querySelector("#secconds");
const tens = document.querySelector("#tens");
let interval;
let conterTens = 0;
let conterSec = 0;
function start() {
  conterTens++;
  if (conterTens < 9) {
    tens.innerHTML = "0" + conterTens;
  }
  if (conterTens > 9) {
    tens.innerHTML = conterTens;
  }
  if (conterTens > 99) {
    conterSec++;
    second.innerHTML = "0" + conterSec;
    conterTens = 0;
    tens.innerHTML = "0" + 0;
  }
  if (conterSec > 9) {
    second.innerHTML = conterSec;
  }
}
buttonStart.onclick = function () {
  interval = setInterval(start);
};
buttonStop.onclick = function () {
  clearInterval(interval);
};
buttonReset.onclick = function () {
  clearInterval(interval);
  conterTens = "00";
  conterSec = "00";
  second.innerHTML = conterTens;
  tens.innerHTML = conterSec;
};
