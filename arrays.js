// arrays in js
//store dissimilar elements
const demoArray = [10, 20, "goti", "moti"];
console.log(demoArray);

//literal syntax
const pNames = ["realme", "LG", "vivo", "samsung"];
// console.log(pNames);

//Object syntax
let prices = new Array(20000, 30000, 40000, 50000);
// console.log(prices);

//To get values
console.log(pNames[4]);

//for of
for (var i of pNames) {
  console.log(i);
}

//for in
for (var i in pNames) {
  console.log(pNames[i]);
}

let values = pNames.forEach((val) => {
  console.log(val);
});

//to arr (push,append,unshift,splice)
pNames.push("one plus");
console.log(pNames);
//unshift
pNames.unshift("poko");
console.log(pNames);
//splice
pNames.splice(2, 0, "moto", "oppo");
console.log(pNames);

//to delete(pop,shift,splice)
//pop()
pNames.pop();
console.log(pNames);
//Shift()
pNames.shift();
console.log(pNames);
//splice
pNames.splice(4, 1);
console.log(pNames);
// //delete
// delete pNames[1];
// console.log(pNames);
//sort
console.log(pNames.sort());
console.log(prices.sort());
//reverse sort
console.log(pNames.reverse());
console.log(prices.reverse());
//to update
pNames[3] = "nokia";
console.log(pNames);

//concatenation
let pNames1 = ["Realmi", "apple"];
console.log(pNames.concat(pNames1));
//spread operator
let productNames = [...pNames, ...pNames1];
console.log(productNames);

//Array Advanced Methods
let sum = prices.reduce((tot, val) => {
  return tot + val;
});
console.log(sum);

//map
let offerPrice = prices.map((val) => {
  return val - 2000;
});
console.log("offer price:" + offerPrice);
