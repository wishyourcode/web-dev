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

//steps to remove element

///1. select element want to remoove select parents
let ul = document.querySelector("ul");
//2.select child that want to remove
let li = document.querySelector("li");
//3. remove it
ul.removeChild(li);
