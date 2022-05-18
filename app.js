let add = document.getElementById("increase");
let remove = document.getElementById("decrease");

let int = document.getElementById("value");
let integer = 0;

add.addEventListener("click", increasefunction);

function increasefunction() {
  //console.log(e.target.value);
  integer++;
  int.innerHTML = integer;
  if (integer > 0) {
    document.getElementById("value").style.color = "green";
  } else if (integer < 0) {
    document.getElementById("value").style.color = "red";
  } else {
    document.getElementById("value").style.color = "black";
  }
}

document.getElementById("decrease").addEventListener("click", decreasefunction);
function decreasefunction() {
  integer--;
  document.getElementById("value").innerHTML = integer;
  if (integer > 0) {
    document.getElementById("value").style.color = "green";
  } else if (integer < 0) {
    document.getElementById("value").style.color = "red";
  } else {
    document.getElementById("value").style.color = "black";
  }
}
//const value = document.getElementById("#value");
//const btns = document.querySelectorAll(".btn");
//console.log(btns);
