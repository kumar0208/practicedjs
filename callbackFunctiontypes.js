//anonymous function-callback function as nameless function
let prices = [20000, 30000, 50000, 40000];
const newprices = prices.map((val) => {
  return val - 5000;
});
console.log(newprices);
//callback function as named function
function pushpa() {
  console.log("thaggedhey leyyy...");
}
function panIndiamovie(sukumarmovie) {
  return sukumarmovie;
}
panIndiamovie(pushpa());
