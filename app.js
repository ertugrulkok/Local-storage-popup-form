let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let clubInput = document.getElementById("club");

const nameHolder = document.getElementById("name_holder");
const emailHolder = document.getElementById("email_holder");
const phoneHolder = document.getElementById("phone_holder");
const clubHolder = document.getElementById("club_holder");
const clearData = document.getElementById("clear");
const sendBtn = document.getElementById("send");
const resetBtn = document.getElementById("reset");
const form = document.getElementById("form");
const popupForm = document.getElementById("popupForm");
const loggedForm = document.getElementById("logged");

function openForm() {
  popupForm.style.display = "block";
}
function closeForm() {
  popupForm.style.display = "none";
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  clubInput.value = "";
  
}
function closeLogged() {
  location.reload();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

resetBtn.addEventListener("click", () => {
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  clubInput.value = "";
});

sendBtn.addEventListener("click", () => {
  nameInput = nameInput.value;
  localStorage.setItem("name", nameInput);
  nameHolder.innerHTML = localStorage.getItem("name");

  emailInput = emailInput.value;
  localStorage.setItem("email", emailInput);
  emailHolder.innerHTML = localStorage.getItem("email");

  phoneInput = phoneInput.value;
  localStorage.setItem("phone", phoneInput);
  phoneHolder.innerHTML = localStorage.getItem("phone");

  clubInput = clubInput.value;
  localStorage.setItem("club", clubInput);
  clubHolder.innerHTML = localStorage.getItem("club");
  document.getElementById("logged").style.display = "block";
  closeForm();
});
clearData.addEventListener("click", () => {
  localStorage.clear();
  closeLogged();
  location.reload();
  popupForm.style.display = "block";
});
