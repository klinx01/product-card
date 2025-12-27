import { Juice } from './Juice.js';
import { Tea } from './Tea.js';
import { Coffee } from './Coffee.js';

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе: ${ this.name }, находится по адресу: ${ this.location }`;
  }

  orderDrink(drink) {
    console.log(`Вы заказали: ${ drink.name }`);
    drink.serve();
  }
}

const cafe = new Cafe('Пумпурум', 'там-то там-то');
const tea = new Tea('Чай', '250 ml', '40₴', '75°C', 'Зелёный');
const juice = new Juice('Мультифруктовый сок', '400 ml', '100₴', '0°C', 'Манго + ананас + маракуйя');
const coffee = new Coffee('Обычный эспрессо', '30 ml', '60₴', '70°C', 'Соевое', 'Робуста');

cafe.orderDrink(tea);
cafe.orderDrink(juice);
cafe.orderDrink(coffee);
