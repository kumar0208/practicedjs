//promises chaining
const bookTicket = () => {
  return new Promise((resolve, reject) => {
    resolve("Ticket Booked!... ");
  });
};

const getPopCorn = (mes) => {
  return new Promise((resolve, reject) => {
    resolve(mes + "PopCorn obtained!... ");
  });
};

const getCoke = (mes) => {
  return new Promise((resolve, reject) => {
    resolve(mes + "Coke Obtained!!... ");
  });
};

//To execute
bookTicket()
  .then((result) => {
    return getPopCorn(result);
  })
  .then((result) => {
    return getCoke(result);
  })
  .then((result) => {
    console.log("wanna go to movie?.. " + result);
  })
  .catch((error) => {
    console.log(error);
  });
