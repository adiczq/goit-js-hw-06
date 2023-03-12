const value = document.querySelector("#value");
const minus = document.querySelector('[data-action="decrement"]');
const plus = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrease = minus.addEventListener("click", () => {
  value.textContent = --counterValue;
});
const increase = plus.addEventListener("click", () => {
  value.textContent = ++counterValue;
});
