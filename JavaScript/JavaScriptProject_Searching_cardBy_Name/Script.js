let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector(".main");
let parentcard = document.querySelector(".parentcard");

let users = [
  {
    name: "Amit Sharma",
    designation: "Software Engineer",
    info: "Specializes in Java and backend system development",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1669828829538-a96fc4ed4025?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Neha Verma",
    designation: "UI Designer",
    info: "Expert in UI/UX design and prototyping",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1669828828802-857e414fd4b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
  },
  {
    name: "Rahul Mehta",
    designation: "Backend Developer",
    info: "Works on REST APIs and database optimization",
    imgLink:
      "https://media.istockphoto.com/id/164653535/photo/house-in-the-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=g4x2NveaygMlDRVtWaaXYJEDc6owxXrR7KMIt-lC2BA=",
  },
  {
    name: "Pooja Singh",
    designation: "HR Manager",
    info: "Handles recruitment and employee engagement",
    imgLink:
      "https://media.istockphoto.com/id/1455723388/photo/aerial-view-of-a-winter-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=iAnnQujZ7xCyvU4S5wSC3MZOS75Nqq5ExL9jrmHFXWo=",
  },
  {
    name: "Karan Patel",
    designation: "Project Manager",
    info: "Manages project timelines and client coordination",
    imgLink:
      "https://images.unsplash.com/photo-1601971080428-9233d1751f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Sneha Iyer",
    designation: "QA Engineer",
    info: "Responsible for manual and automation testing",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1673348411640-3eb259818ab5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rohit Jain",
    designation: "DevOps Engineer",
    info: "Maintains CI/CD pipelines and cloud infrastructure",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1672359654135-97de61540157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Anjali Gupta",
    designation: "Business Analyst",
    info: "Analyzes business requirements and data insights",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1673843714068-3d98a4b38544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  },
  {
    name: "Vikram Rao",
    designation: "System Architect",
    info: "Designs scalable system architectures",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1671039660417-4245414f202d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
  },
  {
    name: "Priya Nair",
    designation: "Product Owner",
    info: "Defines product vision and feature priorities",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1672764022715-ab88734a7a5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    let card = document.createElement("div");
    card.classList.add("card");
    let detailed = document.createElement("div");
    detailed.classList.add("detailed");
    let img = document.createElement("img");
    img.setAttribute("src", user.imgLink);
    let h1 = document.createElement("h1");
    h1.textContent = user.name;
    let h3 = document.createElement("h3");
    h3.textContent = "Designation : " + user.designation;
    let p = document.createElement("p");
    p.textContent = user.info;
    detailed.appendChild(h1);
    detailed.appendChild(h3);
    detailed.appendChild(p);
    card.appendChild(img);
    card.appendChild(detailed);
    parentcard.appendChild(card);
  });
}

showUsers(users);

let search = document.querySelector("#search");
search.addEventListener("input", function () {
  let newUser = users.filter((user) => {
    return user.name.startsWith(search.value);
  });
  parentcard.innerHTML = "";
  showUsers(newUser);
});
