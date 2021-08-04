const Comment = require('../models/Comment');

const commentData = [
  {
    content:"This recipe is amazing!",
    userId: 1,
    recipeId: 1
  },
  {
    content:"I can't believe I've never heard of this before!",
    userId: 2,
    recipeId: 1
  },
  {
    content:"Where did you find this?",
    userId: 4,
    recipeId: 1
  },
  {
    content:"I can't wait to try this out tonight!",
    userId: 3,
    recipeId: 2
  },
  {
    content:"This looks delicious!",
    userId: 2,
    recipeId: 2
  },
  {
    content:"My family will love this recipe!",
    userId: 1,
    recipeId: 3
  },
  {
    content:"I'm going to make this for dinner tonight!",
    user_id: 3,
    recipeId: 4
  },
  {
    content:"This is going to be a fantastic dinner tonight!",
    userId: 4,
    recipeId: 5
  },
];

const seedUsers = () => Comment.bulkCreate(commentData);

module.exports = seedUsers;