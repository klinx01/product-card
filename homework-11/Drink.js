export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Название напитка: ${ this.name }, Размер: ${ this.size }, Стоимость: ${ this.price }, Температура: ${ this.#temperature }`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    this.#temperature = value;
  }

  #makeDrink() {
    console.log(`Ваш ${ this.name } сейчас готовится баристой`);
  }

  serve() {
    this.#makeDrink();
    console.log(`Ваш ${ this.name } подан`);
  }
}