class User {
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.role = "User";
  }
  checkrole() {
    console.log(`your role is ${this.role}`);

    return `your role is ${this.role}`;
  }
  write(text) {
    let h2 = document.createElement("h2");
    h2.textContent = `${this.role} ${this.name}: ${text}`;
    document.body.appendChild(h2);
  }
}
class Admin extends User {
  constructor(name, address, email) {
    super(name, address, email);
    this.role = "Admin";
  }
  remove() {
    let h2 = document.querySelectorAll("h2");
    h2.forEach(function (Element) {
      Element.remove();
    });
  }
}

let u1 = new User("Vishal Mishra", "Sultanpur", "vishalm3101@gmail.com");
u1.write("Hey");
u1.write("hiii");
u1.checkrole();

let u2 = new User("Piyush Mishra", "Sultanpur", "vishalm3101@gmail.com");
u2.write("hello");

let A1 = new Admin("Ankit", "Sultanpur", "vishalm3101@gmail.com");
A1.write("I am Admin");
A1.remove();
