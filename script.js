//redirect to other functions
function functionRedirect() {
  invokeConstructor(getValues());
  clearInputs();
  updateRegisteredList();
  I++;
  updateMessage();
}

//get user inputs
function getValues() {
  let userInformation = new Array(3);
  let fullName = document.querySelector('[name="fname"]').value;
  userInformation[0] = fullName;
  let birthDate = document.querySelector('[name="bdate"]').value;
  userInformation[1] = birthDate;
  let sexType = document.querySelector('[name="sex"]:checked').value;
  userInformation[2] = sexType;
  return userInformation;
}

//clear user inputs
function clearInputs() {
  document.querySelector('[name="fname"]').value = "";
  document.querySelector('[name="bdate"]').value = "";
  document.querySelectorAll('[name="sex"]')[0].checked = false;
  document.querySelectorAll('[name="sex"]')[1].checked = false;
}

let cadastrados = new Array();
let I = 0;
function invokeConstructor(userInformation) {
  cadastrados[I] = new Cadastro(
    userInformation[0],
    userInformation[1],
    userInformation[2]
  );
}

//constructor
function Cadastro(name, birth, sex) {
  this.name = name;
  this.birth = adjustingBirth.call(this, birth);
  this.sex = sex;
}
function adjustingBirth(birth) {
  year = `${birth[0]}${birth[1]}${birth[2]}${birth[3]}`;
  month = `${birth[5]}${birth[6]}`;
  day = `${birth[8]}${birth[9]}`;
  birthInternational = `${day}/${month}/${year}`;
  return birthInternational;
}
//number of registereds and message relative to show/hide list
function updateMessage() {
  document.querySelector("#message").innerText =
    "Total de usuários cadastrados: " + I;
  document.querySelector("#message2").style.display = "block";
}
function updateRegisteredList() {
  document.querySelector(
    "#userlist"
  ).innerHTML += ` Nome: <strong>${cadastrados[I].name}</strong> | Nascimento(DD/MM/AAAA): <strong>${cadastrados[I].birth}</strong> | Sexo: <strong>${cadastrados[I].sex}</strong><BR>`;
}
let slider = document.querySelector("#showdiv");

slider.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("#userlist").style.display = "block";
  } else {
    document.querySelector("#userlist").style.display = "none";
  }
});
