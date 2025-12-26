export class Modal {
  constructor(modal, overlay) {
    this.modal = document.querySelector(modal);
    this.overlay = document.querySelector(overlay);
  }

  showModal() {
      this.modal.classList.add('modal-showed');
      this.overlay.classList.add('overlay-showed');
  };

  closeModal() {
      this.modal.classList.remove('modal-showed');
      this.overlay.classList.remove('overlay-showed');
  };

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }
}