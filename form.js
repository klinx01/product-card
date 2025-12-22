export class Form {
  constructor(target) {
    this.form = document.querySelector(target);
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