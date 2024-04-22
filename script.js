// counter
let counter = 0;
// calculation process
document.getElementById("calculate");
calculate.addEventListener("click", calculator);
// function
function calculator() {
  var billl = +document.getElementById("bill").value;
  var tip = +document.getElementById("tip").value;
  var Tax = +document.getElementById("tax").value;
  tip = tip / 100;
  Tax = Tax / 100;
  var people = +document.getElementById("people").value;
  let rand = (billl * tip + (billl * Tax + billl)).toFixed(2);
  let amount = (rand / people).toFixed(2);
  displayE1.innerHTML = `$` + rand;
  AmountP.innerHTML = `$` + amount;
  var x = "Thank you for your order!";
  thanks.innerHTML = x;
}

// Value without entering anything to input
document.getElementById("tip").value = 0;
document.getElementById("tax").value = 0;
document.getElementById("bill").value = 0;
document.getElementById("people").value = 1;

// reset button
let displayE1 = document.getElementById("tip-tax");
let AmountP = document.getElementById("Per-amount");

var reset = document.getElementById("reset");
reset.addEventListener("click", reset1);

function reset1() {
  displayE1.innerHTML = "$-----";
  AmountP.innerHTML = "$-----";
  thanks.innerHTML = "";
  counter = 0;
}
