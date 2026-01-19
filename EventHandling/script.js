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
