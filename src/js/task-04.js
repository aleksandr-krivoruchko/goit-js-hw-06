const counterEl = document.querySelector('#value');
let counterValue = 0;

const btnDecrementCounterEl = document.querySelector('[data-action="decrement"]');

const btnIncrementCounterEl = document.querySelector('[data-action="increment"]');

btnDecrementCounterEl.addEventListener('click', () => {
	counterValue -= 1;
	counterEl.textContent = counterValue;
})

btnIncrementCounterEl.addEventListener('click', () => {
counterValue += 1;
	counterEl.textContent = counterValue;
})
