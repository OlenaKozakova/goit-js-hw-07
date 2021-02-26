console.log(`Task2`);

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');
console.log(ingredientsListRef);

const makeIngredientsItemOption = newIngredients => {
  return newIngredients.map((ingredient, i) => {
    const newItemList = document.createElement('li');
    newItemList.classList.add('list-item');
    newItemList.textContent = `${ingredient}`;
    return newItemList;
  });
};

const ingredientsItem = makeIngredientsItemOption(ingredients);

ingredientsListRef.append(...ingredientsItem);


