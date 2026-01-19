/*==============================
================================
================================*/
//change the inner data and styling them
//1,select the element
let h1 = document.querySelector("h1");
//2. change the inner text
// innertext change the only data that are currently visible on the display
// if there any any data that is hidden by css properties
// that data will not be change by innertext
// but if we are using innerContent then complete data will be change
//  does not matter you had hide then using css like display none
//  and all complete data will be changes
h1.innerText = "Radha Radha";
//3. style them
h1.style.color = "white";
h1.style.backgroundColor = "maroon";

/*==============================
================================
================================*/
//steps to add element
//1. create element
let img = document.createElement("img");
//2. set the proprties
img.setAttribute(
  "src",
  "https://plus.unsplash.com/premium_photo-1671580397013-3ad683580e7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
);
//3.select div where want to push element allways have to select parent
let logo = document.querySelector(".logo");
//4. push it
logo.prepend(img);
img.classList.add("logo");

/*==============================
================================
================================*/
//steps to remove element
///1. select element want to remoove select parents
let ul = document.querySelector("ul");
//2.select child that want to remove
let li = document.querySelector("li");
//3. remove it
ul.removeChild(li);

/*==============================
================================
================================*/
//add class to the items

//1.select items
let liItem = document.querySelectorAll("ul li:nth-child(2n)");
console.log(liItem);
//2.add class
liItem.forEach(function (item) {
  item.classList.add("highlight");
});
