// Задание №3, вывести  в консоль нововости

const city = "Киевe"

function sayCity() {
  console.log(city)
};


let temperature = "17\u00B0"

function sayCityTemperature() {
  console.log(temperature)
};


function news() {
  console.log(`Сейчас в ${city} температура ${temperature} —  градусов по Цельсию`)
};

news()

//Задание №4, сравнить скорость звука с помощью if else

const speedOfSound = 343

function speed(currentSpeed) {
  if (currentSpeed > speedOfSound) {
    console.log("Сверхзвуковая скорость")
  } else {
    console.log("Дозвуковая скорость")
  }
};

speed(394)

// Задание №5, высчитать разницу

const chocopay = "Чокопай"
const priceChokopay = 289

function checkBudget(currentBudget) {
  if (currentBudget > priceChokopay) {
    console.log("Ваш Чокопай приобретён. Спасибо за покупку!")
  } else {
    const difference = priceChokopay - currentBudget
    console.log(`Вам не хватает ${difference}$, пополните баланс`)
  }
};

checkBudget(203)
checkBudget(411)

// Задание №6, создавть 1 функцию

function sayMessage() {
  console.log("я не знаю что можно придумать")
}

sayMessage()

// Задание №7, создать 3 переменные

const telephone = "Телефон"
let currentMonth = "Ноябрь"
let age = "17"