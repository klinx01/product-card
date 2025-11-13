// Задание №3, создать объект на основе личных данных

const personalInfo = {
  name: "Вадим",
  age: 17,
  surname: "Коротнян",
  mail: "klinx294@gmail.com",
  job: "Frontend Developer",
  country: "Украина",
  city: "Одесса",
  relationshipStatus: "Не женат",
  zodiacSign: "Дева"
};

// Задание №4, создать объект который хранит данные об автомобиле

const carInfo = {
  brand: "Audi",
  model: "Audi R8",
  yearOfManufacture: 2006,
  color: "white",
  transmission: "Механическая"
};

carInfo.owner = personalInfo;

console.log(carInfo)

// Задание №5, написать функцию которая проверяет макс. скорость в объекте

function checkMaxSpeed(car) {
  if (!car.hasOwnProperty("maxSpeed")) {
    car.maxSpeed = 340;
  }
};

checkMaxSpeed(carInfo);
console.log(carInfo.maxSpeed);

// Задание №6, Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение

function showProperty(object, key) {
  console.log(`${key} ${object[key]}`)
};

showProperty(personalInfo, "name");
showProperty(personalInfo, "age");

// Задание №7, Создать массив, который содержит названия продуктов 

const products = ["Творог", "Яблоко", "Майонез", "Хлеб", "Сметана"]

console.log(products)

// Задание №8, Создать массив состоящий из объектов

const books = [
  {
    title: "Слепой инстинкт",
    yearOfManufacture: 2012,
    author: "Винкельман Андреас",
    coverСolor: "Чёрный, Серый, Крансный",
    genre: "Современная зарубежная проза"
  },
  {
    title: "Три товарища",
    yearOfManufacture: 1936,
    author: "Эрих Мария Ремарк",
    coverСolor: "Серый",
    genre: "Драма"
  },
  {
    title: "Пикник на обочине",
    yearOfManufacture: 1972,
    author: "Аркадий и Борис Стругацкие",
    coverСolor: "Тёмно-зелёный",
    genre: "Научная фантастика"
  },
  {
    title: "Gone Girl",
    yearOfManufacture: 2012,
    author: "Gillian Flynn",
    coverСolor: "Чёрный, Белый",
    genre: "Детектив, Психологический триллер"
  }
];

books.push({
  title: "Думай медленно… решай быстро",
  yearOfManufacture: 2011,
  author: "Даниэль Канеман",
  coverСolor: "Белый, Синий",
  genre: "Психология"
});

console.log(books)

// Задание №9 Создать еще один массив в котором объеденяем другие массивы

const starWarsBooks = [
  {
    title: "Траун",
    yearOfManufacture: 2017,
    author: "Тимоти Зан",
    coverСolor: "Синий, Белый, Чёрный",
    genre: "Научная фантастика, военная стратегия"
  },
  {
    title: "Темный ученик",
    yearOfManufacture: 2015,
    author: "Кристи Голден",
    coverСolor: "Чёрный, Красный, Серый",
    genre: "Драма, экшен, философия"
  },
  {
    title: "Потерянные звёзды",
    yearOfManufacture: 2015,
    author: "Клаудия Грей",
    coverСolor: "Серый, Синий",
    genre: "Роман, приключения, драма"
  },
  {
    title: "Кеноби",
    yearOfManufacture: 2013,
    author: "Джон Джексон Миллер",
    coverСolor: "Коричневый, Золотой",
    genre: "Вестерн, философия, приключения"
  }
];

const allBooks = [...books, ...starWarsBooks]

console.log(allBooks)

// Задание №10 Написать функцию, которая принимает массив сущностей с задания №9, и в зависимости от года выпуска книги устанавливаем true или false

function markRarityByYear(bookArray) {
  return bookArray.map(book => ({
    ...book,
    isRare: book.yearOfManufacture > 2000
  }));
}

const addRareBooks = markRarityByYear(allBooks);
console.log(addRareBooks);