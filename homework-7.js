import { comments } from './comments.js';

// Задание №2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbersArray = numbers.filter(number => number >= 5)

console.log(numbersArray);

// Задание №3

const kitchenAppliances = ['Нож поварской', 'Ложка', 'Вилка', 'Сковорода', 'Кастрюля', 'Чайник']

const appliances = kitchenAppliances.find(appliance => appliance === 'Вилка')

console.log(appliances);

// Задание №4

function reverseArrays(array) {
  return array.reverse()
}

reverseArrays(numbers);
reverseArrays(kitchenAppliances);

console.log(numbers);
console.log(kitchenAppliances);

// Задание №7

const filteredComments = comments.filter(comment => comment.email.includes('.com')
);

console.log(filteredComments);

// Задание №8

const userWithPostId = comments.map(comment => ({ ...comment, postId: comment.id >= 5 ? 2 : 1 }));

console.log(userWithPostId);

// Задание №9

const filteredIdName = comments.map(comment => ({ id: comment.id, name: comment.name }));

console.log(filteredIdName);

// Задание №10

const addedIsInvalid = comments.map(comment => ({ ...comments, isInvalid: comment.body.length > 180 }));

console.log(addedIsInvalid)

// Задание №11

const outputEmail = comments.reduce((acc, user) => {
  acc.push(user.email);
  return acc;
}, []);

console.log(outputEmail);

const outputEmailMap = comments.map(comment => ({ email: comment.email }));

console.log(outputEmailMap);

// Задание №12

const emailList = outputEmailMap.toString()
const emailJoin = outputEmailMap.join('|')

console.log(emailList)
console.log(emailJoin)