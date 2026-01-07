//Multi line string
let dese = `Top college in AP 
More recurements 
Many activities`;
console.log(dese);

//string interpolation
let firstName = "kumar";
let lastName = "kotula";
console.log(`${firstName} ${lastName}`);

//Array destructing
let pNames = ["realme", "LG", "vivo"];
let [Brand1, Brand2, Brand3] = pNames;
console.log(Brand1);
console.log(Brand2);
console.log(Brand3);

//object destruction
const movieInfo = {
  movie: "Bahubali",
  director: "Rajamouli",
  producer: "shobu",
};
let { movie, director, producer } = movieInfo;
console.log(movie);
console.log(director);
console.log(producer);
