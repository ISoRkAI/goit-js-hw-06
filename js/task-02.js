const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const ingredientItem = document.createElement('li');
ingredientItem.classList.add('item');
ingredientItem.textContent = "Potatoes";
const ingredientItemTwo = document.createElement('li');
ingredientItemTwo.classList.add('item');
ingredientItemTwo.textContent = "Mushrooms";
const ingredientItemThree = document.createElement('li');
ingredientItemThree.classList.add('item');
ingredientItemThree.textContent = "Garlic";
const ingredientItemFour = document.createElement('li');
ingredientItemFour.classList.add('item');
ingredientItemFour.textContent = "Tomatos";
const ingredientItemFive = document.createElement('li');
ingredientItemFive.classList.add('item');
ingredientItemFive.textContent = "Herbs";
const ingredientItemSix = document.createElement('li');
ingredientItemSix.classList.add('item');
ingredientItemSix.textContent = "Condiments";
list.append(ingredientItem, ingredientItemTwo, ingredientItemThree, ingredientItemFour, ingredientItemFive, ingredientItemSix)