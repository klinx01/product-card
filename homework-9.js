// Задание №4

const emailForm = document.querySelector('#email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

// Задание №5-6

let saveRegistration = {};
const registrationForm = document.querySelector('#registration-form')
registrationForm.addEventListener('submit', (reg) => {
  reg.preventDefault()
  const checkPassword = reg.target;
  const regFormData = new FormData(checkPassword);
  const registration = Object.fromEntries(regFormData.entries());
  registration.createdOn = new Date();
  saveRegistration = registration;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;
  password === confirmPassword ? alert('Регистрация прошла успешно') : alert('Пароли не совпадают')
  console.log(registration)
})

// Задание №7-8

const modalOpen = document.querySelector('#modal-open');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const modalClose = document.querySelector('#modal-close');
modalOpen.addEventListener('click', () => {
  overlay.classList.add('overlay-showed');
  modal.classList.add('modal-showed');
});

modalClose.addEventListener('click', () => {
  overlay.classList.remove('overlay-showed');
  modal.classList.remove('modal-showed');
});

// Задание №9-10

let currentUser = undefined
const modalForm = document.querySelector('#modal-form');
modalForm.addEventListener('submit', (aut) => {
  aut.preventDefault();
  const autForm = aut.target;
  const autFormData = new FormData(autForm)
  const authentication = Object.fromEntries(autFormData.entries())
  if (saveRegistration.userLogin === authentication.userLogin
  && saveRegistration.userPassword === authentication.userPassword ) {
    overlay.classList.remove('overlay-showed');
    modal.classList.remove('modal-showed');
    alert('Проверка пройдена!');
    currentUser = saveRegistration;
    currentUser.lastLogin = new Date()
  } else {
    alert('Неверный логин или пароль')
   }
})