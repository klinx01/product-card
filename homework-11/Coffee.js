import { Drink } from "./Drink.js";

export class Coffee extends Drink {
  constructor(name, size, price, temperature, milkType, typeGrains) {
    super(name, size, price, temperature);
    this.milkType = milkType;
    this.typeGrains = typeGrains;
  }

  getInfo() {
    const info = super.getInfo();
    return `${ info }, Вид зёрен: ${ this.typeGrains }, Вид молока: ${ this.milkType }`;
  }
}