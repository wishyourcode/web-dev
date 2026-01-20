/*syntax
element.addEventListener("eventName", function(){
console.log("Action")
})
*/
let p = document.querySelector("p");
p.addEventListener("click", function () {
  p.style.backgroundColor = "Green";
  p.style.color = "white";
});
/*
there are one keyword removeEventListener same as addEventListener
*/

// fetching data from input
let inp = document.querySelector("input");
inp.addEventListener("input", function (element) {
  if (element.data !== null) {
    console.log(element.data);
  }
});

let ans = document.querySelector(".selectedtext");
//fetching selected items from ui
let opt = document.querySelector("select");
opt.addEventListener("change", function (element) {
  ans.innerText = `${element.target.value} Selected`;
});

//displaying selected data FROM WHOLE SCREEN
let head = document.querySelector(".heading");
window.addEventListener("keydown", function (element) {
  head.innerText = element.key;
});
