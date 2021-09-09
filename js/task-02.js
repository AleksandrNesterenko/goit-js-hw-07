const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  const getVariablesContainer = document.querySelector('#ingredients');
  const ingredientsNewArray = [];

  ingredients.forEach(function(ingredient){
    const createIngredientVariables = document.createElement('li');
    createIngredientVariables.textContent = ingredient;
    ingredientsNewArray.push(createIngredientVariables)
  });
  
  getVariablesContainer.append(...ingredientNewArray);
