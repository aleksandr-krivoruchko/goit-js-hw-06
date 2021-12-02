function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');


btnEl.addEventListener('click', onBtnChangeColorBody);

function onBtnChangeColorBody (event){
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = `${getRandomHexColor()}`;
}
