// //Functions in js
// function showMessage() {
//   console.log("Iam Function");
// }
// showMessage();

// //function with parameters
// function sumNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// sumNumbers(10, 20);

// //function with return value
// function mulNumbers(num1, num2) {
//   return num1 * num2;
// }
// console.log("product is:" + mulNumbers(2, 10));

// //new function syntax(ES6)
// //Arrow function
// const arrowDemo = () => {
//   console.log("Arrow function Demo");
// };
// arrowDemo();

// //arrow functoin with parameters
// const addnums = (a, b) => {
//   console.log("Addition is:" + (a + b));
// };
// addnums(10, 20);

// // in a simple way
// const addnums1 = (a, b) => a + b;
// console.log(addnums1(10, 20));

// // arrow function with return a value
// const mulnums1 = (c, d) => c * d;
// let res = mulnums1(10, 20);
// console.log("product value:" + res);

// //Rest parameter
// const show = (a, b, ...c) => {
//   console.log(a, "\n" + b);
//   console.log(c);
// };
// show("hello", "world","hai","haha");

//default parameters
const addNums = (a = 20, b) => a + b;
console.log("sum is:" + addNums(40));
