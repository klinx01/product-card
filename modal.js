export class Modal {
  constructor(modalOpenBtn, modal, overlay, modalCloseBtn) {
    this.modal = document.querySelector(modal);
    this.overlay = document.querySelector(overlay);
    this.modalOpenBtn = document.querySelector(modalOpenBtn);
    this.modalCloseBtn = document.querySelector(modalCloseBtn);
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
}