const Ingredient = require('../models/Ingredient');

const ingredientData = [
  {
    amount: 1,
    unit:"teaspoon",
    name: "ground cinnamon",
    recipeId: 1
  },
  {
    amount: .25,
    unit:"teaspoon",
    name: "ground nutmeg",
    recipeId: 1
  },
  {
    amount: 2,
    unit:"tablespoons",
    name: "sugar",
    recipeId: 1
  },
  {
    amount: 4,
    unit:"tablespoons",
    name: "butter",
    recipeId: 1
  },
  {
    amount: 4,
    unit:"whole",
    name: "eggs",
    recipeId: 1
  },
  {
    amount: .25,
    unit:"cup",
    name: "milk",
    recipeId: 1
  },
  {
    amount: .25,
    unit:"teaspoon",
    name: "vanilla extract",
    recipeId: 1
  },
  {
    amount: 8,
    unit:"slices",
    name: "bread",
    recipeId: 1
  },
  {
    amount: .25,
    unit:"cup",
    name: "warm maple syrup",
    recipeId: 1
  },
  {
    amount: 2,
    unit:"whole",
    name: "eggs",
    recipeId: 2
  },
  {
    amount: .25,
    unit:"cup",
    name: "melted butter",
    recipeId: 2
  },
  {
    amount: 2.5,
    unit:"tablespoons",
    name: "sugar",
    recipeId: 2
  },
  {
    amount: .5,
    unit:"cup",
    name: "all-purpose flour",
    recipeId: 2
  },
  {
    amount: .5,
    unit:"cup",
    name: "milk",
    recipeId: 2
  },
  {
    amount: .25,
    unit:"cup",
    name: "water",
    recipeId: 2
  },
  {
    amount: .25,
    unit:"teaspoon",
    name: "vanilla",
    recipeId: 2
  },
  {
    amount: 1,
    unit:"pinch",
    name: "salt",
    recipeId: 2
  },
  {
    amount: 1,
    unit:"pound",
    name: "ground beef",
    recipeId: 3
  },
  {
    amount: 1,
    unit:"whole",
    name: "onion",
    recipeId: 3
  },
  {
    amount: 4,
    unit:"cloves",
    name: "garlic",
    recipeId: 3
  },
  {
    amount: 1,
    unit:"whole",
    name: "green bell pepper",
    recipeId: 3
  },
  {
    amount: 28,
    unit:"ounces",
    name: "canned diced tomatoes",
    recipeId: 3
  },
  {
    amount: 16,
    unit:"ounces",
    name: "tomatoe sauce",
    recipeId: 3
  },
  {
    amount: 6,
    unit:"ounces",
    name: "tomatoe paste",
    recipeId: 3
  },
  {
    amount: 2,
    unit:"teaspoons",
    name: "oregano",
    recipeId: 3
  },
  {
    amount: 2,
    unit:"teaspoons",
    name: "basil",
    recipeId: 3
  },
  {
    amount: 1,
    unit:"teaspoon",
    name: "salt",
    recipeId: 3
  },
  {
    amount: .5,
    unit:"teaspon",
    name: "black pepper",
    recipeId: 3
  },
  {
    amount: .75,
    unit:"cup",
    name: "warm water",
    recipeId: 4
  },
  {
    amount: .25,
    unit:"ounce",
    name: "active dry yeast",
    recipeId: 4
  },
  {
    amount: 1.5,
    unit:"tablespoons",
    name: "barely malt syrup",
    recipeId: 4
  },
  {
    amount: 4.75,
    unit:"cups",
    name: "unbleached bread flour",
    recipeId: 4
  },
  {
    amount: .75,
    unit:"cup",
    name: "lager or pilsner beer",
    recipeId: 4
  },
  {
    amount: 3,
    unit:"tablespoons",
    name: "unsalted butter",
    recipeId: 4
  },
  {
    amount: 1,
    unit:"tablespoon",
    name: "kosher salt",
    recipeId: 4
  },
  {
    amount: .3,
    unit:"cup",
    name: "baking soda",
    recipeId: 4
  },
  {
    amount: 1,
    unit:"large",
    name: "egg",
    recipeId: 4
  },
  {
    amount: 1,
    unit:"tablespoon",
    name: "whole milk",
    recipeId: 4
  },
  {
    amount: 6,
    unit:"cups",
    name: "tap water",
    recipeId: 4
  },
  {
    amount: 10,
    unit:"pounds",
    name: "crawfish",
    recipeId: 5
  },
  {
    amount: 3,
    unit:"gallons",
    name: "water",
    recipeId: 5
  },
  {
    amount: .75,
    unit:"cup",
    name: "lemon juice",
    recipeId: 5
  },
  {
    amount: .5,
    unit:"cup",
    name: "white wine vinegar",
    recipeId: 5
  },
  {
    amount: 1.5,
    unit:"cup",
    name: "zatarain's pro boil",
    recipeId: 5
  },
  {
    amount: .75,
    unit:"cup",
    name: "kosher salt",
    recipeId: 5
  },
  {
    amount: 2.5,
    unit:"pounds",
    name: "small red potatoes",
    recipeId: 5
  },
  {
    amount: 2,
    unit:"whole",
    name: "medium onions",
    recipeId: 5
  },
  {
    amount: 2,
    unit:"whole",
    name: "bay leaves",
    recipeId: 5
  },
  {
    amount: 2,
    unit:"ears",
    name: "corn",
    recipeId: 5
  },
  {
    amount: .75,
    unit:"cups",
    name: "peeled garlic cloves",
    recipeId: 5
  },
  {
    amount: .75,
    unit:"pounds",
    name: "hot smoked sausage",
    recipeId: 5
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;