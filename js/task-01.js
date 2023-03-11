const liElement = document.querySelectorAll("h2");

console.log(`Number of categories: ${liElement.length}`);

liElement.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
