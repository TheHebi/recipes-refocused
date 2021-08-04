const Recipe = require("../models/Recipe");

const recipeData = [
  {
    recipe_image: "http://placecage.com/c/200/300",
    recipe_name: "French Toast",
    prep_time: 20,
    cook_time: 10,
    UserId: 3,
  },
  {
    recipe_image: "http://fillmurray.com/200/300",
    recipe_name: "French Crepes",
    prep_time: 10,
    cook_time: 10,
    UserId: 2,
  },
  {
    recipe_image: "http://placebear.com/200/300",
    recipe_name: "Spaghetti with meat sauce",
    prep_time: 15,
    cook_time: 70,
    UserId: 1,
  },
  {
    recipe_image: "http://fillmurray.com/200/300",
    recipe_name: "Bavarian Pretzel",
    prep_time: 60,
    cook_time: 15,
    UserId: 4,
  },
  {
    recipe_image: "http://fillmurray.com/200/300",
    recipe_name: "Cajun Crawfish boil",
    prep_time: 30,
    cook_time: 120,
    UserId: 2,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
