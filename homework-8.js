import { productCards } from "./products-card.js";

// Задание №3
function outputProductCards(сards) {
  const productCardTemplate = document.getElementById('product-card-template');
  const productCardList = document.querySelector('#product-card-list');

  productCardList.innerHTML = "";

  сards.forEach(productCard => {
    const productCardClone = productCardTemplate.content.cloneNode(true);

    productCardClone.querySelector('.product-card-img').src = productCard.img;
    productCardClone.querySelector('.product-card-category').textContent = productCard.category;
    productCardClone.querySelector('.product-card-name').textContent = productCard.name;
    productCardClone.querySelector('.product-card-description').textContent = productCard.description;
    productCardClone.querySelector('.product-card-price').innerHTML = `${productCard.price} &#8381;`;

    const productCompoundItems = productCardClone.querySelector('.product-card-compound-items');
    productCompoundItems.innerHTML = productCard.compoundItems
      .map(item => `<li>${item}</li>`)
      .join("");

    productCardList.appendChild(productCardClone);
  });
}

// Задание №4
const productCardTitles = productCards.reduce((acc, title) => {
  acc.push(title.name);
  return acc;
}, []);

const divisionSigns = productCardTitles.join('; ');
console.log(divisionSigns);

// Задание №5
const productCardDescription = productCards.reduce((acc, card) => {
  const titleToDescription = { [card.name]: card.description };
  acc.push(titleToDescription)
  return acc;
}, [])

console.log(productCardDescription)

// Задание №6
const showCards = () => {
  const question = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(question);

  if ( numbers > 0 && numbers <= productCards.length) {
    outputProductCards(productCards.slice(0, numbers));
  } else {
    alert("Введите число от 1 до 5");
  }
};

showCards()