const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

const change = () => {
  text.style.fontSize = input.value + "px";
};

input.addEventListener("change", change);
