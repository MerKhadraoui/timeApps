const start = document.querySelector("#button-start");
const stop = document.querySelector("#button-stop");
const reset = document.querySelector("#button-reset");
const wrapper = document.querySelector(".wrapper");

const startFunct = () => {
  let time = new Date();
  let second = time.getSeconds();
  let minut = 0;
  if (second % 30 == 0) {
    second = 0;
    minut++;
  }
  document.querySelector("#seconds").innerHTML = second;
  document.querySelector("#tens").innerHTML = minut;
};
setInterval(startFunct, 1000);
start.addEventListener("click", startFunct);
