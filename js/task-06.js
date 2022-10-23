const input=document.querySelector('#validation-input');
console.log(input);

input.addEventListener('blur', onImputBlur)
function onImputBlur(event){
if (event.currentTarget.value.length===6){
input.style.borderColor= '#4caf50';
}
else{
input.style.borderColor= '#f44336';
}
};