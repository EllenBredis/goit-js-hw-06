function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const amountBoxes= document.querySelector('input')
const boxesNew= document.querySelector('#boxes')
const createBtn= document.querySelector('[data-create]')
const destroyBtn= document.querySelector('[data-destroy]')


createBtn.addEventListener('click', e => createBoxes(Number(amountBoxes.value)));

function createBoxes(amount) {
const arrayBox = [];
for(let i = 0; i < amount; i += 1) {
 const boxEl = document.createElement('div');
 boxEl.style.width = `${30 + i * 10}px `;
 boxEl.style.height = `${30 + i * 10}px `;
 boxEl.style.backgroundColor = getRandomHexColor();
 arrayBox.push(boxEl);
}
boxesNew.append(...arrayBox);
boxesNew.style.display = "flex";
boxesNew.style.flexDirection = "row";
boxesNew.style.gap = "10px";
boxesNew.style.alignItems= "flex-end"

}

destroyBtn.addEventListener('click', deleteBoxes);

function deleteBoxes(event) {
  boxesNew.innerHTML = "";
}
