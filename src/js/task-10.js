const refs = {
  input: document.querySelector('#controls>input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  mainBox: document.querySelector('#boxes'),  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let str = "";
  
  for (let i = 0; i < amount; i += 1) {
    let newDiv = `<div style='
    height: ${10*i+30}px ;
    width: ${10*i+30}px ;
      margin-bottom: 10px;
      background-color: ${getRandomHexColor()};
      text-align: center;
      color: #fff;
      '>${i + 1}</div>`;
    
    str += newDiv;
  }
   refs.mainBox.innerHTML = str;
}

refs.btnCreate.addEventListener('click', onBtnCreateBoxes);
refs.btnDestroy.addEventListener('click', onBtnDestroyBoxes);

function onBtnCreateBoxes(event) {
  createBoxes(refs.input.value);
}

function onBtnDestroyBoxes(event) {
  refs.mainBox.innerHTML = '';
}

