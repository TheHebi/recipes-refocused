const Ingredient = require('../models/Ingredient');

const ingredientData = [
  {
    amount: 1,
    unit:"teaspoon",
    name: "ground cinnamon",
    RecipeId: 1
  },
  {
    amount: .25,
    unit:"teaspoon",
    name: "ground nutmeg",
    RecipeId: 1
  },
  {
    amount: 2,
    unit:"tablespoons",
    name: "sugar",
    RecipeId: 1
  },
  {
    amount: 4,
    unit:"tablespoons",
    name: "butter",
    RecipeId: 1
  },
  {
    amount: 4,
    unit:"whole",
    name: "eggs",
    RecipeId: 1
  },
  {
    amount: .25,
    unit:"cup",
    name: "milk",
    RecipeId: 1
  },
  {
    amount: .25,
    unit:"teaspoon",
    name: "vanilla extract",
    RecipeId: 1
  },
  {
    amount: 8,
    unit:"slices",
    name: "bread",
    RecipeId: 1
  },
  {
    amount: .25,
    unit:"cup",
    name: "warm maple syrup",
    RecipeId: 1
  },
  {
    amount: 2,
    unit:"whole",
    name: "eggs",
    RecipeId: 2
  },
  {
    amount: .25,
    unit:"cup",
    name: "melted butter",
    RecipeId: 2
  },
  {
    amount: 2.5,
    unit:"tablespoons",
    name: "sugar",
    RecipeId: 2
  },
  {
    amount: .5,
    unit:"cup",
    name: "all-purpose flour",
    RecipeId: 2
  },
  {
    amount: .5,
    unit:"cup",
    name: "milk",
    RecipeId: 2
  },
  {
    amount: .25,
    unit:"cup",
    name: "water",
    RecipeId: 2
  },
  {
    amount: .25,
    unit:"teaspoon",
    name: "vanilla",
    RecipeId: 2
  },
  {
    amount: 1,
    unit:"pinch",
    name: "salt",
    RecipeId: 2
  },
  {
    amount: 1,
    unit:"pound",
    name: "ground beef",
    RecipeId: 3
  },
  {
    amount: 1,
    unit:"whole",
    name: "onion",
    RecipeId: 3
  },
  {
    amount: 4,
    unit:"cloves",
    name: "garlic",
    RecipeId: 3
  },
  {
    amount: 1,
    unit:"whole",
    name: "green bell pepper",
    RecipeId: 3
  },
  {
    amount: 28,
    unit:"ounces",
    name: "canned diced tomatoes",
    RecipeId: 3
  },
  {
    amount: 16,
    unit:"ounces",
    name: "tomatoe sauce",
    RecipeId: 3
  },
  {
    amount: 6,
    unit:"ounces",
    name: "tomatoe paste",
    RecipeId: 3
  },
  {
    amount: 2,
    unit:"teaspoons",
    name: "oregano",
    RecipeId: 3
  },
  {
    amount: 2,
    unit:"teaspoons",
    name: "basil",
    RecipeId: 3
  },
  {
    amount: 1,
    unit:"teaspoon",
    name: "salt",
    RecipeId: 3
  },
  {
    amount: .5,
    unit:"teaspon",
    name: "black pepper",
    RecipeId: 3
  },
  {
    amount: .75,
    unit:"cup",
    name: "warm water",
    RecipeId: 4
  },
  {
    amount: .25,
    unit:"ounce",
    name: "active dry yeast",
    RecipeId: 4
  },
  {
    amount: 1.5,
    unit:"tablespoons",
    name: "barely malt syrup",
    RecipeId: 4
  },
  {
    amount: 4.75,
    unit:"cups",
    name: "unbleached bread flour",
    RecipeId: 4
  },
  {
    amount: .75,
    unit:"cup",
    name: "lager or pilsner beer",
    RecipeId: 4
  },
  {
    amount: 3,
    unit:"tablespoons",
    name: "unsalted butter",
    RecipeId: 4
  },
  {
    amount: 1,
    unit:"tablespoon",
    name: "kosher salt",
    RecipeId: 4
  },
  {
    amount: .3,
    unit:"cup",
    name: "baking soda",
    RecipeId: 4
  },
  {
    amount: 1,
    unit:"large",
    name: "egg",
    RecipeId: 4
  },
  {
    amount: 1,
    unit:"tablespoon",
    name: "whole milk",
    RecipeId: 4
  },
  {
    amount: 6,
    unit:"cups",
    name: "tap water",
    RecipeId: 4
  },
  {
    amount: 10,
    unit:"pounds",
    name: "crawfish",
    RecipeId: 5
  },
  {
    amount: 3,
    unit:"gallons",
    name: "water",
    RecipeId: 5
  },
  {
    amount: .75,
    unit:"cup",
    name: "lemon juice",
    RecipeId: 5
  },
  {
    amount: .5,
    unit:"cup",
    name: "white wine vinegar",
    RecipeId: 5
  },
  {
    amount: 1.5,
    unit:"cup",
    name: "zatarain's pro boil",
    RecipeId: 5
  },
  {
    amount: .75,
    unit:"cup",
    name: "kosher salt",
    RecipeId: 5
  },
  {
    amount: 2.5,
    unit:"pounds",
    name: "small red potatoes",
    RecipeId: 5
  },
  {
    amount: 2,
    unit:"whole",
    name: "medium onions",
    RecipeId: 5
  },
  {
    amount: 2,
    unit:"whole",
    name: "bay leaves",
    RecipeId: 5
  },
  {
    amount: 2,
    unit:"ears",
    name: "corn",
    RecipeId: 5
  },
  {
    amount: .75,
    unit:"cups",
    name: "peeled garlic cloves",
    RecipeId: 5
  },
  {
    amount: .75,
    unit:"pounds",
    name: "hot smoked sausage",
    RecipeId: 5
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;