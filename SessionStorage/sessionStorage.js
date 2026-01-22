let data = document.querySelector("h1");
console.log(data);

//store kaise kare
sessionStorage.setItem("name", "vishal mishra");
sessionStorage.setItem("age", "22");
sessionStorage.setItem("city", "Mumbai");
//data fetch kaise kare
data.innerText = sessionStorage.getItem("name");
sessionStorage.getItem("age");
sessionStorage.getItem("city");
//data update kaise kare
sessionStorage.setItem("name", "Piyush Mishra");
data.innerText = sessionStorage.getItem("name");
//data delete kaise kare
sessionStorage.removeItem("age");
//clear all data
sessionStorage.clear();
