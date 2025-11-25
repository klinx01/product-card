import { cardArray } from "./products-card.js";

// Задание №3
function outputProductCards(сards) {
  const productCardTemplate = document.getElementById('product-card-template');
  const productCardList = document.querySelector('#product-card-list');

  productCardList.innerHTML = "";

  сards.forEach(productCard => {
    const productCardClone = productCardTemplate.content.cloneNode(true);

    productCardClone.querySelector('.product-card-img').src = productCard.img;
    productCardClone.querySelector('.product-card-category').textContent = productCard.productCategory;
    productCardClone.querySelector('.product-card-name').textContent = productCard.productName;
    productCardClone.querySelector('.product-card-description').textContent = productCard.productDescription;
    productCardClone.querySelector('.product-card-compound').textContent = productCard.productCompound;
    productCardClone.querySelector('.product-card-price-label').textContent = productCard.productsPriceLabel;
    productCardClone.querySelector('.product-card-price').innerHTML = productCard.productsPrice;

    const compoundItems = productCardClone.querySelector('.product-card-compound-items');
    compoundItems.innerHTML = productCard.productCompoundItems
      .map(item => `<li>${item}</li>`)
      .join("");

    productCardList.appendChild(productCardClone);
  });
}

// Задание №4
const productCardTitles = cardArray.reduce((acc, title) => {
  acc.push(title.productName);
  return acc;
}, []);

const divisionSigns = productCardTitles.join('; ');
console.log(divisionSigns);

// Задание №5
const productCardDescription = cardArray.reduce((acc, card) => {
  const titleToDescription = { [card.productName]: card.productDescription };
  acc.push(titleToDescription)
  return acc;
}, [])

console.log(productCardDescription)

// Задание №6
const cardSelection = () => {
  const question = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(question);


  if ((numbers) && numbers > 0 && numbers <= cardArray.length) {
    outputProductCards(cardArray.slice(0, numbers));
  } else {
    alert("Введите число от 1 до 5");
  }
};

cardSelection();