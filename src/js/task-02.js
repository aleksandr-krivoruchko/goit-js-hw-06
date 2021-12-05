const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');


// ! по старинке
// let arrayOfIngredients = [];

// for (let i = 0; i < ingredients.length; i++) {
	
// 	const ingrEl = document.createElement('li');
// 	ingrEl.textContent = ingredients[i];
// 	ingrEl.classList.add = 'item';
// 	arrayOfIngredients.push(ingrEl);
// }

// listEl.append(...arrayOfIngredients);


const listOfIngr = ingredients.map(ingr => {
const ingrEl = document.createElement('li');
ingrEl.textContent = ingr;
ingrEl.classList.add = 'item';
return ingrEl;
})

listEl.append(...listOfIngr);