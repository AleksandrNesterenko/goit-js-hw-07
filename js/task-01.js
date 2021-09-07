const amountElementsCategory = document.querySelectorAll('#categories h2');

amountElementsCategory.forEach(function(element){
console.log(`Категория: ${element.textContent}`),
console.log(`Количество элементов: ${element.nextElementSibling.children.length}`)})