import { Headphones } from './Headphones.js';

export class WirelessHeadphones extends Headphones {
  constructor(wireless, brand, model, price) {
    super(brand, model, price);
    this.wireless = wireless;
  }

  showInfo() {
    console.log(`Вышли новые ${this.wireless} наушники ${this.brand} ${this.model}, стоимостью ${this.price}`);
  }
}