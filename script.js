function functionRedirect() {
  getValues();
  clearInputs();
}

function getValues() {
  let fullName = document.querySelector('[name="fname"]').value;
  console.log(fullName);
  let birthDate = document.querySelector('[name="bdate"]').value;
  console.log(birthDate);
  let sexType = document.querySelector('[name="sex"]').value;
  console.log(sexType);
}

function clearInputs() {
  document.querySelector('[name="fname"]').value = "";
  document.querySelector('[name="bdate"]').value = "";
  document.querySelector('[name="sex"]').value = "";
}

let cadastrados = new Array();
let I = 0;
