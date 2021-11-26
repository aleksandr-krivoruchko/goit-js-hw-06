// Categories
const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);


// Animals

const firstItemEl = document.querySelector('.item');
const listOfFirstItemEl = firstItemEl.querySelectorAll('li');
const titleOfFirstEl = firstItemEl.querySelector('h2');

console.log(`Category: ${titleOfFirstEl.textContent}`);
console.log(`Elements: ${listOfFirstItemEl.length}`);


// Products

const secondItemEl = firstItemEl.nextElementSibling;
const listOfSecondItemEl = secondItemEl.querySelectorAll('li');
const titleOfSecondeEl = secondItemEl.querySelector('h2');

console.log(`Category: ${titleOfSecondeEl.textContent}`);
console.log(`Elements: ${listOfSecondItemEl.length}`);


// Technologies

const thirdItemEl = secondItemEl.nextElementSibling;
const listOfThirdItemEl = thirdItemEl.querySelectorAll('li');
const titleOfThirdEl = thirdItemEl.querySelector('h2');

console.log(`Category: ${titleOfThirdEl.textContent}`);
console.log(`Elements: ${listOfThirdItemEl.length}`);


