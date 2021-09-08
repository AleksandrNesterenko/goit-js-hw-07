// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.
const getInputValue = document.getElementById('font-size-control');
const getTextValue = document.getElementById('text');

getInputValue.addEventListener('input',()=>{
    getTextValue.style.fontSize = `${getInputValue.value}px`;
    console.log(getTextValue.style.fontSize)
})