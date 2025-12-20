export class Form {
  constructor(register) {
    this.form = document.querySelector(register);
  }

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}

export const regForm = new Form('#registration-form');