// //loops in js
// //using for loop
// for (var i = 1; i <= 10; i++) {
//   console.log("i value:" + i);
// }

// // using while loop
// let j = 1;
// while (j <= 10) {
//   console.log("j value is:" + j);
//   j++;
// }

// //using do while
// let k = 1;
// do {
//   console.log("m value:" + k);
//   k++;
// } while (k <= 10);

//loops in Advanced js
//for in and for of
//these lops are used to get data iterables
//iterables(Array,Object,string)
// let pNames = ["realme", "samsung", "vivo", "one plus", "oppo"];
// for (let names of pNames) {
//   console.log(names);
// }
// for (let n in pNames) {
//   console.log(pNames[n]);
// }

// let empinfo = {
//   eid: 606,
//   ename: "kumar",
//   esalary: 80000,
// };
// for (let info in empinfo) {
//   console.log(empinfo[info]);
// }

let colName = "Vignan";
for (let i of colName) {
  console.log(i);
}
console.log();
for (let j in colName) {
  console.log(colName[j]);
}
