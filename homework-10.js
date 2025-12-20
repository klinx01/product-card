// Задание №3

class Headphones {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  showPurchaseinfo() {
    console.log(`Вы успешно приобрели ${this.brand} ${this.model} за ${this.price}`)
  }
};

const headphones = new Headphones('Logitech', 'G335', '50$')

class WirelessHeadphones extends Headphones {
  constructor(wireless, brand, model, price) {
    super(brand, model, price)
    this.wireless = wireless;
  }

  showInfo() {
    console.log(`Вышли новые ${this.wireless} наушники ${this.brand} ${this.model}, стоимостью ${this.price}`)
  }};

const wirelessHeadphones = new WirelessHeadphones('Безпроводные', 'Beoplay', 'H95', '1000$');
headphones.showPurchaseinfo();
wirelessHeadphones.showInfo();
