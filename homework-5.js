// Задание №3, вывести  в консоль нововости

function displayWeatherInfo(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} —  градусов по Цельсию`)
};

displayWeatherInfo("Киевe", "17\u00B0")

//Задание №4, сравнить скорость звука с помощью if else

const SPEED_OF_SOUND = 343

function checkSpeedType(currentSpeed) {
  if (currentSpeed > SPEED_OF_SOUND) {
    console.log("Сверхзвуковая скорость")
  } else {
    console.log("Дозвуковая скорость")
  }
};

checkSpeedType(394)

// Задание №5, высчитать разницу

const productChocopay = "Чокопай"
const ChocopayProductPrice = 289

function buyProductChocopay(currentBudget) {
  if (currentBudget > ChocopayProductPrice) {
    console.log(`Ваш ${productChocopay} приобретён. Спасибо за покупку!`)
  } else {
    const difference = ChocopayProductPrice - currentBudget
    console.log(`Вам не хватает ${difference}$, пополните баланс`)
  }
};

buyProductChocopay(203)
buyProductChocopay(411)

// Задание №6, создавть 1 функцию

function displayMessage() {
  console.log("я не знаю что можно придумать")
}

displayMessage()

// Задание №7, создать 3 переменные

const telephone = "Телефон"
let currentMonth = "Ноябрь"
let age = "17"