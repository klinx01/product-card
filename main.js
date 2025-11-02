// покраска всех карточек

const productCards = document.querySelectorAll(".card-container");
const changeColorAllCardButton = document.querySelector("#change-all-card-color");
const redColorHash = "rgba(219, 12, 12, 1)";
const purpleColorHash = "rgba(165, 34, 137, 0.82)";

changeColorAllCardButton.addEventListener("click", () => {
  productCards.forEach((cards) => cards.style.backgroundColor = redColorHash);
})

// покраска первой карточки

const firstProductCard = document.querySelector(".card-container");
const changeColorFirstCardButton = document.querySelector("#change-first-card-color");

changeColorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = purpleColorHash;
})

// открыть гугл

const openGoogleButton = document.querySelector("#open-page-google");

openGoogleButton.addEventListener("click", openGoogle)

function openGoogle () {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com")
  }
}

// вывод консоль лог

const outPutLogButton = document.querySelector("#output-console-log");

outPutLogButton.addEventListener("click", () => outputConsoleLog("старыйбох"))

function outputConsoleLog(message) {
  alert(message)
  console.log(message) 
}

// надпись при наведении на заголовок выводилась в консоль лог

const outPutTitleLog = document.getElementById("title-ouptout-log");

outPutTitleLog.addEventListener("mouseover", () => {
console.log(outPutTitleLog.textContent)
})

// смена цвета кнопки при нажатии

const changeButtonColor = document.getElementById("change-button-color");

changeButtonColor.addEventListener("click", () => {
  changeButtonColor.classList.toggle("yellow")
  changeButtonColor.classList.toggle("black");
})