const div = document.querySelector("#controls");
const input = div.querySelector("input");
const creatBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

console.log(div);
console.log(input);
console.log(creatBtn);
console.log(destroyBtn);
console.log(boxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let arr = [];
let boxSize = 30;

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxSize += 10;
    box.style.backgroundColor = getRandomHexColor();
    arr.push(box);
  }
  return arr;
};

// const pushBoxesCollection = () => {
//   createBoxes(input.value);
//   boxes.append(...arr);
//   input.value = 0;
// };

// const destroyBoxes = () => {
//   boxes.innerHTML = "";
//   input.value = 0;
//   arr = [];
//   console.log(arr);
// };

creatBtn.addEventListener("click", (event) => {
  let newBox = createBoxes(input.value);
  boxes.append(...newBox);
  input.value = 0;
  arr = [];
});

const destroyBoxes = () => {
  boxes.innerHTML = "";
  input.value = 0;
  arr = [];
};
destroyBtn.addEventListener("click", (event) => {
  destroyBoxes.call();
});
