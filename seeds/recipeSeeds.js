const Recipe = require("../models/Recipe");

const recipeData = [
  {

    recipe_image: "https://unsplash.com/photos/AhZJjvvDIGY",
    recipe_name: "French Toast",
    prep_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    cook_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    UserId: 3,
  },
  {
    recipe_image: "http://fillmurray.com/200/300",
    recipe_name: "French Crepes",
    prep_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    cook_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    UserId: 2,
  },
  {
    recipe_image: "http://placebear.com/200/300",
    recipe_name: "Spaghetti with meat sauce",
    prep_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    cook_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    UserId: 1,
  },
  {
    recipe_image: "http://fillmurray.com/200/300",
    recipe_name: "Bavarian Pretzel",
    prep_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    cook_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    UserId: 4,
  },
  {
    recipe_image: "http://fillmurray.com/200/300",
    recipe_name: "Cajun Crawfish boil",
    prep_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    cook_time: `${Math.floor(Math.random() * 60)} hr ${Math.floor(Math.random() * 60)} min`,
    UserId: 2,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
