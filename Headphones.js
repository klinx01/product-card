export class Headphones {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  showPurchaseInfo() {
    console.log(`Вы успешно приобрели ${this.brand} ${this.model} за ${this.price}`);
  }
}