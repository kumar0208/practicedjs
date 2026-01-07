function btnResult() {
  alert("Hai");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click", btnResult);

//click logic by using arrow function
const btnResult1 = () => {
  alert("Hello");
};
let btnvalue1 = document.getElementById("demo1");
btnvalue1.addEventListener("click", btnResult1);

//mouse-hover mouse-out logic
let h2val = document.getElementById("sample");
const mousehoverLogic = () => {
  h2val.style.color = "blue";
};
const mouseoutLogic = () => {
  h2val.style.color = "";
};
h2val.addEventListener("mousehover", mousehoverLogic);
h2val.addEventListener("mouseout", mouseoutLogic);
