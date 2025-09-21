const generate = document.querySelector("#generate");
const btnNew = document.querySelector("#btn-new");
const btnCancel = document.querySelector("#btn-cancel");

generate.classList.add("hidden");

btnNew.addEventListener('click', () => {
  generate.classList.remove("hidden");
});

btnCancel.addEventListener('click', () => {
  generate.classList.add("hidden");
});
