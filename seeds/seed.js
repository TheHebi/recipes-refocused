const seedGenres = require('./genreSeeds');
const seedComments = require('./commentSeeds');
const seedUsers = require('./userSeeds');
const seedRecipes = require('./recipeSeeds');
const seedInstructions = require('./instructionSeeds')
const seedIngredients = require("./ingredientSeeds")
const addGenreToRecipe = require("./addGenreToRecipe")
const seedSavedRecipe = require('./savedRecipe')

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
  
  await seedInstructions();
  console.log('\n----- INSTRUCTIONS SEEDED -----\n');

  await addGenreToRecipe();
  console.log('\n----- INGREDIENTS ATTACHED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  await seedSavedRecipe();
  console.log('\n----- SAVEDRECIPE SEEDED -----\n');

  process.exit(0);
};

seedAll();