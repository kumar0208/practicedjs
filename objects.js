// //Objects in js
// const movieInfo = {
//   movieName: "Akanda2",
//   heroName: "balayya",
//   directorName: "Boya",
// };
// //How to get
// console.log(movieInfo.directorName);
// console.log(movieInfo["heroName"]);
// //for in
// for (var info in movieInfo) {
//   console.log(movieInfo[info]);
// }
// // ES 6+ new features
// //object.keys()
// Object.keys(movieInfo).forEach((key) => {
//   console.log(key);
// });
// // to get only values
// //Object.values()
// Object.values(movieInfo).forEach((val) => {
//   console.log(val);
// });
// //to get key-values
// //object.entries
// Object.entries(movieInfo).forEach((entry) => {
//   console.log(entry[0] + " " + entry[1]);
// });

// //for of
// for (var [key, val] of Object.entries(movieInfo)) {
//   console.log(key + " " + val);
// }

// //Nested Objecd
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };
// console.log(myObj.cars[0].models);
//card object
const placedOrder = {
  products: [
    { pid: 1234, pname: "drone", price: 10000 },
    { pid: 2345, pname: "ac", price: 30000 },
  ],
  shippingAddress: {
    area: "vadlamudi",
    street: "vignan",
    pincode: 522113,
  },
  userInfo: {
    uid: 1001,
    uname: "kumar",
  },
};
console.log(placedOrder.userInfo.uname);
