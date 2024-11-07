let cler = document.getElementById("cler");
let deletee = document.getElementById("deletee");
let present = document.getElementById("present");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let subtraction = document.getElementById("subtraction");
let addition = document.getElementById("addition");
let equality = document.getElementById("equality");
let nine = document.getElementById("nine");
let eight = document.getElementById("eight");
let seven = document.getElementById("seven");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let recipient = document.getElementById("recipient");
nine = 9;
eight = 8;
seven = 7;
six = 6;
five = 5;
four = 4;
three = 3;
two = 2;
one = 1;
let currentinput = "";

function cleanUp() {
  currentinput = "";
  recipient.innerHTML = 0;
  console.log(0);
}

function toqiz() {
  currentinput += 9;
  //   nine = 9;
  //   console.log(nine);
  recipient.innerHTML = currentinput;
}
function sakkiz() {
  //   eight = 8;
  currentinput += 8;
  recipient.innerHTML = currentinput;
}
function yetti() {
  currentinput += 7;
  recipient.innerHTML = currentinput;
}
function kopaytruv() {
  currentinput += "*";
  recipient.innerHTML = currentinput;
}
function tort() {
  currentinput += 4;
  recipient.innerHTML = currentinput;
}
function besh() {
  currentinput += 5;
  recipient.innerHTML = currentinput;
}
function olti() {
  currentinput += 6;
  recipient.innerHTML = currentinput;
}
function ayruv() {
  currentinput += "-";
  recipient.innerHTML = currentinput;
}
function bir() {
  currentinput += 1;
  recipient.innerHTML = currentinput;
}
function ikki() {
  currentinput += 2;
  recipient.innerHTML = currentinput;
}
function uch() {
  currentinput += 3;
  recipient.innerHTML = currentinput;
}
function besh() {
  currentinput += 5;
  recipient.innerHTML = currentinput;
}
function qoshuv() {
  currentinput += "+";
  recipient.innerHTML = currentinput;
}
function nol() {
  currentinput += 0;
  recipient.innerHTML = currentinput;
}
function butun() {
  currentinput += ".";
  recipient.innerHTML = currentinput;
}
function teng() {
  currentinput += "=";
  recipient.innerHTML = currentinput;
  recipient = "";
}
function boluv() {
  currentinput += "/";
  recipient.innerHTML = currentinput;
}
function foiz() {
  currentinput += "%";
  recipient.innerHTML = currentinput;
}
function delet() {
  // Agar currentinput bo'sh bo'lmasa, oxirgi belgini o'chiradi
  if (currentinput.length > 0) {
    currentinput = currentinput.slice(0, -1); // Oxirgi belgini olib tashlaydi
    recipient.innerHTML = currentinput || 0; // Agar hech narsa qolmasa, 0 ko'rsatadi
  }
}

function teng() {
  try {
    let javob = eval(currentinput);
    recipient.innerHTML = javob;
    currentinput = javob.toString();
  } catch (error) {
    recipient.innerHTML = "please write correctly";
  }
}
