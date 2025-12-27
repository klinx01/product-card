import { Drink } from "./Drink.js";

export class Juice extends Drink {
  constructor(name, size, price, temperature, fruits) {
    super(name, size, price, temperature);
    this.fruits = fruits;
  }

  getInfo() {
    const info = super.getInfo();
    return `${ info }, Фрукты: ${ this.fruits }`;
  }
}