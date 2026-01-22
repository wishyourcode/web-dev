//store kaise kare
localStorage.setItem("name", "vishal mishra");
localStorage.setItem("age", "22");
localStorage.setItem("city", "Mumbai");

let data = document.querySelector("h1");
console.log(data);

//data fetch kaise kare
data.innerText = localStorage.getItem("name");
localStorage.getItem("age");
localStorage.getItem("city");

//data update kaise kare
localStorage.setItem("name", "Piyush Mishra");
data.innerText = localStorage.getItem("name");

//data delete kaise kare
localStorage.removeItem("age");

//clear all data
localStorage.clear();
