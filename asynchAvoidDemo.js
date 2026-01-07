//Promises demo
const movieResult = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("Good Movie");
    } else {
      reject("Boss waste of our Time!...");
    }
  });
};
//To call Async await methods
const result = async () => {
  try {
    const res = await movieResult();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
result();
