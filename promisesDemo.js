//Promises demo
const movieRating = new Promise((resolve, reject) => {
  let rating = 4.5;
  if (rating > 4) {
    resolve("Good Movie");
  } else {
    reject("Boss waste of our Time!...");
  }
});
// To call promise
movieRating
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
