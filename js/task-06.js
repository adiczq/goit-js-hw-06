const inputText = document.getElementById("validation-input");
inputText.addEventListener("blur", () => {
  if (inputText.value.length < inputText.getAttribute("data-length")) {
    inputText.classList.add("invalid");
  } else {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  }
});
