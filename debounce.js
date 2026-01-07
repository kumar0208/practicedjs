//request data gathering logic
let btn = document.getElementById("demo");
let clickres = document.getElementById("simple");
let triggerRes = docoument.getElementById("sample");
//bussiness logic
let clickcount = 0;
let triggercount = 0;
//debounce method logic
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
const debounceRes = debounce(() => {
  triggercount++;
  triggerRes.innerHTML = `triggred:${triggercount}`;
}, 1000);
btn.addEventListener("click", () => {
  clickcount++;
  clickres.innerHTML = `user entered characters 
  ${clickcount}`;
  debounceRes();
});
