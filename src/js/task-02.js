const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Potatoes
const firstIngrEl = document.createElement('li');
firstIngrEl.textContent = 'Potatoes';
firstIngrEl.classList.add = 'item';

//Mushrooms
const secondIngrEl = document.createElement('li');
secondIngrEl.textContent = 'Mushrooms';
secondIngrEl.classList.add = 'item';

//Garlic
const thirdIngrEl = document.createElement('li');
thirdIngrEl.textContent = 'Garlic';
thirdIngrEl.classList.add = 'item';

//Tomatos
const fourthIngrEl = document.createElement('li');
fourthIngrEl.textContent = 'Tomatos';
fourthIngrEl.classList.add = 'item';

//Herbs
const fifthIngrEl = document.createElement('li');
fifthIngrEl.textContent = 'Herbs';
fifthIngrEl.classList.add = 'item';

//Condiments
const sixthIngrEl = document.createElement('li');
sixthIngrEl.textContent = 'Condiments';
sixthIngrEl.classList.add = 'item';

const listEl = document.querySelector('#ingredients');
listEl.append(firstIngrEl, secondIngrEl, thirdIngrEl, 
	           fourthIngrEl, fifthIngrEl, sixthIngrEl);




