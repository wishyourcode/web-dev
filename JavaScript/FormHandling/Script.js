let nam = document.querySelector("#name");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let area = document.querySelector("#textarea");
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (nam.value.length < 5) {
    console.log("name length should be greater than 5");
  }
});
