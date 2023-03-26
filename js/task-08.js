const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", submit);

function submit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Wypełnij wszystkie pola");
  }
  console.log(`Email: ${email.value} , password: ${password.value}`);
  e.currentTarget.reset();
}
