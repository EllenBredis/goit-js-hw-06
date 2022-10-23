
const nameInput = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

// nameInput.addEventListener('input', onInputChange);
// function onInputChange (event) {
//     if (event.currentTarget.value === '') {
//         nameLabel.textContent = 'Anonymous';
//     }
//     else {
//         nameLabel.textContent = event.currentTarget.value
//     }
// };


const onInputChange=(event)=>{
    if (event.currentTarget.value === '') {
        nameLabel.textContent = 'Anonymous';
    }
    else {
        nameLabel.textContent = event.currentTarget.value
    }
};
nameInput.addEventListener('input', onInputChange);