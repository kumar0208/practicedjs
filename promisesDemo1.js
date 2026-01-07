//Promises demo 1
//BUBBLE GAME
const bubbleGame = new Promise((resolve, reject) => {
  let bubble = Math.floor(Math.random() * 10);
  if (bubble > 5) {
    resolve("High Score");
  } else {
    reject("Low Score");
  }
});
// To call promise
bubbleGame
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
