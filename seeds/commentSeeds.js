const Comment = require('../models/Comment');

const commentData = [
  {
    content:"This recipe is amazing!",
    UserId: 1,
    RecipeId: 1
  },
  {
    content:"I can't believe I've never heard of this before!",
    UserId: 2,
    RecipeId: 1
  },
  {
    content:"Where did you find this?",
    UserId: 4,
    RecipeId: 1
  },
  {
    content:"I can't wait to try this out tonight!",
    UserId: 3,
    RecipeId: 2
  },
  {
    content:"This looks delicious!",
    UserId: 1,
    RecipeId: 2
  },
  {
    content:"My family will love this recipe!",
    UserId: 2,
    RecipeId: 3
  },
  {
    content:"I'm going to make this for dinner tonight!",
    UserId: 3,
    RecipeId: 4
  },
  {
    content:"This is going to be a fantastic dinner tonight!",
    UserId: 4,
    RecipeId: 5
  },
];

const seedUsers = () => Comment.bulkCreate(commentData);

module.exports = seedUsers;