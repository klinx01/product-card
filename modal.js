import { Form, regForm } from './form.js';

export class Modal {
  constructor(modalOpenBtn, modal, overlay, modalCloseBtn) {
    this.modal = document.querySelector(modal);
    this.overlay = document.querySelector(overlay);
    this.modalOpenBtn = document.querySelector(modalOpenBtn);
    this.modalCloseBtn = document.querySelector(modalCloseBtn);
    this.registrationData = null;
    this.currentUser = null;
    this.modalClose();
  }

  modalOpen() {
    this.modalOpenBtn.addEventListener('click', () => {
      this.modal.classList.add('modal-showed');
      this.overlay.classList.add('overlay-showed');
    });
  }

  modalClose() {
    this.modalCloseBtn.addEventListener('click', () => {
      this.modal.classList.remove('modal-showed');
      this.overlay.classList.remove('overlay-showed');
    });
  }

    isOpen() {
  return this.modal.style.display === "block";
  }

  authorize() {
    const authForm = new Form('#modal-form');
    authForm.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const authData = authForm.getValues();
      if (
        this.registrationData &&
        this.registrationData.userLogin === authData.userLogin &&
        this.registrationData.userPassword === authData.userPassword
      ) {
        alert('Проверка пройдена!');
        this.currentUser = { ...this.registrationData, lastLogin: new Date() };
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');
        authForm.reset();
      } else {
        alert('Неверный логин или пароль');
      }
    });
  }

  checkReg() {
    regForm.form.addEventListener('submit', (reg) => {
      reg.preventDefault();
      const registration = regForm.getValues();
      registration.createdOn = new Date();
      if (registration.userPassword === registration.confirmPassword) {
        alert('Регистрация прошла успешно');
        this.setRegistrationData(registration);
        regForm.reset();
      } else {
        alert('Пароли не совпадают');
      }
      console.log(registration);
    });
  }

  setRegistrationData(data) {
    this.registrationData = data;
  }
}

const modal = new Modal('#modal-open', '#modal', '#overlay', '#modal-close');
modal.modalOpen();
modal.authorize();
modal.checkReg();

