class CreatePencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  write(text) {
    let h2 = document.createElement("h2");
    h2.textContent = text;
    h2.style.color = this.color;
    document.body.appendChild(h2);
  }
  erase() {
    document.body.querySelectorAll("h2").forEach(function (Element) {
      console.log("tried to erase");
      Element.remove();
    });
  }
}

let p1 = new CreatePencil("Apsara", "Apsara ", 20, "red");
let p2 = new CreatePencil("Natraj", "Natraj ", 20, "yellow");
let p3 = new CreatePencil("Apsara", "Apsara ", 20, "pink");
p1.write("Radha Rani ji");
p2.erase();
p2.write("Govind");
p3.write("Madhav");
