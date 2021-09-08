// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const getElementInput = document.getElementById('validation-input');
const inputLength = getElementInput.dataset.length;


function checkValidInput(event){
    console.log(getElementInput.value.length === Number(inputLength))
    if (getElementInput.value.length !== Number(inputLength)){
        getElementInput.classList.add('invalid')
        getElementInput.classList.remove('valid');}
    else {
    getElementInput.classList.add('valid');
    getElementInput.classList.remove('invalid');}
}

getElementInput.addEventListener('blur', checkValidInput);


