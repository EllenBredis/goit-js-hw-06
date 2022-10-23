function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body= document.querySelector('body');
const bodyBgColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener("click", changeBodyColor);

function changeBodyColor(color) {
  body.style.backgroundColor = getRandomHexColor();
  bodyBgColor.textContent = getRandomHexColor();
}