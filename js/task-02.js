const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  const getVariablesContainer = document.querySelector('#ingredients');

  ingredients.forEach(function(ingredient){
    const createIngredientVariables = document.createElement('li');
    createIngredientVariables.textContent = ingredient;
    getVariablesContainer.append(createIngredientVariables);
  });
