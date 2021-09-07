const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  ingredients.forEach(function(ingredient){
    const createIngredientVariables = document.createElement('li');
    createIngredientVariables.textContent = ingredient;
    const getVariablesContainer = document.querySelector('#ingredients');
    getVariablesContainer.append(createIngredientVariables);
  });
