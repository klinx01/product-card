import { Drink } from "./Drink.js";

export class Tea extends Drink {
  constructor(name, size, price, temperature, typeTea) {
    super(name, size, price, temperature);
    this.typeTea = typeTea;
  }

  getInfo() {
    const info = super.getInfo();
    return (`${info}, Вид чая: ${this.typeTea}`);
  }

  serve() {
    super.serve();
  }
}