const seedGenres = require('./genreSeeds');
const seedComments = require('./commentSeeds');
const seedUsers = require('./userSeeds');
const seedRecipes = require('./recipeSeeds');
const seedIngredients = require("./ingredientSeeds")
const addGenreToRecipe = require("./addGenreToRecipe")

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedGenres();
  console.log('\n----- GENRES SEEDED -----\n');

  await seedRecipes();
  console.log('\n----- RECIPES SEEDED -----\n');

  await seedIngredients();
  console.log('\n----- INGREDIENTS SEEDED -----\n');

  await addGenreToRecipe();
  console.log('\n----- INGREDIENTS ATTACHED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();