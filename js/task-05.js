const getNameValue = document.getElementById('name-output');
// console.log(getNameValue);
const getInputValue = document.getElementById('name-input');
// console.log(inputValue.value);

const changeInput = function(event){
    let value = getInputValue.value;
    if (value === '') {
        getNameValue.textContent = 'незнакомец';
     } else{
        getNameValue.textContent = value;
     }
}
getInputValue.addEventListener('input', changeInput)
