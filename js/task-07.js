const sizeControl=document.querySelector('#font-size-control');
const sizeText=document.querySelector('#text');

sizeControl.addEventListener('input', onImputchange);

function onImputchange(event){
 sizeText.style.fontSize = `${event.currentTarget.value}px`;
}
