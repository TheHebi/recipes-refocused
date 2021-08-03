const Comment = require('../models/Comment');

const commentData = [
  {
    content:"This recipe is amazing!",
    user_id: 1,
    recipe_id: 1
  },
  {
    content:"I can't believe I've never heard of this before!",
    user_id: 2,
    recipe_id: 1
  },
  {
    content:"Where did you find this?",
    user_id: 4,
    recipe_id: 1
  },
  {
    content:"I can't wait to try this out tonight!",
    user_id: 3,
    recipe_id: 2
  },
  {
    content:"This looks delicious!",
    user_id: 2,
    recipe_id: 2
  },
  {
    content:"My family will love this recipe!",
    user_id: 1,
    recipe_id: 3
  },
  {
    content:"I'm going to make this for dinner tonight!",
    user_id: 3,
    recipe_id: 4
  },
  {
    content:"This is going to be a fantastic dinner tonight!",
    user_id: 4,
    recipe_id: 5
  },
];

const seedUsers = () => Comment.bulkCreate(commentData);

module.exports = seedUsers;