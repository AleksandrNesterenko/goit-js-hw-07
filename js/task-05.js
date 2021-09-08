const getNameValue = document.getElementById('name-output');
// console.log(getNameValue);
const getInputValue = document.getElementById('name-input');
// console.log(inputValue.value);

function changeInput(event){
    let value = getInputValue.value;
    if (value === '') {
        getNameValue.textContent = 'незнакомец';
     } else{
        getNameValue.textContent = value;
     }
}
getInputValue.addEventListener('input', changeInput)
