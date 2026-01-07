//callback function demo
console.log("hai");
let prices = [20000, 30000, 40000, 50000];
//blocking function-synchronus
const newprices = prices.filter((val) => {
  return val > 20000;
});
console.log(newprices);
console.log("hello world");
/**note:synchronus execution
 * line-by-line
 */
