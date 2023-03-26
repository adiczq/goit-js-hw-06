const changeBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const text = document.querySelector(".color");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const colorChange = () => {
  text.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
};

changeBtn.addEventListener("click", colorChange);
