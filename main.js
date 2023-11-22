let heltheInp = document.getElementById("helthe");
let RangeInp = document.getElementById("Range");
let a;
let b;
let RangeValue = document.getElementById("RangeValue");
function sumite() {
  RangeValue.innerText = `Check Number for [1 : ${RangeInp.value}]`;
  helth.innerText = heltheInp.value;
}

let menuIcon = document.getElementById("menuIcon");
let menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

let check = document.getElementById("check");
let result;
let win = document.getElementById("win");
let lost = document.getElementById("lost");

genrate();
let inp = document.getElementById("inp");
let helth = document.getElementById("helth");

function genrate() {
  let number = Math.trunc(Math.random() * +RangeInp.value);
  RangeInp.value === ""
    ? (number = Math.trunc(Math.random() * 100))
    : (number = Math.trunc(Math.random() * RangeInp.value));

  console.log(number);
  result = number;

  return number;
}
function replay() {
  helth.innerHTML = `&ThinSpace; 8`;
}
function Check() {
  if (+helth.innerHTML === 0) {
    console.log("lost");
    lost.innerText = +lost.innerText + 1;
    console.log(`Number is ${result}`);
    replay();
    genrate();
    return;
  } else {
    helth.innerText = helth.innerText - 1;
  }

  if (+inp.value > result) {
    console.log("dowen");
  } else if (+inp.value < result) {
    console.log("UP");
  } else {
    console.log("congratulations");
    win.innerText = +win.innerText + 1;
    replay();
    genrate();
  }
  inp.value = "";
}
