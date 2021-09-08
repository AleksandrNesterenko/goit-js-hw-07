// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку
//  Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const getBtnRender = document.querySelector('[data-action="render"]');
const getBtnDestroy = document.querySelector('[data-action="destroy"]');
const getBoxes = document.querySelector('#boxes');
const getInputValue = document.querySelector('#controls input');
  
function createRandomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, 
    ${Math.floor( Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)})`;
}
  
function createBoxes(amount) {
const boxesArray = [];
    // console.log(boxesArray);
    let size = 30;
    for (let i = 0; i <= amount-1; i += 1) {
      boxesArray[i] = document.createElement('div');
      boxesArray[i].style.height = `${size}px`;
      boxesArray[i].style.width = `${size}px`;
      boxesArray[i].style.backgroundColor = createRandomColor();
      size += 10;
    }
    getBoxes.append(...boxesArray);
}
  
getBtnRender.addEventListener('click', (event) =>
    {createBoxes(getInputValue.value)}
  );
  
getBtnDestroy.addEventListener('click', (event) => 
    {(getBoxes.innerHTML = '')}
    );