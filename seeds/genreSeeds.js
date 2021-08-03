const Genre = require('../models/Genre');

const genreData = [
  {
    category_name: 'Breakfast',
  },
  {
    category_name: 'Lunch',
  },
  {
    category_name: 'Dinner',
  },
  {
    category_name: 'Vegan',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(genreData);

module.exports = seedCategories;