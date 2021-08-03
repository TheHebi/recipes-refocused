const Genre = require('../models/Genre');

const genreData = [
  {
    name: 'Breakfast',
  },
  {
    name: 'Lunch',
  },
  {
    name: 'Dinner',
  },
  {
    name: 'Vegan',
  },
  {
    name: 'Vegetarian',
  },
  {
    name: 'French',
  },
  {
    name: 'Chinese',
  },
  {
    name: 'Japanese',
  },
  {
    name: 'Italian',
  },
  {
    name: 'Greek',
  },
  {
    name: 'Spanish',
  },
  {
    name: 'Mediterranean',
  },
  {
    name: 'Lebanese',
  },
  {
    name: 'Moroccan',
  },
  {
    name: 'Turkish',
  },
  {
    name: 'Thai',
  },
  {
    name: 'Indian',
  },
  {
    name: 'Cajun',
  },
  {
    name: 'Mexican',
  },
  {
    name: 'German',
  },
  {
    name: 'Russian',
  },
  {
    name: 'American',
  },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;