//asynchronus nature is non blocking
console.log("first");
//non blocking function
setTimeout(() => {
  console.log("second");
}, 2000);
console.log("third");
