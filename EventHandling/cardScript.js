let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector(".main");
let parentcard = document.querySelector(".parentcard");

form.addEventListener("submit", function (element) {
  element.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");
  let detailed = document.createElement("div");
  detailed.classList.add("detailed");
  let img = document.createElement("img");
  img.setAttribute("src", input[3].value);
  let h1 = document.createElement("h1");
  h1.textContent = input[0].value;
  let h3 = document.createElement("h3");
  h3.textContent = "Designation" + input[1].value;
  let p = document.createElement("p");
  p.textContent = input[2].value;
  detailed.appendChild(h1);
  detailed.appendChild(h3);
  detailed.appendChild(p);
  card.appendChild(img);
  card.appendChild(detailed);
  console.dir(card);
  parentcard.prepend(card);
  form.reset();
});
