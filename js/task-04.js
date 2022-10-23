// const refs={
//     incrBtn:document.querySelector('[data-action = "increment"]'),
//     decrBtn:document.querySelector('[data-action = "decrement"]'),
//     counterValue:document.querySelector('#value')
// };
// console.log(refs.incrBtn.textContent);
// console.log(refs.decrBtn.textContent);
// console.log(refs.counterValue.textContent);

// const incrValue = () =>  {
//        refs.counterValue.textContent = Number(refs.counterValue.textContent)+parseInt(refs.incrBtn.textContent)
     
// };

// refs.incrBtn.addEventListener('click', incrValue);

// const decrValue = () =>  {
//         refs.counterValue.textContent = Number(refs.counterValue.textContent)+parseInt(refs.decrBtn.textContent)
// };
// refs.decrBtn.addEventListener('click', decrValue);

let counterValue = 0;

const refs={
    incrBtn:document.querySelector('[data-action = "increment"]'),
    decrBtn:document.querySelector('[data-action = "decrement"]'),
    counterValue:document.querySelector('#value')
};
console.log(refs.incrBtn.textContent);
console.log(refs.decrBtn.textContent);
console.log(refs.counterValue.textContent);

const incrValue = () =>  {
        counterValue += Number(refs.incrBtn.textContent);
    value.textContent = counterValue
};
refs.incrBtn.addEventListener('click', incrValue);


const decrValue = () =>  {
        counterValue += Number(refs.decrBtn.textContent);
    value.textContent = counterValue
};
refs.decrBtn.addEventListener('click', decrValue);