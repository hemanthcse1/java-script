/*
    Type conversion
*/

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1
// console.log(age,typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/*
    const = a variable that can't be changed
*/

// const pi = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// document.getElementById("mysubmit").onclick = function () {
//   radius = document.getElementById("mytext").value;
//   radius = Number(radius);
//   circumference = 2 * pi * radius;

//   document.getElementById("myh3").textContent = circumference;
// };

/*
    counter function
*/

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLable = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLable.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLable.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLable.textContent = count;
};
