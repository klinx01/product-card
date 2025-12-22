import { Form } from './Form.js';
import { Modal } from './Modal.js';
import { Headphones } from './Headphones.js';
import { WirelessHeadphones } from './WirelessHeadphones.js';

const emailForm = document.querySelector('#email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

const regForm = new Form('#registration-form');
const authForm = new Form('#modal-form');
const modal = new Modal('#modal-open', '#modal', '#overlay', '#modal-close');
modal.modalOpen();

let registrationData = undefined;
let currentUser = undefined;

const checkReg = () => {
  regForm.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const registration = regForm.getValues();
    registration.createdOn = new Date();
    if (registration.userPassword === registration.confirmPassword) {
      alert('Регистрация прошла успешно');
      setRegistrationData(registration);
      regForm.reset();
    } else {
      alert('Пароли не совпадают');
    }
    console.log(registration);
  });
}

const authorize = () => {
  authForm.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const authData = authForm.getValues();
    if (
      registrationData &&
      registrationData.userLogin === authData.userLogin &&
      registrationData.userPassword === authData.userPassword
    ) {
      alert('Проверка пройдена!');
      currentUser = { ...registrationData, lastLogin: new Date() };
      modal.modal.classList.remove('modal-showed');
      modal.overlay.classList.remove('overlay-showed');
      authForm.reset();
    } else {
      alert('Неверный логин или пароль');
    }
  });
}

const setRegistrationData = (data) => {
  registrationData = data;
}
checkReg();
authorize();

const headphones = new Headphones('Logitech', 'G335', '50$');
headphones.showPurchaseInfo();

const wirelessHeadphones = new WirelessHeadphones('Беспроводные', 'Beoplay', 'H95', '1000$');
wirelessHeadphones.showInfo();
