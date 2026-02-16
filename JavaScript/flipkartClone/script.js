// // VAR
// console.log("Before initialization " + a);
// var a = 10;
// var a = 20;
// function checking() {
//   var a = 30;
//   console.log("inside the function " + a);
// }
// checking();
// {
//   var a = 40;
//   console.log("inside the block" + a);
// }
// console.log("outside of everything " + a);
// a = 50;
// console.log("reassiging " + a);

// //// Scoped to functions, not blocks
// // Can be redeclared and reassigned
// // Hoisted to the top with undefined value

// // LET

// let a;
// a = 10;
// console.log("Before initialization " + a);
// function checking() {
//   let a = 30;
//   console.log("inside the function " + a);
// }
// checking();
// console.log("outside the function " + a);
// {
//   let a = 40;
//   console.log("inside the block " + a);
// }
// console.log("outside the block " + a);
// console.log("outside of everything " + a);
// a = 50;
// console.log("reassiging " + a);

// // Scoped to blocks ( {} )
// // Can be reassigned but not redeclared

// //CONST

// const a = 10;
// console.log("after initialization " + a);
// function checking() {
//   const a = 30;
//   console.log("inside the function " + a);
// }
// checking();
// console.log("outside the function " + a);
// {
//   const a = 40;
//   console.log("inside the block " + a);
// }
// console.log("outside the block " + a);
// console.log("outside of everything " + a);
// // Scoped to blocks
// // Cannot be reassigned or redeclared
// // Value must be assigned at declaration

//Function declaration
function add() {
  console.log("Radhe Radhe");
}
add();

//function Expression
const fun = function sub() {
  console.log("Radha ji Maharani");
};
fun();

//arrow funcion
const fun1 = () => {
  console.log("Govind");
};
fun1();

//spread operator
function abcd(...v1) {
  console.log();
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9);

//defoult parameters
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));

//we can treat functions as first class citizens in javascript mean we can use functions as values
function greet(value) {
  console.log(value);
  value(); //calling the function passed as an argument
}
greet(function () {
  console.log("Hello World");
});

//function returning function
function outer() {
  console.log("outer function calling");
  return function inner() {
    console.log("Inner function called");
  };
}
outer(); // calling outer function
outer()(); // calling inner function

//closures function
function counter() {
  let count = 12;
  console.log(count);
  return function () {
    count = count + 1;
    console.log(count);
  };
}
counter(); //12
counter()(); //13

//legical functions
function f1() {
  console.log("Function A");
  let a = 10;
  function f2() {
    console.log("Function B");
    let b = 20;
    function f3() {
      console.log("Function C");
      let c = 30;
      console.log(a + b + c);
    }
  }
}

f1(); //Function A
// f1()(); //cant becoz f1 doesnt return anything but still f1 is called
// f1().f2(); //cant becoz f2 is not accessible outside f1
// f1().f2().f3(); //cant becoz f3 is not accessible outside f2

//to access f2 and f3 we need to return them
function f11() {
  console.log("Function A");
  let a = 10;
  return function f22() {
    console.log("Function B");
    let b = 20;
    return function f33() {
      console.log("Function C");
      let c = 30;
      console.log(a + b + c);
    };
  };
}
f11(); //Function A
f11()(); //Function A Function B
f11()()(); //Function A Function B Function C 60

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed");
})();

// Discount calculator using closures
function discountcalculator(discount) {
  console.log(discount);
  return function (price) {
    let ans = price - (price * discount) / 100;
    return ans;
  };
}
discountcalculator(10); // returns a function that calculates 10% discount
let ans = discountcalculator(10)(500); // returns 450
console.log(ans);
let ans2 = discountcalculator(20);
console.log(ans2(500)); // returns 400
