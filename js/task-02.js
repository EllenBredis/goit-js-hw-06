const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const inridientsItem= document.querySelector('#ingredients')

// const ingredientsEl= ingredients.map(option=>{
// const ingredientsList= document.createElement("li");
// ingredientsList.textContent=option;
// ingredientsList.classList.add('item');
// return ingredientsList;
// });
// console.log(ingredientsEl);

// inridientsItem.append(...ingredientsEl);


const makeIngredientsEl=options=>{
return options.map(option=>{
const ingredientsList= document.createElement("li");
ingredientsList.textContent=option;
ingredientsList.classList.add('item');
return ingredientsList;
  });
};
const ingredientsEl= makeIngredientsEl(ingredients);
inridientsItem.append(...ingredientsEl);