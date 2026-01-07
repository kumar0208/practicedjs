let counter = 1; //Globel variable
const counterResult = () => {
  let counter = 0; //local scope
  counter += 1;
  return counter;
};
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());
